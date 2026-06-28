// Lightweight i18n: swaps text on [data-i18n] nodes. English is the default
// and lives in the HTML, so the page still works if this script fails.
const I18N = {
  en: {
    nav_events: "Events", nav_venue: "Venue", nav_travel: "Getting There",
    nav_stay: "Stay", nav_attire: "Attire", nav_faq: "FAQ",
    nav_guide: "Guest Guide",

    ig_kicker: "For our international guests",
    ig_title: "A Guide to Jaipur",
    ig_intro: "Travelling to India for the first time? This guide covers the practical things &mdash; visas, flights, where to stay and eat, renting an outfit, and what to see while you&rsquo;re here. Specific recommendations and booking links will be added as we confirm them.",
    ig_home: "&larr; Back to the wedding home",

    ignav_visa: "Visa", ignav_flights: "Flights", ignav_stay: "Stay",
    ignav_outfits: "Outfits", ignav_eat: "Eat", ignav_see: "See", ignav_tips: "Tips",

    ig_visa_h: "Visa &amp; Entry",
    ig_visa_p: "Most visitors need a visa to enter India. The simplest option for tourists is the <strong>e-Visa</strong>, applied for online before you travel at the official portal (indianvisaonline.gov.in). Apply at least 1&ndash;2 weeks ahead. Your passport should be valid for at least six months from your date of arrival and have two blank pages. Always check the current requirements for your nationality.",

    ig_flights_h: "Flights &amp; Getting to Jaipur",
    ig_flights_p: "Jaipur&rsquo;s airport (JAI) has limited direct international routes, so most guests fly into <strong>Delhi (DEL)</strong> or <strong>Mumbai (BOM)</strong> and take a short domestic connection to Jaipur. Carriers serving India include Air India, IndiGo and Vistara domestically, and Emirates, Qatar Airways, Lufthansa, British Airways and Air France internationally. Delhi to Jaipur is also an easy 4&ndash;5 hour drive or train if you prefer to land once.",

    ig_stay_h: "Where to Stay in Jaipur",
    ig_stay_p: "Jaipur has everything from heritage palace hotels to boutique guesthouses. Convenient areas include <strong>Civil Lines</strong> and <strong>C-Scheme</strong> (central, leafy), and around <strong>Amer</strong> for views and heritage stays. We&rsquo;ll share a shortlist with group rates &mdash; in the meantime, booking early for February is wise as it&rsquo;s peak season.",

    ig_outfits_h: "Renting &amp; Buying Outfits",
    ig_outfits_p: "You don&rsquo;t need to buy traditional wear &mdash; renting is easy and popular. Jaipur and Delhi have many shops and online services renting sarees, lehengas, sherwanis and kurtas, often with delivery to your hotel and help with draping. We&rsquo;ll list trusted rental partners here. If you&rsquo;d like to buy, Jaipur is famous for block-printed and bandhani fabrics.",

    ig_eat_h: "Where to Eat",
    ig_eat_p: "Jaipur is a paradise for vegetarian food. Try Rajasthani thalis (dal-baati-churma), street snacks like pyaaz kachori and ghewar, and lassi in a clay cup. Well-known spots include Laxmi Misthan Bhandar (LMB), Rawat Mishthan Bhandar and Chokhi Dhani for a village-style cultural dinner. Tap water isn&rsquo;t safe to drink &mdash; stick to bottled or filtered water.",

    ig_see_h: "What to See",
    ig_see_p: "If you have spare days, Jaipur&rsquo;s highlights include the <strong>Amber Fort</strong>, <strong>City Palace</strong>, <strong>Hawa Mahal</strong> (Palace of Winds), the <strong>Jantar Mantar</strong> observatory, and <strong>Nahargarh Fort</strong> for sunset views. For shopping, head to Johari Bazaar and Bapu Bazaar for jewellery, textiles and souvenirs. Agra (the Taj Mahal) is around 4&ndash;5 hours away if you want to extend your trip.",

    ig_tips_h: "Practical Tips",
    ig_tips_p: "<strong>Money:</strong> the currency is the Indian Rupee (INR); cards work in hotels, carry cash for markets and tips. <strong>Connectivity:</strong> a local SIM or eSIM is cheap and handy. <strong>Getting around:</strong> Uber and Ola work well in the city. <strong>Weather:</strong> February is warm and sunny by day, cooler at night &mdash; bring a light layer. <strong>Plugs:</strong> 230V, type D/M sockets &mdash; bring an adapter.",

    hero_kicker: "Together with their families",
    hero_date: "22 &ndash; 23 February 2027",
    hero_place: "Ridhi Resort &middot; Jaipur, India",
    hero_cta: "View the celebrations",

    welcome_title: "Welcome",
    welcome_p1: "We are so happy to have you with us as we celebrate our wedding in the beautiful pink city of Jaipur. Whether you are travelling from across India or across the world, this page has everything you need &mdash; where to be, when to be there, and how to get the most out of your trip.",
    welcome_p2: "Take your time exploring. If anything is unclear, our contacts are at the bottom of the page.",

    cel_title: "The Celebrations",
    cel_sub: "Three days of festivities. Many of the events are traditional Indian ceremonies &mdash; we&rsquo;ve added a short note on each so everyone can follow along. Timings are indicative and may shift slightly.",
    day1_label: "Day 1", day1_date: "22 February 2027",
    day2_label: "Day 2", day2_date: "23 February 2027",
    day3_label: "Day 3", day3_date: "24 February 2027",
    th_time: "Time", th_event: "Event", th_details: "Details",

    d1r1_t: "Morning", d1r1_e: "Arrivals", d1r1_d: "Transfers to Ridhi Resort.",
    d1r2_t: "Noon", d1r2_e: "Welcome Lunch", d1r2_d: "A relaxed lunch to welcome everyone, hosted by Sonali&rsquo;s family, who are from Jaipur.",
    d1r3_t: "Afternoon onwards", d1r3_e: "Check-in", d1r3_d: "Ridhi Resort, Jaipur",
    d1r4_t: "3:00 PM", d1r4_e: "Mehendi", d1r4_d: "Intricate henna designs are applied to the hands of the bride and the women guests &mdash; a colourful, social afternoon. Everyone is welcome to get henna too.",
    d1r5_t: "6:00 &ndash; 7:00 PM", d1r5_e: "Mayra", d1r5_d: "A traditional family ceremony in which the bride&rsquo;s maternal uncle and his family arrive with gifts and blessings.",

    d2r1_t: "6:00 &ndash; 7:00 AM", d2r1_e: "Bindayak", d2r1_d: "An auspicious opening ceremony that marks the formal start of the wedding rituals.",
    d2r2_t: "10:00 AM", d2r2_e: "Haldi", d2r2_d: "A turmeric paste is applied to the bride and groom for blessings and a natural glow before the wedding &mdash; expect bright yellow and plenty of laughter.",
    d2r3_t: "4:30 PM", d2r3_e: "Baraat", d2r3_d: "The groom&rsquo;s festive arrival procession, with music and dancing on the way to the venue &mdash; guests are warmly invited to join in.",
    d2r4_t: "5:00 PM", d2r4_e: "Phera", d2r4_d: "The heart of the wedding: the couple take their vows while circling a sacred fire together, accompanied by live music.",
    d2r5_t: "7:30 PM", d2r5_e: "Varmala", d2r5_d: "The bride and groom exchange flower garlands to mark their union, as the groom makes his grand entry.",
    d2r5b_t: "~8:00 PM", d2r5b_e: "Ring Exchange", d2r5b_d: "A separate, intimate moment bridging the Hindu ceremony and the Western tradition &mdash; Sonali and Thomas exchange rings and vows in a quieter setting, just before the reception.",
    d2r6_t: "8:30 PM", d2r6_e: "Live Band Reception", d2r6_d: "Dinner, drinks and dancing with a live band to close the celebrations.",

    d3r1_t: "Morning", d3r1_e: "Breakfast + Brunch", d3r1_d: "A relaxed breakfast and brunch for guests staying at the resort.",
    d3r2_t: "Morning", d3r2_e: "Checkout", d3r2_d: "Check-out from Ridhi Resort.",

    venue_title: "The Venue",
    venue_h: "Ridhi Resort, Jaipur",
    venue_p: "All events take place at Ridhi Resort, set against the backdrop of Jaipur&rsquo;s Aravalli hills. The resort offers a relaxed setting for the celebrations, with space for both ceremonies and quieter moments between events.",
    venue_note: "Full address and a map link will be added here.",
    venue_cta: "Open in Google Maps",

    travel_title: "Getting There",
    air_h: "By Air",
    air_p: "Fly into Jaipur International Airport (JAI), roughly a 30&ndash;45 minute drive from the venue. International guests can connect via Delhi (DEL) or Mumbai (BOM).",
    train_h: "By Train",
    train_p: "Jaipur Junction is well connected to Delhi and other major cities. Pre-booked taxis and ride apps are available at the station.",
    local_h: "Local Transport",
    local_p: "We will arrange transfers between recommended hotels and the venue for the main events. Details to follow. Uber and Ola also operate in Jaipur.",

    stay_title: "Where to Stay",
    stay_sub: "We&rsquo;ll list a few recommended hotels at a range of budgets here, with booking details.",
    stay_h1: "At the Venue", stay_p1: "Limited rooms may be available at Ridhi Resort. Details to be confirmed.",
    stay_h2: "Recommended Hotels", stay_p2: "A shortlist of nearby hotels with our group rates will be added soon.",
    stay_h3: "Booking Help", stay_p3: "Need a hand booking? Reach out to our contacts below and we&rsquo;ll help.",

    attire_title: "Attire &amp; Dressing Up",
    dress_h: "Dress Code",
    dress_p: "Indian festive wear is encouraged for all events &mdash; and very much welcomed from our international guests! Think colour, comfort, and shoes you can dance in. A detailed dress code per event will be added.",
    rent_h: "Renting &amp; Buying Outfits",
    rent_p: "New to Indian outfits? You don&rsquo;t need to buy anything. We&rsquo;ll recommend rental services and shops in Jaipur and Delhi for sarees, lehengas, sherwanis and kurtas &mdash; including options that deliver to your hotel.",
    rent_note: "Rental partners and links coming soon.",

    faq_title: "Good to Know",
    faq_q1: "Do I need a visa for India?", faq_a1: "Most international guests can apply for an e-Visa online. Check requirements for your nationality well in advance.",
    faq_q2: "What will the weather be like?", faq_a2: "February in Jaipur is pleasant &mdash; warm, sunny days (around 25&deg;C) and cooler evenings. Bring a light layer for the night events.",
    faq_q3: "What currency should I bring?", faq_a3: "The Indian Rupee (INR). Cards are widely accepted in hotels; carry some cash for smaller purchases and tips.",
    faq_q4: "Will there be vegetarian food?", faq_a4: "Yes &mdash; the food is fully vegetarian, with plenty of options throughout.",

    footer_title: "With love, Sonali &amp; Thomas",
    footer_date: "22 &ndash; 23 February 2027 &middot; Ridhi Resort, Jaipur",
    footer_contact: 'Questions? Contact us at <a href="mailto:hello@example.com">hello@example.com</a>',
  },

  hi: {
    nav_events: "कार्यक्रम", nav_venue: "स्थल", nav_travel: "कैसे पहुँचें",
    nav_stay: "ठहराव", nav_attire: "परिधान", nav_faq: "सामान्य प्रश्न",
    nav_guide: "अतिथि गाइड",

    hero_kicker: "अपने परिवारों के साथ",
    hero_date: "22 &ndash; 23 फ़रवरी 2027",
    hero_place: "रिधि रिज़ॉर्ट &middot; जयपुर, भारत",
    hero_cta: "समारोह देखें",

    welcome_title: "स्वागत है",
    welcome_p1: "जयपुर की खूबसूरत गुलाबी नगरी में हमारी शादी के इस उत्सव में आपका साथ पाकर हमें बेहद खुशी है। आप भारत के किसी कोने से आ रहे हों या दुनिया के, इस पृष्ठ पर आपकी ज़रूरत की हर जानकारी है &mdash; कहाँ पहुँचना है, कब पहुँचना है, और अपनी यात्रा का पूरा आनंद कैसे लेना है।",
    welcome_p2: "आराम से देखिए। अगर कुछ स्पष्ट न हो, तो पृष्ठ के नीचे हमारे संपर्क दिए गए हैं।",

    cel_title: "समारोह",
    cel_sub: "तीन दिनों का उत्सव। हर कार्यक्रम के साथ एक छोटा-सा विवरण दिया गया है ताकि सभी अतिथि साथ चल सकें। समय अनुमानित है और इसमें थोड़ा बदलाव हो सकता है।",
    day1_label: "दिन 1", day1_date: "22 फ़रवरी 2027",
    day2_label: "दिन 2", day2_date: "23 फ़रवरी 2027",
    day3_label: "दिन 3", day3_date: "24 फ़रवरी 2027",
    th_time: "समय", th_event: "कार्यक्रम", th_details: "विवरण",

    d1r1_t: "सुबह", d1r1_e: "आगमन", d1r1_d: "रिधि रिज़ॉर्ट तक परिवहन की व्यवस्था।",
    d1r2_t: "दोपहर", d1r2_e: "स्वागत भोज", d1r2_d: "सबके स्वागत के लिए एक सहज दोपहर का भोज, सोनाली के परिवार द्वारा आयोजित, जो जयपुर से हैं।",
    d1r3_t: "दोपहर से", d1r3_e: "चेक-इन", d1r3_d: "रिधि रिज़ॉर्ट, जयपुर",
    d1r4_t: "3:00 अपराह्न", d1r4_e: "मेहंदी", d1r4_d: "दुल्हन और महिला अतिथियों के हाथों पर सुंदर मेहंदी लगाई जाती है &mdash; एक रंगीन और उत्सवपूर्ण दोपहर। सभी अतिथि भी मेहंदी लगवा सकते हैं।",
    d1r5_t: "6:00 &ndash; 7:00 अपराह्न", d1r5_e: "मायरा", d1r5_d: "एक पारंपरिक पारिवारिक रस्म, जिसमें दुल्हन के मामा और उनका परिवार उपहार और आशीर्वाद लेकर आते हैं।",

    d2r1_t: "6:00 &ndash; 7:00 पूर्वाह्न", d2r1_e: "बिंदायक", d2r1_d: "एक शुभ रस्म, जो विवाह की रस्मों का औपचारिक आरंभ है।",
    d2r2_t: "10:00 पूर्वाह्न", d2r2_e: "हल्दी", d2r2_d: "विवाह से पहले दूल्हा-दुल्हन पर आशीर्वाद और प्राकृतिक निखार के लिए हल्दी का लेप लगाया जाता है &mdash; खूब पीलापन और हँसी-मज़ाक।",
    d2r3_t: "4:30 अपराह्न", d2r3_e: "बारात", d2r3_d: "दूल्हे की उत्सवपूर्ण बारात, स्थल तक संगीत और नृत्य के साथ &mdash; अतिथि भी सहर्ष शामिल हो सकते हैं।",
    d2r4_t: "5:00 अपराह्न", d2r4_e: "फेरा", d2r4_d: "विवाह का मुख्य भाग: दूल्हा-दुल्हन पवित्र अग्नि के फेरे लेकर विवाह के वचन लेते हैं, लाइव संगीत के साथ।",
    d2r5_t: "7:30 अपराह्न", d2r5_e: "वरमाला", d2r5_d: "दूल्हे के भव्य आगमन पर दूल्हा-दुल्हन एक-दूसरे को वरमाला पहनाते हैं।",
    d2r5b_t: "~8:00 अपराह्न", d2r5b_e: "रिंग एक्सचेंज", d2r5b_d: "हिंदू रस्मों और पश्चिमी परंपरा को जोड़ता एक अलग, आत्मीय पल &mdash; सोनाली और थॉमस एक शांत माहौल में अंगूठियाँ और वचन साझा करते हैं, रिसेप्शन से ठीक पहले।",
    d2r6_t: "8:30 अपराह्न", d2r6_e: "लाइव बैंड स्वागत समारोह", d2r6_d: "लाइव बैंड के साथ रात्रिभोज, पेय और नृत्य &mdash; समारोह का समापन।",

    d3r1_t: "सुबह", d3r1_e: "नाश्ता + ब्रंच", d3r1_d: "रिज़ॉर्ट में ठहरे अतिथियों के लिए आरामदेह नाश्ता और ब्रंच।",
    d3r2_t: "सुबह", d3r2_e: "चेकआउट", d3r2_d: "रिधि रिज़ॉर्ट से चेक-आउट।",

    venue_title: "स्थल",
    venue_h: "रिधि रिज़ॉर्ट, जयपुर",
    venue_p: "सभी कार्यक्रम रिधि रिज़ॉर्ट में होंगे, जो जयपुर की अरावली पहाड़ियों की पृष्ठभूमि में बसा है। यह रिज़ॉर्ट समारोहों के लिए एक सुकूनभरा वातावरण देता है, जहाँ रस्मों और बीच के शांत पलों दोनों के लिए जगह है।",
    venue_note: "पूरा पता और मानचित्र लिंक यहाँ जोड़ा जाएगा।",
    venue_cta: "गूगल मैप्स में खोलें",

    travel_title: "कैसे पहुँचें",
    air_h: "हवाई मार्ग से",
    air_p: "जयपुर अंतरराष्ट्रीय हवाई अड्डे (JAI) तक उड़ान भरें, जो स्थल से लगभग 30&ndash;45 मिनट की दूरी पर है। अंतरराष्ट्रीय अतिथि दिल्ली (DEL) या मुंबई (BOM) के रास्ते आ सकते हैं।",
    train_h: "रेल मार्ग से",
    train_p: "जयपुर जंक्शन दिल्ली और अन्य प्रमुख शहरों से अच्छी तरह जुड़ा है। स्टेशन पर पहले से बुक टैक्सी और राइड ऐप उपलब्ध हैं।",
    local_h: "स्थानीय परिवहन",
    local_p: "मुख्य कार्यक्रमों के लिए हम अनुशंसित होटलों और स्थल के बीच परिवहन की व्यवस्था करेंगे। विवरण जल्द। जयपुर में उबर और ओला भी उपलब्ध हैं।",

    stay_title: "कहाँ ठहरें",
    stay_sub: "हम यहाँ अलग-अलग बजट के कुछ अनुशंसित होटल, बुकिंग विवरण के साथ सूचीबद्ध करेंगे।",
    stay_h1: "स्थल पर", stay_p1: "रिधि रिज़ॉर्ट में सीमित कमरे उपलब्ध हो सकते हैं। विवरण की पुष्टि बाकी है।",
    stay_h2: "अनुशंसित होटल", stay_p2: "हमारी समूह दरों के साथ पास के होटलों की सूची जल्द जोड़ी जाएगी।",
    stay_h3: "बुकिंग में सहायता", stay_p3: "बुकिंग में मदद चाहिए? नीचे दिए हमारे संपर्कों से संपर्क करें, हम मदद करेंगे।",

    attire_title: "परिधान एवं श्रृंगार",
    dress_h: "ड्रेस कोड",
    dress_p: "सभी कार्यक्रमों के लिए भारतीय उत्सव परिधान प्रोत्साहित हैं &mdash; और हमारे विदेशी अतिथियों का इसमें विशेष स्वागत है! रंग, आराम और ऐसे जूते चुनें जिनमें आप नाच सकें। हर कार्यक्रम के लिए विस्तृत ड्रेस कोड जोड़ा जाएगा।",
    rent_h: "परिधान किराए पर लें या खरीदें",
    rent_p: "भारतीय परिधानों से अनजान हैं? आपको कुछ खरीदने की ज़रूरत नहीं। हम जयपुर और दिल्ली में साड़ी, लहंगा, शेरवानी और कुर्ते के लिए किराए की सेवाएँ और दुकानें सुझाएँगे &mdash; जिनमें आपके होटल तक पहुँचाने वाले विकल्प भी शामिल हैं।",
    rent_note: "किराए के साझेदार और लिंक जल्द।",

    faq_title: "जानने योग्य बातें",
    faq_q1: "क्या मुझे भारत के लिए वीज़ा चाहिए?", faq_a1: "अधिकांश विदेशी अतिथि ऑनलाइन ई-वीज़ा के लिए आवेदन कर सकते हैं। अपनी राष्ट्रीयता की शर्तें पहले से जाँच लें।",
    faq_q2: "मौसम कैसा रहेगा?", faq_a2: "फ़रवरी में जयपुर का मौसम सुहावना रहता है &mdash; गरम, धूप वाले दिन (लगभग 25&deg;C) और ठंडी शामें। रात के कार्यक्रमों के लिए हल्के गरम कपड़े साथ लाएँ।",
    faq_q3: "मुझे कौन-सी मुद्रा लानी चाहिए?", faq_a3: "भारतीय रुपया (INR)। होटलों में कार्ड व्यापक रूप से स्वीकार्य हैं; छोटी खरीदारी और टिप के लिए कुछ नकद रखें।",
    faq_q4: "क्या शाकाहारी भोजन होगा?", faq_a4: "हाँ &mdash; पूरा भोजन शाकाहारी रहेगा, और पूरे आयोजन में भरपूर विकल्प उपलब्ध रहेंगे।",

    footer_title: "सस्नेह, सोनाली और थॉमस",
    footer_date: "22 &ndash; 23 फ़रवरी 2027 &middot; रिधि रिज़ॉर्ट, जयपुर",
    footer_contact: 'सवाल? हमसे संपर्क करें <a href="mailto:hello@example.com">hello@example.com</a>',
  },

  fr: {
    nav_events: "Programme", nav_venue: "Lieu", nav_travel: "Accès",
    nav_stay: "Hébergement", nav_attire: "Tenue", nav_faq: "FAQ",
    nav_guide: "Guide invités",

    ig_kicker: "Pour nos invités internationaux",
    ig_title: "Guide de Jaipur",
    ig_intro: "Vous voyagez en Inde pour la première fois ? Ce guide couvre l&rsquo;essentiel pratique &mdash; visas, vols, où loger et manger, louer une tenue, et que voir sur place. Des recommandations précises et des liens de réservation seront ajoutés au fur et à mesure.",
    ig_home: "&larr; Retour à l&rsquo;accueil du mariage",

    ignav_visa: "Visa", ignav_flights: "Vols", ignav_stay: "Hébergement",
    ignav_outfits: "Tenues", ignav_eat: "Manger", ignav_see: "Visiter", ignav_tips: "Conseils",

    ig_visa_h: "Visa &amp; Entrée",
    ig_visa_p: "La plupart des visiteurs ont besoin d&rsquo;un visa pour entrer en Inde. L&rsquo;option la plus simple pour les touristes est l&rsquo;<strong>e-Visa</strong>, à demander en ligne avant le départ sur le portail officiel (indianvisaonline.gov.in). Faites-le au moins 1&ndash;2 semaines à l&rsquo;avance. Votre passeport doit être valable au moins six mois à compter de votre date d&rsquo;arrivée et comporter deux pages vierges. Vérifiez toujours les conditions en vigueur pour votre nationalité.",

    ig_flights_h: "Vols &amp; accès à Jaipur",
    ig_flights_p: "L&rsquo;aéroport de Jaipur (JAI) a peu de liaisons internationales directes ; la plupart des invités atterrissent donc à <strong>Delhi (DEL)</strong> ou <strong>Mumbai (BOM)</strong> puis prennent une courte correspondance intérieure vers Jaipur. Les compagnies desservant l&rsquo;Inde incluent Air India, IndiGo et Vistara en intérieur, et Emirates, Qatar Airways, Lufthansa, British Airways et Air France à l&rsquo;international. Delhi&ndash;Jaipur se fait aussi facilement en 4&ndash;5 h de route ou en train si vous préférez n&rsquo;atterrir qu&rsquo;une fois.",

    ig_stay_h: "Où loger à Jaipur",
    ig_stay_p: "Jaipur propose de tout, des hôtels-palais patrimoniaux aux maisons d&rsquo;hôtes de charme. Les quartiers pratiques incluent <strong>Civil Lines</strong> et <strong>C-Scheme</strong> (centraux et verdoyants), et les environs d&rsquo;<strong>Amer</strong> pour les vues et les séjours patrimoniaux. Nous partagerons une sélection avec des tarifs de groupe &mdash; en attendant, réservez tôt pour février, c&rsquo;est la haute saison.",

    ig_outfits_h: "Louer &amp; acheter des tenues",
    ig_outfits_p: "Pas besoin d&rsquo;acheter une tenue traditionnelle &mdash; la location est simple et courante. Jaipur et Delhi comptent de nombreuses boutiques et services en ligne louant saris, lehengas, sherwanis et kurtas, souvent avec livraison à l&rsquo;hôtel et aide pour le drapage. Nous indiquerons ici des partenaires de location de confiance. Si vous souhaitez acheter, Jaipur est réputée pour ses tissus à impression au tampon (block-print) et bandhani.",

    ig_eat_h: "Où manger",
    ig_eat_p: "Jaipur est un paradis pour la cuisine végétarienne. Goûtez les thalis rajasthanis (dal-baati-churma), les en-cas de rue comme le pyaaz kachori et le ghewar, et le lassi servi dans un gobelet en terre. Parmi les adresses connues : Laxmi Misthan Bhandar (LMB), Rawat Mishthan Bhandar, et Chokhi Dhani pour un dîner culturel façon village. L&rsquo;eau du robinet n&rsquo;est pas potable &mdash; privilégiez l&rsquo;eau en bouteille ou filtrée.",

    ig_see_h: "Que visiter",
    ig_see_p: "Si vous avez des jours libres, les incontournables de Jaipur incluent le <strong>Fort d&rsquo;Amber</strong>, le <strong>City Palace</strong>, le <strong>Hawa Mahal</strong> (palais des Vents), l&rsquo;observatoire <strong>Jantar Mantar</strong>, et le <strong>Fort de Nahargarh</strong> pour le coucher du soleil. Pour le shopping, rendez-vous à Johari Bazaar et Bapu Bazaar pour les bijoux, les textiles et les souvenirs. Agra (le Taj Mahal) est à environ 4&ndash;5 h si vous souhaitez prolonger votre séjour.",

    ig_tips_h: "Conseils pratiques",
    ig_tips_p: "<strong>Argent :</strong> la monnaie est la roupie indienne (INR) ; les cartes passent dans les hôtels, prévoyez des espèces pour les marchés et les pourboires. <strong>Connexion :</strong> une SIM locale ou eSIM est bon marché et pratique. <strong>Déplacements :</strong> Uber et Ola fonctionnent bien en ville. <strong>Météo :</strong> février est chaud et ensoleillé en journée, plus frais le soir &mdash; prévoyez une couche légère. <strong>Prises :</strong> 230 V, prises type D/M &mdash; prévoyez un adaptateur.",

    hero_kicker: "Avec leurs familles",
    hero_date: "22 &ndash; 23 février 2027",
    hero_place: "Ridhi Resort &middot; Jaipur, Inde",
    hero_cta: "Voir les célébrations",

    welcome_title: "Bienvenue",
    welcome_p1: "Nous sommes très heureux de vous compter parmi nous pour célébrer notre mariage dans la magnifique ville rose de Jaipur. Que vous veniez de l&rsquo;autre bout de l&rsquo;Inde ou du monde, cette page contient tout ce qu&rsquo;il vous faut &mdash; où aller, quand y être, et comment profiter au mieux de votre séjour.",
    welcome_p2: "Prenez votre temps pour explorer. Si quelque chose n&rsquo;est pas clair, nos contacts figurent en bas de page.",

    cel_title: "Les Célébrations",
    cel_sub: "Trois jours de festivités. La plupart des événements sont des cérémonies indiennes traditionnelles &mdash; une courte note accompagne chacune pour que tout le monde puisse suivre. Les horaires sont indicatifs et peuvent légèrement changer.",
    day1_label: "Jour 1", day1_date: "22 février 2027",
    day2_label: "Jour 2", day2_date: "23 février 2027",
    day3_label: "Jour 3", day3_date: "24 février 2027",
    th_time: "Heure", th_event: "Événement", th_details: "Détails",

    d1r1_t: "Matin", d1r1_e: "Arrivées", d1r1_d: "Transferts vers le Ridhi Resort.",
    d1r2_t: "Midi", d1r2_e: "Déjeuner de bienvenue", d1r2_d: "Un déjeuner convivial pour accueillir tout le monde, offert par la famille de Sonali, originaire de Jaipur.",
    d1r3_t: "À partir de l&rsquo;après-midi", d1r3_e: "Arrivée à l&rsquo;hôtel", d1r3_d: "Ridhi Resort, Jaipur",
    d1r4_t: "15h00", d1r4_e: "Mehendi", d1r4_d: "De fins motifs au henné sont appliqués sur les mains de la mariée et des invitées &mdash; un après-midi coloré et convivial. Chacun peut aussi se faire faire un henné.",
    d1r5_t: "18h00 &ndash; 19h00", d1r5_e: "Mayra", d1r5_d: "Une cérémonie familiale traditionnelle où l&rsquo;oncle maternel de la mariée et sa famille arrivent avec cadeaux et bénédictions.",

    d2r1_t: "6h00 &ndash; 7h00", d2r1_e: "Bindayak", d2r1_d: "Une cérémonie d&rsquo;ouverture de bon augure qui marque le début officiel des rituels du mariage.",
    d2r2_t: "10h00", d2r2_e: "Haldi", d2r2_d: "Une pâte de curcuma est appliquée sur les mariés pour les bénir et leur donner un éclat naturel avant le mariage &mdash; beaucoup de jaune et de rires.",
    d2r3_t: "16h30", d2r3_e: "Baraat", d2r3_d: "La procession festive d&rsquo;arrivée du marié, avec musique et danse jusqu&rsquo;au lieu &mdash; les invités sont chaleureusement conviés à se joindre.",
    d2r4_t: "17h00", d2r4_e: "Phera", d2r4_d: "Le cœur du mariage : les mariés échangent leurs vœux en tournant ensemble autour d&rsquo;un feu sacré, accompagnés de musique live.",
    d2r5_t: "19h30", d2r5_e: "Varmala", d2r5_d: "Les mariés échangent des guirlandes de fleurs pour célébrer leur union, lors de l&rsquo;entrée solennelle du marié.",
    d2r5b_t: "~20h00", d2r5b_e: "Échange des alliances", d2r5b_d: "Un moment à part, intime, qui relie la cérémonie hindoue à la tradition occidentale &mdash; Sonali et Thomas échangent alliances et vœux dans un cadre plus calme, juste avant la réception.",
    d2r6_t: "20h30", d2r6_e: "Réception avec groupe live", d2r6_d: "Dîner, boissons et danse avec un groupe live pour clôturer les célébrations.",

    d3r1_t: "Matin", d3r1_e: "Petit-déjeuner + brunch", d3r1_d: "Un petit-déjeuner et un brunch détendus pour les invités séjournant au resort.",
    d3r2_t: "Matin", d3r2_e: "Départ", d3r2_d: "Départ du Ridhi Resort.",

    venue_title: "Le Lieu",
    venue_h: "Ridhi Resort, Jaipur",
    venue_p: "Tous les événements se déroulent au Ridhi Resort, niché au pied des collines Aravalli de Jaipur. Le complexe offre un cadre détendu pour les célébrations, avec de l&rsquo;espace pour les cérémonies comme pour les moments plus calmes entre les événements.",
    venue_note: "L&rsquo;adresse complète et un lien vers la carte seront ajoutés ici.",
    venue_cta: "Ouvrir dans Google Maps",

    travel_title: "Accès",
    air_h: "En avion",
    air_p: "Atterrissez à l&rsquo;aéroport international de Jaipur (JAI), à environ 30&ndash;45 minutes en voiture du lieu. Les invités internationaux peuvent transiter par Delhi (DEL) ou Mumbai (BOM).",
    train_h: "En train",
    train_p: "Jaipur Junction est bien reliée à Delhi et aux autres grandes villes. Des taxis réservés à l&rsquo;avance et des applis de VTC sont disponibles à la gare.",
    local_h: "Transport local",
    local_p: "Nous organiserons des transferts entre les hôtels recommandés et le lieu pour les événements principaux. Détails à venir. Uber et Ola opèrent aussi à Jaipur.",

    stay_title: "Où loger",
    stay_sub: "Nous listerons ici quelques hôtels recommandés pour différents budgets, avec les détails de réservation.",
    stay_h1: "Sur place", stay_p1: "Un nombre limité de chambres peut être disponible au Ridhi Resort. Détails à confirmer.",
    stay_h2: "Hôtels recommandés", stay_p2: "Une sélection d&rsquo;hôtels à proximité avec nos tarifs de groupe sera bientôt ajoutée.",
    stay_h3: "Aide à la réservation", stay_p3: "Besoin d&rsquo;aide pour réserver ? Contactez-nous ci-dessous et nous vous aiderons.",

    attire_title: "Tenue &amp; Habillement",
    dress_h: "Code vestimentaire",
    dress_p: "La tenue de fête indienne est encouragée pour tous les événements &mdash; et vivement souhaitée de la part de nos invités internationaux ! Misez sur la couleur, le confort et des chaussures pour danser. Un code vestimentaire détaillé par événement sera ajouté.",
    rent_h: "Louer &amp; acheter des tenues",
    rent_p: "Vous découvrez les tenues indiennes ? Pas besoin d&rsquo;acheter quoi que ce soit. Nous recommanderons des services de location et des boutiques à Jaipur et Delhi pour saris, lehengas, sherwanis et kurtas &mdash; y compris des options livrées à votre hôtel.",
    rent_note: "Partenaires de location et liens à venir.",

    faq_title: "Bon à savoir",
    faq_q1: "Ai-je besoin d&rsquo;un visa pour l&rsquo;Inde ?", faq_a1: "La plupart des invités internationaux peuvent demander un e-Visa en ligne. Vérifiez les conditions pour votre nationalité bien à l&rsquo;avance.",
    faq_q2: "Quel temps fera-t-il ?", faq_a2: "Février à Jaipur est agréable &mdash; journées chaudes et ensoleillées (environ 25&deg;C) et soirées plus fraîches. Prévoyez une couche légère pour les événements du soir.",
    faq_q3: "Quelle monnaie dois-je apporter ?", faq_a3: "La roupie indienne (INR). Les cartes sont largement acceptées dans les hôtels ; gardez un peu d&rsquo;espèces pour les petits achats et les pourboires.",
    faq_q4: "Y aura-t-il de la nourriture végétarienne ?", faq_a4: "Oui &mdash; la cuisine est entièrement végétarienne, avec de nombreuses options tout au long.",

    footer_title: "Avec amour, Sonali &amp; Thomas",
    footer_date: "22 &ndash; 23 février 2027 &middot; Ridhi Resort, Jaipur",
    footer_contact: 'Des questions ? Contactez-nous à <a href="mailto:hello@example.com">hello@example.com</a>',
  },
};

function applyLang(lang) {
  if (!I18N[lang]) lang = "en";
  const dict = I18N[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.getAttribute("data-i18n")];
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) => {
    const active = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", String(active));
  });

  try { localStorage.setItem("lang", lang); } catch (e) {}
}

document.querySelectorAll(".lang-switch [data-lang]").forEach((btn) =>
  btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")))
);

let saved = "en";
try { saved = localStorage.getItem("lang") || "en"; } catch (e) {}
applyLang(saved);
