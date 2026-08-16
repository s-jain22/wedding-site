// Mobile nav toggle
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

// Close the menu after tapping a link
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Highlight the nav link for the section currently in view (scroll spy)
(function () {
  const spyLinks = Array.from(
    document.querySelectorAll(".nav-links a, .nav-sub a")
  ).filter((a) => (a.getAttribute("href") || "").startsWith("#"));
  if (!spyLinks.length) return;

  const sections = spyLinks
    .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);
  if (!sections.length) return;

  const nav = document.querySelector(".site-nav");

  function setActive() {
    const offset = (nav ? nav.offsetHeight : 0) + 24;
    let current = null;
    for (const sec of sections) {
      if (sec.getBoundingClientRect().top - offset <= 0) current = sec;
    }
    // Snap to the last section once scrolled to the very bottom.
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
      current = sections[sections.length - 1];
    }
    spyLinks.forEach((a) =>
      a.classList.toggle(
        "active",
        !!current && a.getAttribute("href").slice(1) === current.id
      )
    );
  }

  window.addEventListener("scroll", setActive, { passive: true });
  window.addEventListener("resize", setActive);
  setActive();
})();
