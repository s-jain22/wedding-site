/* ============================================================================
   WEDDING GIFT REGISTRY
   ----------------------------------------------------------------------------
   Two things live in this file, and both are meant to be edited by hand:

   1) GIFTS , the list of gift ideas shown on the page. Edit freely.
   2) firebaseConfig, connects the "reserved / still available" state so that
      when one guest reserves an item, every other guest sees it as taken.

   HOW THE SHARED STATE WORKS
   Guests do not have accounts. The shared truth of "what's already reserved"
   lives in a free Firebase Firestore database. This device also remembers
   which items *you* reserved (in localStorage), so you, and only you, get a
   "Release" button to undo your own reservation.

   >>> UNTIL firebaseConfig IS FILLED IN, the page still works and shows every
   >>> gift, but reserving is disabled (there's nowhere shared to save it yet).

   ----------------------------------------------------------------------------
   ONE-TIME FIREBASE SETUP (~5 minutes, free)
   1. Go to https://console.firebase.google.com  ->  "Add project" (any name).
      You can skip Google Analytics.
   2. In the project, click the </> ("Web") icon to "Add app". Give it a
      nickname. Firebase shows you a `firebaseConfig = { ... }` snippet.
   3. Copy those values into `firebaseConfig` below.
   4. In the left menu: Build -> Firestore Database -> "Create database".
      Start in *production mode*, pick a region close to you.
   5. Open the "Rules" tab and paste the rules below, then Publish:

        rules_version = '2';
        service cloud.firestore {
          match /databases/{database}/documents {
            match /registry/{itemId} {
              allow read: if true;
              // allow claiming a free item, and releasing your own claim
              allow create: if request.resource.data.claimed == true;
              allow update: if true;
            }
          }
        }

   That's it. (These rules are intentionally simple for a small wedding guest
   list; anyone with the link can reserve/release, which is fine for trusted
   guests. Ask if you'd like stricter rules later.)
   ============================================================================ */

// ---- 1) YOUR GIFT LIST -----------------------------------------------------
// Edit these. `id` must be unique and stable (don't reuse an old id for a new
// gift). `url` is optional, a link to view/buy the item. `price` is a plain
// string so you can write it however you like ("₹4,000", "€45", "").
const GIFTS = [
  { id: "gift-01", name: "Cast-iron cookware set", price: "", url: "", note: "For the many dinners we plan to cook together." },
  { id: "gift-02", name: "Good chef's knife", price: "", url: "", note: "A proper knife we'll use every single day." },
  { id: "gift-03", name: "Handmade dinnerware set", price: "", url: "", note: "To host friends and family for years to come." },
  { id: "gift-04", name: "Espresso / coffee maker", price: "", url: "", note: "Slow mornings, together." },
  { id: "gift-05", name: "Cotton bed linen", price: "", url: "", note: "Soft neutrals for the new home." },
  { id: "gift-06", name: "Wine glasses (set of 6)", price: "", url: "", note: "For celebrating the small things." },
  { id: "gift-07", name: "Weekend luggage", price: "", url: "", note: "For the little trips between the big ones." },
  { id: "gift-08", name: "Indoor plants & pots", price: "", url: "", note: "A bit of green for the living room." },
];

// ---- 2) FIREBASE CONFIG (paste yours here) ---------------------------------
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

// ---- Dynamic button labels (chrome text is handled by i18n.js) -------------
const LABELS = {
  en: { reserve: "Reserve this gift", reserved: "Reserved", release: "Release", view: "View gift", prompt: "Your name (optional), so we can say thank you:" },
  hi: { reserve: "यह उपहार आरक्षित करें", reserved: "आरक्षित", release: "मुक्त करें", view: "देखें", prompt: "आपका नाम (वैकल्पिक), ताकि हम धन्यवाद कह सकें:" },
  fr: { reserve: "Réserver ce cadeau", reserved: "Réservé", release: "Libérer", view: "Voir le cadeau", prompt: "Votre nom (facultatif), pour vous remercier :" },
};

// ============================================================================
// Below here is machinery, you shouldn't need to edit it.
// ============================================================================

const CONFIGURED = Boolean(firebaseConfig.projectId && firebaseConfig.apiKey);
const MINE_KEY = "registryMine";

function currentLang() {
  try { return localStorage.getItem("lang") || "en"; } catch (e) { return "en"; }
}
function labels() { return LABELS[currentLang()] || LABELS.en; }

function getMine() {
  try { return JSON.parse(localStorage.getItem(MINE_KEY) || "{}"); } catch (e) { return {}; }
}
function setMine(mine) {
  try { localStorage.setItem(MINE_KEY, JSON.stringify(mine)); } catch (e) {}
}

const claimed = {}; // id -> true  (shared state mirrored from Firestore)
let firestore = null;
let fbApi = null; // { doc, setDoc, deleteField, updateDoc }

function buildCards() {
  const grid = document.getElementById("registry-grid");
  if (!grid) return;
  grid.innerHTML = "";
  GIFTS.forEach((g) => {
    const card = document.createElement("article");
    card.className = "gift-card";
    card.id = "card-" + g.id;

    const body = document.createElement("div");
    body.className = "gift-body";
    const h3 = document.createElement("h3");
    h3.className = "gift-name";
    h3.textContent = g.name;
    body.appendChild(h3);
    if (g.note) {
      const p = document.createElement("p");
      p.className = "gift-note";
      p.textContent = g.note;
      body.appendChild(p);
    }
    if (g.price) {
      const pr = document.createElement("p");
      pr.className = "gift-price";
      pr.textContent = g.price;
      body.appendChild(pr);
    }
    card.appendChild(body);

    const actions = document.createElement("div");
    actions.className = "gift-actions";
    if (g.url) {
      const a = document.createElement("a");
      a.className = "gift-view";
      a.href = g.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("data-role", "view");
      a.textContent = labels().view;
      actions.appendChild(a);
    }
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "gift-btn";
    btn.setAttribute("data-id", g.id);
    btn.addEventListener("click", () => onToggle(g.id));
    actions.appendChild(btn);
    card.appendChild(actions);

    grid.appendChild(card);
    renderCard(g.id);
  });
}

function renderCard(id) {
  const card = document.getElementById("card-" + id);
  if (!card) return;
  const btn = card.querySelector(".gift-btn");
  const mine = getMine();
  const isClaimed = !!claimed[id];
  const isMine = !!mine[id];
  const L = labels();

  card.classList.toggle("is-reserved", isClaimed);
  card.classList.toggle("is-mine", isMine);

  if (!CONFIGURED) {
    btn.textContent = L.reserve;
    btn.disabled = true;
    btn.classList.remove("gift-btn--release");
    return;
  }
  if (isClaimed && isMine) {
    btn.textContent = L.release;
    btn.disabled = false;
    btn.classList.add("gift-btn--release");
  } else if (isClaimed) {
    btn.textContent = L.reserved;
    btn.disabled = true;
    btn.classList.remove("gift-btn--release");
  } else {
    btn.textContent = L.reserve;
    btn.disabled = false;
    btn.classList.remove("gift-btn--release");
  }
}

function renderAll() { GIFTS.forEach((g) => renderCard(g.id)); }

async function onToggle(id) {
  if (!CONFIGURED || !firestore || !fbApi) return;
  const mine = getMine();
  const ref = fbApi.doc(firestore, "registry", id);

  if (claimed[id] && mine[id]) {
    // Release my own reservation.
    try {
      await fbApi.setDoc(ref, { claimed: false, name: "", at: Date.now() });
      delete mine[id];
      setMine(mine);
    } catch (e) { alert("Sorry, that didn't save. Please try again."); }
    return;
  }
  if (claimed[id]) return; // someone else has it

  let name = "";
  try { name = window.prompt(labels().prompt) || ""; } catch (e) {}
  try {
    await fbApi.setDoc(ref, { claimed: true, name: name.slice(0, 60), at: Date.now() });
    mine[id] = true;
    setMine(mine);
  } catch (e) { alert("Sorry, that didn't save. Please try again."); }
}

function showOfflineNotice() {
  const n = document.getElementById("registry-offline");
  if (n) n.hidden = false;
}

async function initFirebase() {
  if (!CONFIGURED) { showOfflineNotice(); return; }
  try {
    const appMod = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
    const fsMod = await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
    const app = appMod.initializeApp(firebaseConfig);
    firestore = fsMod.getFirestore(app);
    fbApi = { doc: fsMod.doc, setDoc: fsMod.setDoc };
    // Live updates: whenever the registry collection changes, re-render.
    fsMod.onSnapshot(fsMod.collection(firestore, "registry"), (snap) => {
      Object.keys(claimed).forEach((k) => delete claimed[k]);
      snap.forEach((d) => { if (d.data().claimed) claimed[d.id] = true; });
      renderAll();
    });
  } catch (e) {
    showOfflineNotice();
  }
}

// Re-label the JS-rendered bits when the visitor changes language.
document.addEventListener("langchange", () => {
  GIFTS.forEach((g) => {
    const card = document.getElementById("card-" + g.id);
    if (!card) return;
    const view = card.querySelector('[data-role="view"]');
    if (view) view.textContent = labels().view;
  });
  renderAll();
});

buildCards();
initFirebase();
