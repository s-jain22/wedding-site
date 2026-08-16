// Lightweight i18n: swaps text on [data-i18n] nodes. English is the default
// and lives in the HTML, so the page still works if this script fails.
const I18N = {
  en: {
    nav_home: "Home",
    nav_events: "Events", nav_venue: "Venue", nav_travel: "Getting There",
    nav_stay: "Stay", nav_attire: "Attire", nav_faq: "FAQ",
    nav_guide: "International Guest Guide",
    nav_guide_hint: "Opens our guide for international guests, on a separate page",
    nav_registry: "Registry",

    reg_kicker: "If you&rsquo;d like to give something",
    reg_title: "Gift Registry",
    reg_intro: "Your presence at our wedding is the greatest gift of all. If you&rsquo;d like to give something more, we&rsquo;ve gathered a few ideas below. When you reserve an item it shows as taken for everyone else, so there&rsquo;s no coordinating, and nothing gets doubled up.",
    reg_home: "&larr; Back to the wedding home",
    reg_note: "Reserved something by mistake? You can release it again from this device.",
    reg_offline: "The live list isn&rsquo;t connected yet, items below can&rsquo;t be reserved for now. Please check back soon.",
    reg_wip_badge: "Coming soon",
    reg_wip_title: "Our registry is on its way",
    reg_wip_p: "We&rsquo;re still putting this together. A gift registry will live here soon, so you&rsquo;ll be able to pick something and see what&rsquo;s already been taken. For now there&rsquo;s nothing you need to do, please check back a little closer to the date.",

    ig_kicker: "For our international guests",
    ig_title: "A Guide to Jaipur",
    ig_intro: "Travelling to India for the first time? This guide covers the practical things, visas, flights, where to stay and eat, renting an outfit, and what to see while you&rsquo;re here. Specific recommendations and booking links will be added as we confirm them.",
    ig_home: "&larr; Back to the wedding home",

    ignav_visa: "Visa", ignav_flights: "Flights", ignav_stay: "Stay",
    ignav_outfits: "Outfits", ignav_eat: "Eat", ignav_see: "See", ignav_delhi: "Delhi", ignav_tips: "Tips",

    ig_visa_h: "Visa &amp; Entry",
    ig_visa_p: "Most visitors need a visa to enter India. The simplest option for tourists is the <strong>e-Visa</strong>, applied for online before you travel at the official portal (indianvisaonline.gov.in). You&rsquo;ll also need to complete an <strong>Arrival Card</strong>, which must be filed within 48 hours before you land. Apply for your visa at least 1&ndash;2 weeks ahead. Your passport should be valid for at least six months from your date of arrival and have two blank pages. Always check the current visa requirements for your nationality.",
    ig_health_h: "Health &amp; Vaccinations",
    ig_health_p: "It&rsquo;s worth checking with your doctor or a travel clinic which vaccinations or health precautions are recommended for India, and getting any shots you need. These don&rsquo;t have to be close to your travel dates, so book them in whenever suits you best.",

    ig_flights_h: "Flights &amp; Getting to Jaipur",
    ig_flights_p: "Jaipur&rsquo;s airport (JAI) has limited direct international routes, so most guests fly into <strong>Delhi (DEL)</strong> or <strong>Mumbai (BOM)</strong> and take a short domestic connection to Jaipur. Carriers serving India include Air India, IndiGo and Vistara domestically, and Emirates, Qatar Airways, Lufthansa, British Airways and Air France internationally. Delhi to Jaipur is also an easy 4&ndash;5 hour drive or train if you prefer to land once.",
    ig_flights_paris_h: "Flying from Paris",
    ig_flights_paris_p: "For guests coming from Paris, we&rsquo;d recommend <strong>Emirates via Dubai</strong> to Jaipur (JAI), around 13 hours in total including the layover. Another option is <strong>Air France</strong> from CDG to Jaipur, usually with a layover (often via Amsterdam and Delhi), roughly 15&ndash;20 hours all in. You can also fly <strong>Paris to Delhi direct</strong> and take a taxi the rest of the way: it&rsquo;s about 300&nbsp;km, roughly a 4&ndash;5 hour drive.",

    ig_stay_h: "Where to Stay in Jaipur",
    ig_stay_p: "Jaipur has everything from heritage palace hotels to boutique guesthouses. Convenient areas include <strong>Civil Lines</strong> and <strong>C-Scheme</strong> (central, leafy), and around <strong>Amer</strong> for views and heritage stays. We&rsquo;ll share a shortlist with group rates, in the meantime, booking early for February is wise as it&rsquo;s peak season.",

    ig_outfits_h: "Renting &amp; Buying Outfits",
    ig_outfits_p: "You don&rsquo;t need to buy traditional wear, renting is easy and popular. Jaipur and Delhi have many shops and online services renting sarees, lehengas, sherwanis and kurtas, often with delivery to your hotel and help with draping. If you&rsquo;d like to buy, Jaipur is famous for block-printed and bandhani fabrics.",
    ig_outfits_rent_h: "Rent an outfit",
    ig_shop_rent1_n: "Flyrobe",
    ig_shop_rent1_d: "Online lehenga, saree &amp; sherwani rental with home delivery across India.",
    ig_shop_rent2_n: "Rent an Attire",
    ig_shop_rent2_d: "Wide ethnic-wear rental range, ships nationwide.",
    ig_shop_rent3_n: "Local Jaipur boutiques",
    ig_shop_rent3_d: "We&rsquo;ll add a couple of trusted in-city shops that rent and help with draping.",
    ig_outfits_buy_h: "Buy an outfit",
    ig_shop_buy1_n: "Bapu &amp; Johari Bazaar",
    ig_shop_buy1_d: "Jaipur&rsquo;s classic markets for textiles, block prints and ready ethnic wear.",
    ig_shop_buy2_n: "Fabindia / Anokhi",
    ig_shop_buy2_d: "Reliable stores for kurtas and block-printed pieces at fixed prices.",
    ig_outfits_note: "Direct booking links will be confirmed closer to the date, ask us if you&rsquo;d like a personal recommendation.",

    ig_eat_h: "Where to Eat",
    ig_eat_p: "Jaipur is a paradise for vegetarian food. Try Rajasthani thalis (dal-baati-churma), street snacks like pyaaz kachori and ghewar, and lassi in a clay cup. Well-known spots include Laxmi Misthan Bhandar (LMB), Rawat Mishthan Bhandar and Chokhi Dhani for a village-style cultural dinner. Tap water isn&rsquo;t safe to drink, stick to bottled or filtered water.",

    ig_see_h: "What to See",
    ig_see_p: "If you have spare days, Jaipur&rsquo;s highlights include the <strong>Amber Fort</strong>, <strong>City Palace</strong>, <strong>Hawa Mahal</strong> (Palace of Winds), the <strong>Jantar Mantar</strong> observatory, and <strong>Nahargarh Fort</strong> for sunset views. For shopping, head to Johari Bazaar and Bapu Bazaar for jewellery, textiles and souvenirs. Agra (the Taj Mahal) is around 4&ndash;5 hours away if you want to extend your trip.",

    ig_delhi_h: "Things to Do in Delhi",
    ig_delhi_p: "Many guests fly into Delhi and spend a day or two before we all travel on to Jaipur together. If you have the time, it&rsquo;s well worth exploring: the <strong>Red Fort</strong>, <strong>Humayun&rsquo;s Tomb</strong> and <strong>Qutub Minar</strong> (all UNESCO World Heritage sites), <strong>India Gate</strong>, the bustling markets of <strong>Chandni Chowk</strong> and <strong>Dilli Haat</strong>, and the peaceful <strong>Lotus Temple</strong> and <strong>Akshardham</strong>. On the evening of the 21st or the morning of the 22nd, we&rsquo;ll provide a private bus for everyone to travel together to Jaipur.",

    ig_tips_h: "Practical Tips",
    ig_tips_p: "<strong>Money:</strong> the currency is the Indian Rupee (INR); cards work in hotels, carry cash for markets and tips. <strong>Connectivity:</strong> a local SIM or eSIM is cheap and handy. <strong>Getting around:</strong> Uber and Ola work well in the city. <strong>Weather:</strong> February is warm and sunny by day, cooler at night, bring a light layer. <strong>Plugs:</strong> 230V, type D/M sockets, bring an adapter.",

    hero_tagline: "What started as one coffee has been brewing into forever ever since.",
    hero_invite: "Join us as we celebrate love",
    hero_date: "22 &ndash; 23 February 2027",
    hero_place: "Ridhi Resort &middot; Jaipur, India",
    hero_cta: "View the celebrations",

    welcome_title: "Welcome",
    welcome_p1: "We are so happy to have you with us as we celebrate our wedding in the beautiful pink city of Jaipur. Whether you are travelling from across India or across the world, this page has everything you need: where to be, when to be there, and how to get the most out of your trip.",
    welcome_p2: "Take your time exploring. If anything is unclear, our contacts are at the bottom of the page.",

    cel_title: "The Celebrations",
    cel_sub: "2.5 days of festivities. Many of the events are traditional Indian ceremonies, we&rsquo;ve added a short note on each so everyone can follow along. Timings are indicative and may shift slightly.",
    day1_label: "Day 1", day1_date: "22 February 2027",
    day2_label: "Day 2", day2_date: "23 February 2027",
    day3_label: "Day 3", day3_date: "24 February 2027",
    th_time: "Time", th_event: "Event", th_details: "Details",

    d1r_bfast_t: "7:00 &ndash; 10:00 AM", d1r_bfast_e: "Breakfast", d1r_bfast_d: "Breakfast is served each morning for guests staying at the resort.",
    d1r1_t: "From 11:00 AM", d1r1_e: "Arrivals", d1r1_d: "Transfers to Ridhi Resort.",
    d1r2_t: "1:00 PM", d1r2_e: "Welcome Lunch", d1r2_d: "A relaxed lunch to welcome everyone.",
    d1r3_t: "From 2:00 PM", d1r3_e: "Check-in", d1r3_d: "Ridhi Resort, Jaipur",
    d1r_tea_t: "3:00 &ndash; 5:00 PM", d1r_tea_e: "High Tea", d1r_tea_d: "Tea, coffee and an assortment of snacks. Finger food and refreshments keep circulating through the afternoon and evening events, so you&rsquo;re welcome to nibble whenever you like, even when timings overlap.",
    d1r4_t: "3:00 PM onwards", d1r4_e: "Mehendi (meh-HEN-dee)", d1r4_d: "Intricate henna designs are applied to the hands of the bride and guests, a colourful, social afternoon. Henna artists will be on hand, so everyone can get hennaed if they&rsquo;d like. <span class=\"ritual-why\">The henna is said to symbolise love, beauty and the bond between the couple, and its deep colour is a blessing for the days ahead.</span>",
    d1r5_t: "6:00 &ndash; 7:00 PM", d1r5_e: "Mayra (MY-ruh)", d1r5_d: "The bride&rsquo;s maternal uncle (mama) and his family arrive bearing gifts and blessings. <span class=\"ritual-why\">This is one of the most emotional rituals of the wedding, symbolising the maternal side&rsquo;s blessing as she begins this new journey. It&rsquo;s a moment of deep family warmth before the main ceremonies begin.</span>",
    d1r_dinner_t: "7:00 PM", d1r_dinner_e: "Dinner", d1r_dinner_d: "Dinner will start around this time. If you&rsquo;re an early supper person, please let us know in advance so we can make arrangements accordingly.",

    d2r_bfast_t: "7:00 &ndash; 10:00 AM", d2r_bfast_e: "Breakfast", d2r_bfast_d: "Breakfast is served each morning for guests staying at the resort.",
    d2r2_t: "10:00 AM", d2r2_e: "Haldi (HUL-dee)", d2r2_d: "A turmeric paste is applied to the bride and groom before the wedding, so expect bright yellow and plenty of laughter. <span class=\"ritual-why\">Turmeric is believed to purify, bless and bring a natural glow to the couple before marriage, and is considered auspicious protection as they begin this new chapter.</span>",
    d2r_lunch_t: "12:00 &ndash; 2:00 PM", d2r_lunch_e: "Lunch", d2r_lunch_d: "A relaxed lunch is served for all guests.",
    d2r_free_t: "2:00 PM onwards", d2r_free_e: "Free Time", d2r_free_d: "Time to relax and freshen up before the baraat begins.",
    d2r_tea_t: "3:00 &ndash; 5:00 PM", d2r_tea_e: "High Tea", d2r_tea_d: "Tea, coffee and an assortment of snacks. Finger food and refreshments keep circulating through the afternoon and evening events, so you&rsquo;re welcome to nibble whenever you like, even when timings overlap.",
    d2r3_t: "4:30 PM", d2r3_e: "Baraat (buh-RAAT)", d2r3_d: "The groom arrives in a festive procession, joined by family and friends dancing through to the venue, and the bride&rsquo;s family welcomes the groom and his baraatis (procession guests) at the entrance. <span class=\"ritual-why\">The Baraat marks the joining of both families, often with garlands and rituals of welcome.</span>",
    d2r4_t: "5:00 PM", d2r4_e: "Phera (FEH-ra)", d2r4_d: "The couple takes seven rounds around a sacred fire. <span class=\"ritual-why\">The Phera is the heart of the ceremony, each round representing a vow for their married life together.</span>",
    d2r5b_t: "7:30 PM", d2r5b_e: "Ring &amp; Vows Exchange", d2r5b_d: "Sonali and Thomas exchange rings and personal vows, just before the reception. <span class=\"ritual-why\">An intimate moment bridging the Hindu ceremony and the Western tradition.</span>",
    d2r6_t: "8:00 PM", d2r6_e: "Dinner", d2r6_d: "Dinner will start, served buffet-style.",
    d2r_reception_t: "8:30 PM", d2r_reception_e: "Live Band Reception", d2r_reception_d: "Drinks and dancing with a live band to close the celebrations.",

    d3r1_t: "7:00 &ndash; 10:00 AM", d3r1_e: "Breakfast + Brunch", d3r1_d: "A relaxed breakfast and brunch for guests staying at the resort.",
    d3r2_t: "By 12:00 PM", d3r2_e: "Checkout", d3r2_d: "Check-out from Ridhi Resort.",
    buffet_note: "Indian weddings are typically buffet-style, so guests are welcome to eat at their own convenience throughout the evening. (If you&rsquo;d like to eat with the bride and groom, you may have to wait a little though!)",

    venue_title: "The Venue",
    venue_h: "Ridhi Resort, Jaipur",
    venue_p: "All events take place at Ridhi Resort, Jaipur. The resort offers a relaxed setting for the celebrations, with space for both ceremonies and quieter moments between events.",
    venue_note: "Mandau Road, near Patrakar Colony, Mansarovar Extension, Sanganer, Muhana, Jaipur, Rajasthan 302029, India.",
    venue_cta: "Open in Google Maps",

    travel_title: "Getting There",
    air_h: "By Air",
    air_p: "<ul class=\"info-list\"><li><strong>From Paris:</strong> Emirates via Dubai to Jaipur (JAI) is our recommendation, around <strong>13 hours total</strong> including the layover.</li><li><strong>Alternative:</strong> Air France from CDG to Jaipur, usually with a layover (often via Amsterdam and Delhi), roughly <strong>15&ndash;20 hours</strong> all in.</li><li><strong>Direct option:</strong> Fly Paris to Delhi direct, then take a taxi the remaining ~300&nbsp;km (roughly a <strong>4&ndash;5 hour drive</strong>).</li><li><strong>Come early:</strong> You&rsquo;re welcome to fly into <a href=\"international.html#delhi\">Delhi</a> a day or two early to explore the city. On the evening of the <strong>21st</strong> or the <strong>morning of the 22nd</strong>, we&rsquo;ll provide a <strong>private bus</strong> for everyone to travel together to Jaipur. Pickup details will be shared closer to the date.</li></ul>",
    train_h: "By Train",
    train_p: "<ul class=\"info-list\"><li><strong>Jaipur Junction</strong> is well connected to Delhi and other major cities.</li><li>Other stations in the area include <strong>Durgapura</strong> and <strong>Gandhi Nagar</strong>, so you can arrive at any of these.</li><li>Our event planners will contact guests to confirm arrival timings and arrange <strong>taxi service</strong> to the venue on the <strong>21st</strong>.</li></ul>",
    local_h: "Local Transport",
    local_p: "<ul class=\"info-list\"><li>We&rsquo;ll arrange transfers between recommended hotels and the venue for the main events (details to follow).</li><li>For exploring Jaipur independently, <strong>Uber and Ola</strong> taxi services are available throughout the city.</li></ul>",

    stay_title: "Where to Stay",
    stay_sub: "We&rsquo;ll list a few recommended hotels at a range of budgets here, with booking details.",
    stay_h1: "At the Venue", stay_p1: "We&rsquo;re delighted to provide two nights&rsquo; stay at Ridhi Resort, covering the nights of 22 and 23 February. Further details on rooms will follow.",
    stay_h2: "Recommended Hotels", stay_p2: "A shortlist of nearby hotels with our group rates will be added soon.",
    stay_h3: "Booking Help", stay_p3: "Need a hand booking? Reach out to our contacts below and we&rsquo;ll help.",

    attire_title: "What to Wear",
    dress_lead: "All suggestions, never rules. Dress traditionally if you&rsquo;d like, or don&rsquo;t. These are just inspiration palettes to have fun with.",
    dc1_name: "Mehendi <span lang=\"hi\">(मेहंदी)</span>",
    dc1_phon: "meh-HEN-dee",
    dc1_event: "The Henna Ceremony",
    dc1_note: "Greens are especially welcome!",
    dc2_name: "Haldi <span lang=\"hi\">(हल्दी)</span>",
    dc2_phon: "HUL-dee",
    dc2_event: "The Turmeric Ceremony",
    dc2_note: "Lean into yellow, the sunnier the better!",
    dc3_name: "Varmala <span lang=\"hi\">(वरमाला)</span>",
    dc3_phon: "var-MAA-la",
    dc3_event: "Garlands, Rings &amp; Reception, The Big Day",
    dc3_note: "Wear anything you love. Ivory, pastels, pinks and blue are all lovely choices.",
    dress_rent: "New to Indian outfits? You don&rsquo;t need to buy a thing. International guests can find rental and purchase shops in the <a href=\"international.html#outfits\">outfit guide</a>.",

    faq_title: "Good to Know",
    faq_q1: "Do I need a visa for India?", faq_a1: "Most international guests can apply for an e-Visa online. You&rsquo;ll find more detailed guidance on visas, entry requirements and recommended vaccinations in our <a href=\"international.html#visa\">Guest Guide</a>. Check the requirements for your nationality well in advance.",
    faq_q2: "What will the weather be like?", faq_a2: "February in Jaipur is pleasant, warm, sunny days (around 25&deg;C) and cooler evenings. Bring a light layer for the night events.",
    faq_q3: "What currency should I bring?", faq_a3: "The Indian Rupee (INR). Cards are widely accepted in hotels; carry some cash for smaller purchases and tips.",

    footer_title: "With love, Sonali &amp; Thomas",
    footer_date: "22 &ndash; 23 February 2027 &middot; Ridhi Resort, Jaipur",
  },

  hi: {
    nav_home: "होम",
    nav_events: "कार्यक्रम", nav_venue: "स्थल", nav_travel: "कैसे पहुँचें",
    nav_stay: "ठहराव", nav_attire: "परिधान", nav_faq: "सामान्य प्रश्न",
    nav_guide: "अंतरराष्ट्रीय अतिथि गाइड",
    nav_guide_hint: "अंतरराष्ट्रीय अतिथियों के लिए हमारी गाइड, एक अलग पेज पर खुलेगी",
    nav_registry: "उपहार सूची",
    ignav_visa: "वीज़ा", ignav_flights: "उड़ानें", ignav_stay: "ठहराव",
    ignav_outfits: "परिधान", ignav_eat: "खानपान", ignav_see: "घूमना", ignav_delhi: "दिल्ली", ignav_tips: "सुझाव",

    reg_kicker: "यदि आप कुछ भेंट देना चाहें",
    reg_title: "उपहार सूची",
    reg_intro: "हमारे विवाह में आपकी उपस्थिति ही सबसे बड़ा उपहार है। यदि आप इसके अलावा कुछ देना चाहें, तो नीचे कुछ सुझाव दिए हैं। जब आप कोई वस्तु आरक्षित करते हैं, तो वह बाकी सभी के लिए &lsquo;ले ली गई&rsquo; दिखने लगती है, इसलिए न कोई तालमेल की ज़रूरत, न ही कोई चीज़ दोहरी होगी।",
    reg_home: "&larr; विवाह मुखपृष्ठ पर वापस जाएँ",
    reg_note: "गलती से कुछ आरक्षित कर लिया? आप इसी डिवाइस से उसे फिर से मुक्त कर सकते हैं।",
    reg_offline: "लाइव सूची अभी जुड़ी नहीं है, फ़िलहाल नीचे दी वस्तुएँ आरक्षित नहीं की जा सकतीं। कृपया थोड़ी देर बाद देखें।",
    reg_wip_badge: "जल्द आ रहा है",
    reg_wip_title: "हमारी उपहार सूची जल्द ही आ रही है",
    reg_wip_p: "हम अभी इसे तैयार कर रहे हैं। जल्द ही यहाँ एक उपहार सूची होगी, जहाँ से आप कुछ चुन सकेंगे और देख सकेंगे कि क्या पहले ही ले लिया गया है। फ़िलहाल आपको कुछ करने की ज़रूरत नहीं, कृपया तिथि के थोड़ा नज़दीक आने पर फिर देखें।",

    hero_tagline: "जो एक कप कॉफ़ी से शुरू हुआ, तब से हमेशा के लिए पकता जा रहा है।",
    hero_invite: "हमारे साथ प्रेम का उत्सव मनाइए",
    hero_date: "22 &ndash; 23 फ़रवरी 2027",
    hero_place: "रिधि रिज़ॉर्ट &middot; जयपुर, भारत",
    hero_cta: "समारोह देखें",

    welcome_title: "स्वागत है",
    welcome_p1: "जयपुर की खूबसूरत गुलाबी नगरी में हमारी शादी के इस उत्सव में आपका साथ पाकर हमें बेहद खुशी है। आप भारत के किसी कोने से आ रहे हों या दुनिया के, इस पृष्ठ पर आपकी ज़रूरत की हर जानकारी है: कहाँ पहुँचना है, कब पहुँचना है, और अपनी यात्रा का पूरा आनंद कैसे लेना है।",
    welcome_p2: "आराम से देखिए। अगर कुछ स्पष्ट न हो, तो पृष्ठ के नीचे हमारे संपर्क दिए गए हैं।",

    cel_title: "समारोह",
    cel_sub: "ढाई दिनों का उत्सव। हर कार्यक्रम के साथ एक छोटा-सा विवरण दिया गया है ताकि सभी अतिथि साथ चल सकें। समय अनुमानित है और इसमें थोड़ा बदलाव हो सकता है।",
    day1_label: "दिन 1", day1_date: "22 फ़रवरी 2027",
    day2_label: "दिन 2", day2_date: "23 फ़रवरी 2027",
    day3_label: "दिन 3", day3_date: "24 फ़रवरी 2027",
    th_time: "समय", th_event: "कार्यक्रम", th_details: "विवरण",

    d1r_bfast_t: "7:00 &ndash; 10:00 पूर्वाह्न", d1r_bfast_e: "नाश्ता", d1r_bfast_d: "रिज़ॉर्ट में ठहरे अतिथियों के लिए हर सुबह नाश्ता परोसा जाता है।",
    d1r1_t: "11:00 पूर्वाह्न से", d1r1_e: "आगमन", d1r1_d: "रिधि रिज़ॉर्ट तक परिवहन की व्यवस्था।",
    d1r2_t: "1:00 अपराह्न", d1r2_e: "स्वागत भोज", d1r2_d: "सबके स्वागत के लिए एक सहज दोपहर का भोज।",
    d1r3_t: "2:00 अपराह्न से", d1r3_e: "चेक-इन", d1r3_d: "रिधि रिज़ॉर्ट, जयपुर",
    d1r_tea_t: "3:00 &ndash; 5:00 अपराह्न", d1r_tea_e: "हाई टी", d1r_tea_d: "चाय, कॉफ़ी और तरह-तरह के नाश्ते। दोपहर और शाम के कार्यक्रमों के दौरान फिंगर फ़ूड और जलपान चलता रहेगा, इसलिए भले ही समय आपस में मिल जाए, आप जब चाहें कुछ चख सकते हैं।",
    d1r4_t: "3:00 अपराह्न से", d1r4_e: "मेहंदी", d1r4_d: "दुल्हन और अतिथियों के हाथों पर सुंदर मेहंदी लगाई जाती है, एक रंगीन और उत्सवपूर्ण दोपहर। मेहंदी कलाकार मौजूद रहेंगे, इसलिए जो चाहे मेहंदी लगवा सकता है। <span class=\"ritual-why\">कहा जाता है कि मेहंदी प्रेम, सौंदर्य और युगल के बंधन का प्रतीक है, और इसका गहरा रंग आने वाले दिनों के लिए शुभ आशीर्वाद है।</span>",
    d1r5_t: "6:00 &ndash; 7:00 अपराह्न", d1r5_e: "मायरा", d1r5_d: "दुल्हन के मामा और उनका परिवार उपहार और आशीर्वाद लेकर आते हैं। <span class=\"ritual-why\">यह विवाह की सबसे भावुक रस्मों में से एक है, जो इस नई यात्रा की शुरुआत में ननिहाल के आशीर्वाद का प्रतीक है। मुख्य रस्मों से पहले यह गहरे पारिवारिक स्नेह का क्षण होता है।</span>",
    d1r_dinner_t: "7:00 अपराह्न", d1r_dinner_e: "रात्रिभोज", d1r_dinner_d: "रात्रिभोज लगभग इसी समय शुरू होगा। यदि आप जल्दी भोजन करने वाले हैं, तो कृपया हमें पहले से बताएँ ताकि हम उसी अनुसार व्यवस्था कर सकें।",

    d2r_bfast_t: "7:00 &ndash; 10:00 पूर्वाह्न", d2r_bfast_e: "नाश्ता", d2r_bfast_d: "रिज़ॉर्ट में ठहरे अतिथियों के लिए हर सुबह नाश्ता परोसा जाता है।",
    d2r2_t: "10:00 पूर्वाह्न", d2r2_e: "हल्दी", d2r2_d: "विवाह से पहले दूल्हा-दुल्हन पर हल्दी का लेप लगाया जाता है, खूब पीलापन और हँसी-मज़ाक। <span class=\"ritual-why\">माना जाता है कि हल्दी शुद्ध करती है, आशीर्वाद देती है और विवाह से पहले दूल्हा-दुल्हन को प्राकृतिक निखार देती है, और इस नए अध्याय की शुरुआत में इसे शुभ रक्षा माना जाता है।</span>",
    d2r_lunch_t: "12:00 &ndash; 2:00 अपराह्न", d2r_lunch_e: "भोजन", d2r_lunch_d: "सभी अतिथियों के लिए आरामदायक भोजन परोसा जाता है।",
    d2r_free_t: "2:00 अपराह्न से", d2r_free_e: "खाली समय", d2r_free_d: "बारात शुरू होने से पहले आराम करने और तैयार होने का समय।",
    d2r_tea_t: "3:00 &ndash; 5:00 अपराह्न", d2r_tea_e: "हाई टी", d2r_tea_d: "चाय, कॉफ़ी और तरह-तरह के नाश्ते। दोपहर और शाम के कार्यक्रमों के दौरान फिंगर फ़ूड और जलपान चलता रहेगा, इसलिए भले ही समय आपस में मिल जाए, आप जब चाहें कुछ चख सकते हैं।",
    d2r3_t: "4:30 अपराह्न", d2r3_e: "बारात", d2r3_d: "दूल्हा एक उत्सवपूर्ण शोभायात्रा में आता है, जिसमें परिवार और मित्र नाचते-गाते स्थल तक पहुँचते हैं, और दुल्हन का परिवार प्रवेश द्वार पर दूल्हे और उसके बारातियों का स्वागत करता है। <span class=\"ritual-why\">बारात दोनों परिवारों के मिलन का प्रतीक है, अक्सर मालाओं और स्वागत की रस्मों के साथ।</span>",
    d2r4_t: "5:00 अपराह्न", d2r4_e: "फेरा", d2r4_d: "दूल्हा-दुल्हन पवित्र अग्नि के सात फेरे लेते हैं। <span class=\"ritual-why\">फेरा समारोह का हृदय है, हर फेरा उनके वैवाहिक जीवन के एक वचन का प्रतीक है।</span>",
    d2r5b_t: "7:30 अपराह्न", d2r5b_e: "रिंग और वचन समारोह", d2r5b_d: "सोनाली और थॉमस अंगूठियाँ और निजी वचन साझा करते हैं, रिसेप्शन से ठीक पहले। <span class=\"ritual-why\">हिंदू रस्मों और पश्चिमी परंपरा को जोड़ता एक आत्मीय पल।</span>",
    d2r6_t: "8:00 अपराह्न", d2r6_e: "रात्रिभोज", d2r6_d: "रात्रिभोज बुफे शैली में शुरू होगा।",
    d2r_reception_t: "8:30 अपराह्न", d2r_reception_e: "लाइव बैंड स्वागत समारोह", d2r_reception_d: "समारोह के समापन के लिए लाइव बैंड के साथ पेय और नृत्य।",

    d3r1_t: "7:00 &ndash; 10:00 पूर्वाह्न", d3r1_e: "नाश्ता + ब्रंच", d3r1_d: "रिज़ॉर्ट में ठहरे अतिथियों के लिए आरामदेह नाश्ता और ब्रंच।",
    d3r2_t: "12:00 अपराह्न तक", d3r2_e: "चेकआउट", d3r2_d: "रिधि रिज़ॉर्ट से चेक-आउट।",
    buffet_note: "भारतीय विवाहों में आमतौर पर बुफे शैली होती है, इसलिए अतिथि पूरी शाम अपनी सुविधानुसार भोजन कर सकते हैं। (यदि आप दूल्हा-दुल्हन के साथ भोजन करना चाहें, तो शायद थोड़ा इंतज़ार करना पड़े!)",

    venue_title: "स्थल",
    venue_h: "रिधि रिज़ॉर्ट, जयपुर",
    venue_p: "सभी कार्यक्रम रिधि रिज़ॉर्ट, जयपुर में होंगे। यह रिज़ॉर्ट समारोहों के लिए एक सुकूनभरा वातावरण देता है, जहाँ रस्मों और बीच के शांत पलों दोनों के लिए जगह है।",
    venue_note: "मंडौ रोड, पत्रकार कॉलोनी के पास, मानसरोवर एक्सटेंशन, सांगानेर, मुहाना, जयपुर, राजस्थान 302029, भारत।",
    venue_cta: "गूगल मैप्स में खोलें",

    travel_title: "कैसे पहुँचें",
    air_h: "हवाई मार्ग से",
    air_p: "<ul class=\"info-list\"><li><strong>पेरिस से:</strong> एमिरेट्स द्वारा दुबई होते हुए जयपुर (JAI) हमारी सलाह है, लेओवर सहित लगभग <strong>13 घंटे</strong>।</li><li><strong>वैकल्पिक:</strong> एयर फ़्रांस CDG से जयपुर, आमतौर पर एक लेओवर के साथ (अक्सर एम्स्टर्डम और दिल्ली होते हुए), कुल मिलाकर लगभग <strong>15&ndash;20 घंटे</strong>।</li><li><strong>सीधा विकल्प:</strong> पेरिस से दिल्ली सीधी उड़ान, फिर बाकी लगभग 300&nbsp;किमी टैक्सी से (करीब <strong>4&ndash;5 घंटे की ड्राइव</strong>)।</li><li><strong>जल्दी आएँ:</strong> आप एक-दो दिन पहले <a href=\"international.html#delhi\">दिल्ली</a> पहुँचकर शहर घूम सकते हैं। <strong>21 तारीख</strong> की शाम या <strong>22 तारीख की सुबह</strong> हम सभी के लिए एक साथ जयपुर जाने हेतु <strong>निजी बस</strong> की व्यवस्था करेंगे। पिकअप का विवरण तिथि नज़दीक आने पर साझा किया जाएगा।</li></ul>",
    train_h: "रेल मार्ग से",
    train_p: "<ul class=\"info-list\"><li><strong>जयपुर जंक्शन</strong> दिल्ली और अन्य प्रमुख शहरों से अच्छी तरह जुड़ा है।</li><li>क्षेत्र के अन्य स्टेशनों में <strong>दुर्गापुरा</strong> और <strong>गांधी नगर</strong> शामिल हैं, आप इनमें से किसी पर भी पहुँच सकते हैं।</li><li>हमारे इवेंट प्लानर अतिथियों से संपर्क कर आगमन समय की पुष्टि करेंगे और <strong>21 तारीख</strong> को स्थल तक <strong>टैक्सी सेवा</strong> की व्यवस्था करेंगे।</li></ul>",
    local_h: "स्थानीय परिवहन",
    local_p: "<ul class=\"info-list\"><li>मुख्य कार्यक्रमों के लिए हम अनुशंसित होटलों और स्थल के बीच परिवहन की व्यवस्था करेंगे (विवरण जल्द)।</li><li>जयपुर स्वयं घूमने के लिए, पूरे शहर में <strong>उबर और ओला</strong> टैक्सी सेवाएँ उपलब्ध हैं।</li></ul>",

    stay_title: "कहाँ ठहरें",
    stay_sub: "हम यहाँ अलग-अलग बजट के कुछ अनुशंसित होटल, बुकिंग विवरण के साथ सूचीबद्ध करेंगे।",
    stay_h1: "स्थल पर", stay_p1: "हमें खुशी है कि हम आपको रिधि रिज़ॉर्ट में दो रातों का ठहराव प्रदान कर रहे हैं, जो 22 और 23 फ़रवरी की रातों के लिए है। कमरों का विवरण जल्द साझा किया जाएगा।",
    stay_h2: "अनुशंसित होटल", stay_p2: "हमारी समूह दरों के साथ पास के होटलों की सूची जल्द जोड़ी जाएगी।",
    stay_h3: "बुकिंग में सहायता", stay_p3: "बुकिंग में मदद चाहिए? नीचे दिए हमारे संपर्कों से संपर्क करें, हम मदद करेंगे।",

    attire_title: "क्या पहनें",
    dress_lead: "ये सिर्फ़ सुझाव हैं, नियम नहीं। पारंपरिक परिधान पहनना चाहें तो ज़रूर पहनें, या न पहनें। ये बस प्रेरणा के लिए रंग-संयोजन हैं।",
    dc1_name: "मेहंदी",
    dc1_phon: "",
    dc1_event: "मेहंदी समारोह",
    dc1_note: "हरे रंग का विशेष स्वागत है!",
    dc2_name: "हल्दी",
    dc2_phon: "",
    dc2_event: "हल्दी समारोह",
    dc2_note: "पीले रंग को अपनाएँ, जितना चटक उतना अच्छा!",
    dc3_name: "वरमाला",
    dc3_phon: "",
    dc3_event: "वरमाला, अंगूठियाँ और रिसेप्शन, मुख्य दिन",
    dc3_note: "जो पसंद हो वही पहनें। आइवरी, पेस्टल, गुलाबी और नीला, सभी सुंदर विकल्प हैं।",
    dress_rent: "भारतीय परिधानों से अनजान हैं? आपको कुछ खरीदने की ज़रूरत नहीं। विदेशी अतिथि किराए और खरीद की दुकानें <a href=\"international.html#outfits\">परिधान गाइड</a> में पा सकते हैं।",

    faq_title: "जानने योग्य बातें",
    faq_q1: "क्या मुझे भारत के लिए वीज़ा चाहिए?", faq_a1: "अधिकांश विदेशी अतिथि ऑनलाइन ई-वीज़ा के लिए आवेदन कर सकते हैं। वीज़ा, प्रवेश शर्तों और अनुशंसित टीकाकरण के बारे में अधिक विस्तृत जानकारी हमारी <a href=\"international.html#visa\">अतिथि गाइड</a> में मिलेगी। अपनी राष्ट्रीयता की शर्तें पहले से जाँच लें।",
    faq_q2: "मौसम कैसा रहेगा?", faq_a2: "फ़रवरी में जयपुर का मौसम सुहावना रहता है, गरम, धूप वाले दिन (लगभग 25&deg;C) और ठंडी शामें। रात के कार्यक्रमों के लिए हल्के गरम कपड़े साथ लाएँ।",
    faq_q3: "मुझे कौन-सी मुद्रा लानी चाहिए?", faq_a3: "भारतीय रुपया (INR)। होटलों में कार्ड व्यापक रूप से स्वीकार्य हैं; छोटी खरीदारी और टिप के लिए कुछ नकद रखें।",

    footer_title: "सस्नेह, सोनाली और थॉमस",
    footer_date: "22 &ndash; 23 फ़रवरी 2027 &middot; रिधि रिज़ॉर्ट, जयपुर",
  },

  fr: {
    nav_home: "Accueil",
    nav_events: "Programme", nav_venue: "Lieu", nav_travel: "Accès",
    nav_stay: "Hébergement", nav_attire: "Tenue", nav_faq: "FAQ",
    nav_guide: "Guide invités international",
    nav_guide_hint: "Ouvre notre guide pour les invités internationaux, sur une autre page",
    nav_registry: "Liste de mariage",

    reg_kicker: "Si vous souhaitez offrir quelque chose",
    reg_title: "Liste de mariage",
    reg_intro: "Votre présence à notre mariage est le plus beau des cadeaux. Si vous souhaitez offrir quelque chose de plus, voici quelques idées ci-dessous. Lorsque vous réservez un article, il apparaît comme &laquo; pris &raquo; pour tout le monde, aucune coordination nécessaire, et rien n&rsquo;est offert en double.",
    reg_home: "&larr; Retour à l&rsquo;accueil du mariage",
    reg_note: "Réservé quelque chose par erreur ? Vous pouvez le libérer depuis cet appareil.",
    reg_offline: "La liste en direct n&rsquo;est pas encore connectée, les articles ci-dessous ne peuvent pas être réservés pour l&rsquo;instant. Revenez bientôt.",
    reg_wip_badge: "Bientôt disponible",
    reg_wip_title: "Notre liste de mariage arrive bientôt",
    reg_wip_p: "Nous sommes encore en train de la préparer. Une liste de mariage sera bientôt disponible ici, vous pourrez alors choisir quelque chose et voir ce qui a déjà été pris. Pour l&rsquo;instant, vous n&rsquo;avez rien à faire, revenez un peu plus près de la date.",

    ig_kicker: "Pour nos invités internationaux",
    ig_title: "Guide de Jaipur",
    ig_intro: "Vous voyagez en Inde pour la première fois ? Ce guide couvre l&rsquo;essentiel pratique, visas, vols, où loger et manger, louer une tenue, et que voir sur place. Des recommandations précises et des liens de réservation seront ajoutés au fur et à mesure.",
    ig_home: "&larr; Retour à l&rsquo;accueil du mariage",

    ignav_visa: "Visa", ignav_flights: "Vols", ignav_stay: "Hébergement",
    ignav_outfits: "Tenues", ignav_eat: "Manger", ignav_see: "Visiter", ignav_delhi: "Delhi", ignav_tips: "Conseils",

    ig_visa_h: "Visa &amp; Entrée",
    ig_visa_p: "La plupart des visiteurs ont besoin d&rsquo;un visa pour entrer en Inde. L&rsquo;option la plus simple pour les touristes est l&rsquo;<strong>e-Visa</strong>, à demander en ligne avant le départ sur le portail officiel (indianvisaonline.gov.in). Vous devrez aussi remplir une <strong>carte d&rsquo;arrivée</strong> (Arrival Card), à soumettre dans les 48 heures précédant votre atterrissage. Faites la demande de visa au moins 1&ndash;2 semaines à l&rsquo;avance. Votre passeport doit être valable au moins six mois à compter de votre date d&rsquo;arrivée et comporter deux pages vierges. Vérifiez toujours les conditions de visa en vigueur pour votre nationalité.",
    ig_health_h: "Santé &amp; vaccins",
    ig_health_p: "Pensez à vérifier auprès de votre médecin ou d&rsquo;un centre de vaccination internationale quels vaccins ou précautions sanitaires sont conseillés pour l&rsquo;Inde, et à faire les vaccins nécessaires. Ils n&rsquo;ont pas besoin d&rsquo;être faits juste avant le départ, alors faites-les quand cela vous arrange.",

    ig_flights_h: "Vols &amp; accès à Jaipur",
    ig_flights_p: "L&rsquo;aéroport de Jaipur (JAI) a peu de liaisons internationales directes ; la plupart des invités atterrissent donc à <strong>Delhi (DEL)</strong> ou <strong>Mumbai (BOM)</strong> puis prennent une courte correspondance intérieure vers Jaipur. Les compagnies desservant l&rsquo;Inde incluent Air India, IndiGo et Vistara en intérieur, et Emirates, Qatar Airways, Lufthansa, British Airways et Air France à l&rsquo;international. Delhi&ndash;Jaipur se fait aussi facilement en 4&ndash;5 h de route ou en train si vous préférez n&rsquo;atterrir qu&rsquo;une fois.",
    ig_flights_paris_h: "Au départ de Paris",
    ig_flights_paris_p: "Pour les invités partant de Paris, nous recommandons <strong>Emirates via Dubaï</strong> jusqu&rsquo;à Jaipur (JAI), environ 13 heures au total avec l&rsquo;escale. Autre option : <strong>Air France</strong> depuis CDG vers Jaipur, généralement avec escale (souvent via Amsterdam et Delhi), soit environ 15&ndash;20 heures en tout. Vous pouvez aussi prendre un vol <strong>Paris&ndash;Delhi direct</strong> puis un taxi pour la suite : environ 300&nbsp;km, soit 4&ndash;5 heures de route.",

    ig_stay_h: "Où loger à Jaipur",
    ig_stay_p: "Jaipur propose de tout, des hôtels-palais patrimoniaux aux maisons d&rsquo;hôtes de charme. Les quartiers pratiques incluent <strong>Civil Lines</strong> et <strong>C-Scheme</strong> (centraux et verdoyants), et les environs d&rsquo;<strong>Amer</strong> pour les vues et les séjours patrimoniaux. Nous partagerons une sélection avec des tarifs de groupe, en attendant, réservez tôt pour février, c&rsquo;est la haute saison.",

    ig_outfits_h: "Louer &amp; acheter des tenues",
    ig_outfits_p: "Pas besoin d&rsquo;acheter une tenue traditionnelle, la location est simple et courante. Jaipur et Delhi comptent de nombreuses boutiques et services en ligne louant saris, lehengas, sherwanis et kurtas, souvent avec livraison à l&rsquo;hôtel et aide pour le drapage. Si vous souhaitez acheter, Jaipur est réputée pour ses tissus à impression au tampon (block-print) et bandhani.",
    ig_outfits_rent_h: "Louer une tenue",
    ig_shop_rent1_n: "Flyrobe",
    ig_shop_rent1_d: "Location en ligne de lehengas, saris &amp; sherwanis avec livraison à domicile partout en Inde.",
    ig_shop_rent2_n: "Rent an Attire",
    ig_shop_rent2_d: "Large choix de tenues ethniques à louer, livraison dans tout le pays.",
    ig_shop_rent3_n: "Boutiques locales de Jaipur",
    ig_shop_rent3_d: "Nous ajouterons quelques boutiques de confiance en ville qui louent et aident au drapage.",
    ig_outfits_buy_h: "Acheter une tenue",
    ig_shop_buy1_n: "Bapu &amp; Johari Bazaar",
    ig_shop_buy1_d: "Les marchés emblématiques de Jaipur pour les textiles, le block-print et le prêt-à-porter ethnique.",
    ig_shop_buy2_n: "Fabindia / Anokhi",
    ig_shop_buy2_d: "Boutiques fiables pour kurtas et pièces imprimées au tampon, à prix fixes.",
    ig_outfits_note: "Les liens de réservation directs seront confirmés à l&rsquo;approche de la date, demandez-nous si vous souhaitez une recommandation personnalisée.",

    ig_eat_h: "Où manger",
    ig_eat_p: "Jaipur est un paradis pour la cuisine végétarienne. Goûtez les thalis rajasthanis (dal-baati-churma), les en-cas de rue comme le pyaaz kachori et le ghewar, et le lassi servi dans un gobelet en terre. Parmi les adresses connues : Laxmi Misthan Bhandar (LMB), Rawat Mishthan Bhandar, et Chokhi Dhani pour un dîner culturel façon village. L&rsquo;eau du robinet n&rsquo;est pas potable, privilégiez l&rsquo;eau en bouteille ou filtrée.",

    ig_see_h: "Que visiter",
    ig_see_p: "Si vous avez des jours libres, les incontournables de Jaipur incluent le <strong>Fort d&rsquo;Amber</strong>, le <strong>City Palace</strong>, le <strong>Hawa Mahal</strong> (palais des Vents), l&rsquo;observatoire <strong>Jantar Mantar</strong>, et le <strong>Fort de Nahargarh</strong> pour le coucher du soleil. Pour le shopping, rendez-vous à Johari Bazaar et Bapu Bazaar pour les bijoux, les textiles et les souvenirs. Agra (le Taj Mahal) est à environ 4&ndash;5 h si vous souhaitez prolonger votre séjour.",

    ig_delhi_h: "Que faire à Delhi",
    ig_delhi_p: "Beaucoup d&rsquo;invités arrivent à Delhi et y passent un jour ou deux avant que nous partions tous ensemble pour Jaipur. Si vous avez le temps, la ville vaut vraiment le détour : le <strong>Fort Rouge</strong>, le <strong>tombeau de Humayun</strong> et le <strong>Qutub Minar</strong> (tous classés au patrimoine mondial de l&rsquo;UNESCO), <strong>India Gate</strong>, les marchés animés de <strong>Chandni Chowk</strong> et <strong>Dilli Haat</strong>, et les paisibles <strong>Lotus Temple</strong> et <strong>Akshardham</strong>. Le soir du 21 ou le matin du 22, nous fournirons un bus privé pour voyager tous ensemble jusqu&rsquo;à Jaipur.",

    ig_tips_h: "Conseils pratiques",
    ig_tips_p: "<strong>Argent :</strong> la monnaie est la roupie indienne (INR) ; les cartes passent dans les hôtels, prévoyez des espèces pour les marchés et les pourboires. <strong>Connexion :</strong> une SIM locale ou eSIM est bon marché et pratique. <strong>Déplacements :</strong> Uber et Ola fonctionnent bien en ville. <strong>Météo :</strong> février est chaud et ensoleillé en journée, plus frais le soir, prévoyez une couche légère. <strong>Prises :</strong> 230 V, prises type D/M, prévoyez un adaptateur.",

    hero_tagline: "Ce qui a commencé par un simple café infuse doucement vers l&rsquo;éternité.",
    hero_invite: "Rejoignez-nous pour célébrer l&rsquo;amour",
    hero_date: "22 &ndash; 23 février 2027",
    hero_place: "Ridhi Resort &middot; Jaipur, Inde",
    hero_cta: "Voir les célébrations",

    welcome_title: "Bienvenue",
    welcome_p1: "Nous sommes très heureux de vous compter parmi nous pour célébrer notre mariage dans la magnifique ville rose de Jaipur. Que vous veniez de l&rsquo;autre bout de l&rsquo;Inde ou du monde, cette page contient tout ce qu&rsquo;il vous faut : où aller, quand y être, et comment profiter au mieux de votre séjour.",
    welcome_p2: "Prenez votre temps pour explorer. Si quelque chose n&rsquo;est pas clair, nos contacts figurent en bas de page.",

    cel_title: "Les Célébrations",
    cel_sub: "2,5 jours de festivités. La plupart des événements sont des cérémonies indiennes traditionnelles, une courte note accompagne chacune pour que tout le monde puisse suivre. Les horaires sont indicatifs et peuvent légèrement changer.",
    day1_label: "Jour 1", day1_date: "22 février 2027",
    day2_label: "Jour 2", day2_date: "23 février 2027",
    day3_label: "Jour 3", day3_date: "24 février 2027",
    th_time: "Heure", th_event: "Événement", th_details: "Détails",

    d1r_bfast_t: "7h00 &ndash; 10h00", d1r_bfast_e: "Petit-déjeuner", d1r_bfast_d: "Le petit-déjeuner est servi chaque matin pour les invités logés à l&rsquo;hôtel.",
    d1r1_t: "À partir de 11h00", d1r1_e: "Arrivées", d1r1_d: "Transferts vers le Ridhi Resort.",
    d1r2_t: "13h00", d1r2_e: "Déjeuner de bienvenue", d1r2_d: "Un déjeuner convivial pour accueillir tout le monde.",
    d1r3_t: "À partir de 14h00", d1r3_e: "Arrivée à l&rsquo;hôtel", d1r3_d: "Ridhi Resort, Jaipur",
    d1r_tea_t: "15h00 &ndash; 17h00", d1r_tea_e: "Thé de l&rsquo;après-midi", d1r_tea_d: "Thé, café et un assortiment d&rsquo;en-cas. Amuse-bouches et rafraîchissements circuleront tout au long des événements de l&rsquo;après-midi et du soir, vous pourrez donc grignoter quand vous le souhaitez, même si les horaires se chevauchent.",
    d1r4_t: "15h00 et après", d1r4_e: "Mehendi (meh-HEN-dee)", d1r4_d: "De fins motifs au henné sont appliqués sur les mains de la mariée et des invités, un après-midi coloré et convivial. Des artistes du henné seront présents, chacun pourra donc se faire faire un henné s&rsquo;il le souhaite. <span class=\"ritual-why\">On dit que le henné symbolise l&rsquo;amour, la beauté et le lien entre les mariés, et sa couleur profonde est une bénédiction pour les jours à venir.</span>",
    d1r5_t: "18h00 &ndash; 19h00", d1r5_e: "Mayra (MY-ruh)", d1r5_d: "L&rsquo;oncle maternel de la mariée (mama) et sa famille arrivent avec cadeaux et bénédictions. <span class=\"ritual-why\">C&rsquo;est l&rsquo;un des rituels les plus émouvants du mariage, symbolisant la bénédiction du côté maternel alors qu&rsquo;elle entame ce nouveau chapitre. C&rsquo;est un moment de profonde tendresse familiale avant les cérémonies principales.</span>",
    d1r_dinner_t: "19h00", d1r_dinner_e: "Dîner", d1r_dinner_d: "Le dîner commencera vers cette heure-ci. Si vous dînez tôt d&rsquo;habitude, merci de nous prévenir à l&rsquo;avance afin que nous puissions nous organiser en conséquence.",

    d2r_bfast_t: "7h00 &ndash; 10h00", d2r_bfast_e: "Petit-déjeuner", d2r_bfast_d: "Le petit-déjeuner est servi chaque matin pour les invités logés à l&rsquo;hôtel.",
    d2r2_t: "10h00", d2r2_e: "Haldi (HUL-dee)", d2r2_d: "Une pâte de curcuma est appliquée sur les mariés avant le mariage, beaucoup de jaune et de rires. <span class=\"ritual-why\">On dit que le curcuma purifie, bénit et donne un éclat naturel aux mariés avant le mariage, et il est considéré comme une protection de bon augure alors qu&rsquo;ils entament ce nouveau chapitre.</span>",
    d2r_lunch_t: "12h00 &ndash; 14h00", d2r_lunch_e: "Déjeuner", d2r_lunch_d: "Un déjeuner détendu est servi pour tous les invités.",
    d2r_free_t: "14h00 et après", d2r_free_e: "Temps libre", d2r_free_d: "Un moment pour se détendre et se rafraîchir avant le début de la baraat.",
    d2r_tea_t: "15h00 &ndash; 17h00", d2r_tea_e: "Thé de l&rsquo;après-midi", d2r_tea_d: "Thé, café et un assortiment d&rsquo;en-cas. Amuse-bouches et rafraîchissements circuleront tout au long des événements de l&rsquo;après-midi et du soir, vous pourrez donc grignoter quand vous le souhaitez, même si les horaires se chevauchent.",
    d2r3_t: "16h30", d2r3_e: "Baraat (buh-RAAT)", d2r3_d: "Le marié arrive dans une procession festive, accompagné de sa famille et de ses amis qui dansent jusqu&rsquo;au lieu, et la famille de la mariée accueille le marié et ses baraatis (invités de la procession) à l&rsquo;entrée. <span class=\"ritual-why\">La Baraat marque l&rsquo;union des deux familles, souvent avec des guirlandes et des rituels d&rsquo;accueil.</span>",
    d2r4_t: "17h00", d2r4_e: "Phera (FEH-ra)", d2r4_d: "Le couple effectue sept tours autour d&rsquo;un feu sacré. <span class=\"ritual-why\">La Phera est le cœur de la cérémonie, chaque tour représentant un vœu pour leur vie conjugale.</span>",
    d2r5b_t: "19h30", d2r5b_e: "Échange des alliances et des vœux", d2r5b_d: "Sonali et Thomas échangent alliances et vœux personnels, juste avant la réception. <span class=\"ritual-why\">Un moment intime qui relie la cérémonie hindoue à la tradition occidentale.</span>",
    d2r6_t: "20h00", d2r6_e: "Dîner", d2r6_d: "Le dîner commencera, servi sous forme de buffet.",
    d2r_reception_t: "20h30", d2r_reception_e: "Réception avec groupe live", d2r_reception_d: "Boissons et danse avec un groupe live pour clôturer les célébrations.",

    d3r1_t: "7h00 &ndash; 10h00", d3r1_e: "Petit-déjeuner + brunch", d3r1_d: "Un petit-déjeuner et un brunch détendus pour les invités séjournant au resort.",
    d3r2_t: "Avant 12h00", d3r2_e: "Départ", d3r2_d: "Départ du Ridhi Resort.",
    buffet_note: "Les mariages indiens sont généralement organisés sous forme de buffet, les invités sont donc les bienvenus pour manger à leur convenance tout au long de la soirée. (Si vous souhaitez manger avec les mariés, il faudra peut-être patienter un peu !)",

    venue_title: "Le Lieu",
    venue_h: "Ridhi Resort, Jaipur",
    venue_p: "Tous les événements se déroulent au Ridhi Resort, à Jaipur. Le complexe offre un cadre détendu pour les célébrations, avec de l&rsquo;espace pour les cérémonies comme pour les moments plus calmes entre les événements.",
    venue_note: "Mandau Road, près de Patrakar Colony, Mansarovar Extension, Sanganer, Muhana, Jaipur, Rajasthan 302029, Inde.",
    venue_cta: "Ouvrir dans Google Maps",

    travel_title: "Accès",
    air_h: "En avion",
    air_p: "<ul class=\"info-list\"><li><strong>Depuis Paris :</strong> nous recommandons Emirates via Dubaï jusqu&rsquo;à Jaipur (JAI), environ <strong>13 heures au total</strong> avec l&rsquo;escale.</li><li><strong>Autre option :</strong> Air France depuis CDG vers Jaipur, généralement avec une escale (souvent via Amsterdam et Delhi), soit environ <strong>15&ndash;20 heures</strong> en tout.</li><li><strong>Option directe :</strong> vol Paris&ndash;Delhi direct, puis taxi pour les ~300&nbsp;km restants (soit environ <strong>4&ndash;5 heures de route</strong>).</li><li><strong>Arriver tôt :</strong> vous êtes les bienvenus pour arriver à <a href=\"international.html#delhi\">Delhi</a> un jour ou deux à l&rsquo;avance et visiter la ville. Le soir du <strong>21</strong> ou le <strong>matin du 22</strong>, nous fournirons un <strong>bus privé</strong> pour voyager tous ensemble jusqu&rsquo;à Jaipur. Les détails de prise en charge seront communiqués à l&rsquo;approche de la date.</li></ul>",
    train_h: "En train",
    train_p: "<ul class=\"info-list\"><li><strong>Jaipur Junction</strong> est bien reliée à Delhi et aux autres grandes villes.</li><li>Les autres gares de la région incluent <strong>Durgapura</strong> et <strong>Gandhi Nagar</strong>, vous pouvez arriver à l&rsquo;une ou l&rsquo;autre.</li><li>Nos organisateurs contacteront les invités pour confirmer les horaires d&rsquo;arrivée et organiser un <strong>service de taxi</strong> jusqu&rsquo;au lieu le <strong>21</strong>.</li></ul>",
    local_h: "Transport local",
    local_p: "<ul class=\"info-list\"><li>Nous organiserons des transferts entre les hôtels recommandés et le lieu pour les événements principaux (détails à venir).</li><li>Pour explorer Jaipur par vous-même, les services de taxi <strong>Uber et Ola</strong> sont disponibles dans toute la ville.</li></ul>",

    stay_title: "Où loger",
    stay_sub: "Nous listerons ici quelques hôtels recommandés pour différents budgets, avec les détails de réservation.",
    stay_h1: "Sur place", stay_p1: "Nous sommes heureux de vous offrir deux nuits d&rsquo;hébergement au Ridhi Resort, pour les nuits du 22 et du 23 février. Les détails sur les chambres suivront.",
    stay_h2: "Hôtels recommandés", stay_p2: "Une sélection d&rsquo;hôtels à proximité avec nos tarifs de groupe sera bientôt ajoutée.",
    stay_h3: "Aide à la réservation", stay_p3: "Besoin d&rsquo;aide pour réserver ? Contactez-nous ci-dessous et nous vous aiderons.",

    attire_title: "Quoi porter",
    dress_lead: "Des suggestions, jamais des règles. Portez une tenue traditionnelle si vous le souhaitez, ou non. Ce ne sont que des palettes d&rsquo;inspiration pour s&rsquo;amuser.",
    dc1_name: "Mehendi <span lang=\"hi\">(मेहंदी)</span>",
    dc1_phon: "meh-HEN-dee",
    dc1_event: "La cérémonie du henné",
    dc1_note: "Le vert est particulièrement bienvenu !",
    dc2_name: "Haldi <span lang=\"hi\">(हल्दी)</span>",
    dc2_phon: "HUL-dee",
    dc2_event: "La cérémonie du curcuma",
    dc2_note: "Misez sur le jaune, plus c&rsquo;est lumineux mieux c&rsquo;est !",
    dc3_name: "Varmala <span lang=\"hi\">(वरमाला)</span>",
    dc3_phon: "var-MAA-la",
    dc3_event: "Guirlandes, alliances &amp; réception, le grand jour",
    dc3_note: "Portez ce que vous aimez. L&rsquo;ivoire, les pastels, les roses et le bleu sont tous de jolis choix.",
    dress_rent: "Vous découvrez les tenues indiennes ? Pas besoin d&rsquo;acheter quoi que ce soit. Les invités internationaux trouveront des boutiques de location et d&rsquo;achat dans le <a href=\"international.html#outfits\">guide des tenues</a>.",

    faq_title: "Bon à savoir",
    faq_q1: "Ai-je besoin d&rsquo;un visa pour l&rsquo;Inde ?", faq_a1: "La plupart des invités internationaux peuvent demander un e-Visa en ligne. Vous trouverez des informations plus détaillées sur les visas, les conditions d&rsquo;entrée et les vaccinations recommandées dans notre <a href=\"international.html#visa\">Guide des invités</a>. Vérifiez les conditions pour votre nationalité bien à l&rsquo;avance.",
    faq_q2: "Quel temps fera-t-il ?", faq_a2: "Février à Jaipur est agréable, journées chaudes et ensoleillées (environ 25&deg;C) et soirées plus fraîches. Prévoyez une couche légère pour les événements du soir.",
    faq_q3: "Quelle monnaie dois-je apporter ?", faq_a3: "La roupie indienne (INR). Les cartes sont largement acceptées dans les hôtels ; gardez un peu d&rsquo;espèces pour les petits achats et les pourboires.",

    footer_title: "Avec amour, Sonali &amp; Thomas",
    footer_date: "22 &ndash; 23 février 2027 &middot; Ridhi Resort, Jaipur",
  },
};

// Display metadata for each language (flag + native name).
const LANGS = {
  en: { flag: "🇬🇧", name: "English" },
  hi: { flag: "🇮🇳", name: "हिंदी" },
  fr: { flag: "🇫🇷", name: "Français" },
};

// Languages actually offered on this page (the guide page omits Hindi).
const switchEl = document.querySelector(".lang-switch");
const availableLangs = switchEl
  ? Array.from(switchEl.querySelectorAll("[data-lang]"), (b) => b.getAttribute("data-lang"))
  : [];

// persist=false renders a language without overwriting the saved global
// preference, used when a page can't offer the user's chosen language
// (e.g. the EN/FR-only guide page when the visitor picked Hindi).
function applyLang(lang, persist = true) {
  if (!I18N[lang]) lang = "en";
  const dict = I18N[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[el.getAttribute("data-i18n")];
    if (value !== undefined) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const value = dict[el.getAttribute("data-i18n-title")];
    if (value !== undefined) el.setAttribute("title", value);
  });

  if (switchEl) {
    const meta = LANGS[lang] || LANGS.en;
    const flagEl = switchEl.querySelector(".lang-current .lang-flag");
    const nameEl = switchEl.querySelector(".lang-current .lang-name");
    if (flagEl) flagEl.textContent = meta.flag;
    if (nameEl) nameEl.textContent = meta.name;

    switchEl.querySelectorAll(".lang-menu [data-lang]").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });
  }

  if (persist) {
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  // Let other scripts (e.g. the registry) re-label content they render themselves.
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

if (switchEl) {
  const currentBtn = switchEl.querySelector(".lang-current");
  const menu = switchEl.querySelector(".lang-menu");

  function closeMenu() {
    switchEl.classList.remove("open");
    if (currentBtn) currentBtn.setAttribute("aria-expanded", "false");
  }

  if (currentBtn && menu) {
    currentBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = switchEl.classList.toggle("open");
      currentBtn.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("[data-lang]").forEach((btn) =>
      btn.addEventListener("click", () => {
        applyLang(btn.getAttribute("data-lang"));
        closeMenu();
      })
    );

    document.addEventListener("click", (e) => {
      if (!switchEl.contains(e.target)) closeMenu();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }
}

let saved = "en";
try { saved = localStorage.getItem("lang") || "en"; } catch (e) {}
// If the saved language isn't available on this page, show English but keep
// the saved preference intact for pages that do offer it.
const canPersist = availableLangs.length === 0 || availableLangs.includes(saved);
applyLang(canPersist ? saved : "en", canPersist);
