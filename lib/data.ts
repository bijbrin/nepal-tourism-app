/**
 * Nepal Tourism Database - 100 Destinations
 * Comprehensive travel information including how to get there, duration, best season
 * Visitor reviews and ratings included
 * No cost information as requested
 * 
 * Categories:
 * - UNESCO World Heritage Sites
 * - Trekking Destinations
 * - Lakes & Water Bodies
 * - National Parks & Wildlife Reserves
 * - Cultural & Historical Sites
 * - Adventure Sports Destinations
 * - Hill Stations & Viewpoints
 * - Religious & Pilgrimage Sites
 * - Caves & Natural Wonders
 * - Off-the-Beaten-Path Destinations
 */

const places = [
  // ==========================================
  // UNESCO WORLD HERITAGE SITES (10)
  // ==========================================
  {
    id: 1,
    name: "Kathmandu Durbar Square",
    category: "UNESCO World Heritage Site",
    location: "Kathmandu",
    description: "The historic heart of Kathmandu featuring ancient palaces, temples, and courtyards. The square showcases traditional Newari architecture and was the royal palace complex of the Malla and Shah kings.",
    howToReach: "Located in central Kathmandu, easily accessible by taxi, bus, or walking from Thamel (20 mins).",
    duration: "2-4 hours",
    bestSeason: "October to April",
    rating: 4.5,
    reviews: [
      { user: "Sarah M.", rating: 5, comment: "Incredible architecture and history. The Kumari Ghar is fascinating!" },
      { user: "John D.", rating: 4, comment: "Beautiful but crowded. Hire a guide to understand the history." },
      { user: "Priya K.", rating: 5, comment: "A living museum. Every corner tells a story." }
    ],
    highlights: ["Kumari Ghar (Living Goddess)", "Taleju Temple", "Kal Bhairav", "Kasthamandap"]
  },
  {
    id: 2,
    name: "Pashupatinath Temple",
    category: "UNESCO World Heritage Site",
    location: "Kathmandu",
    description: "One of the most sacred Hindu temples dedicated to Lord Shiva, located on the banks of the Bagmati River. A major pilgrimage site attracting thousands of devotees from around the world.",
    howToReach: "5 km east of Kathmandu city center. Accessible by taxi, local bus, or hired vehicle.",
    duration: "2-3 hours",
    bestSeason: "Year-round, especially during Shivaratri (February/March)",
    rating: 4.6,
    reviews: [
      { user: "Michael R.", rating: 5, comment: "Profoundly spiritual experience. The evening aarti is mesmerizing." },
      { user: "Emma L.", rating: 4, comment: "Powerful atmosphere. Respect the cremation ceremonies." },
      { user: "Rajesh P.", rating: 5, comment: "Holiest of holy places. A must-visit for spiritual seekers." }
    ],
    highlights: ["Main Temple Complex", "Evening Aarti", "Cremation Ghats", "Sadhus"]
  },
  {
    id: 3,
    name: "Boudhanath Stupa",
    category: "UNESCO World Heritage Site",
    location: "Kathmandu",
    description: "One of the largest spherical stupas in Nepal and a major center of Tibetan Buddhism. The stupa features the iconic all-seeing eyes of Buddha on all four sides.",
    howToReach: "Located 8 km from central Kathmandu. Accessible by taxi, local bus, or walking from nearby areas.",
    duration: "1-2 hours",
    bestSeason: "Year-round",
    rating: 4.8,
    reviews: [
      { user: "Lisa T.", rating: 5, comment: "Absolutely magical, especially at sunset. The prayer wheels are hypnotic." },
      { user: "David K.", rating: 5, comment: "The most peaceful place in Kathmandu. Great for meditation." },
      { user: "Yuki S.", rating: 4, comment: "Beautiful stupa with great restaurants and shops around." }
    ],
    highlights: ["Giant Stupa with Buddha Eyes", "Prayer Wheels", "Tibetan Monasteries", "Rooftop Cafes"]
  },
  {
    id: 4,
    name: "Swayambhunath Stupa (Monkey Temple)",
    category: "UNESCO World Heritage Site",
    location: "Kathmandu",
    description: "Ancient religious complex atop a hill, sacred to both Hindus and Buddhists. Known as the Monkey Temple due to the holy monkeys living in the northwest parts.",
    howToReach: "3 km west of Kathmandu. Climb 365 steps or take a taxi to the top entrance.",
    duration: "2-3 hours",
    bestSeason: "Year-round, best at sunrise or sunset",
    rating: 4.7,
    reviews: [
      { user: "Anna B.", rating: 5, comment: "The view of Kathmandu Valley is spectacular! Watch out for the monkeys." },
      { user: "Tom H.", rating: 4, comment: "Steep climb but worth every step. Bring water!" },
      { user: "Meera J.", rating: 5, comment: "Spiritual energy is palpable. A place of true peace." }
    ],
    highlights: ["Panoramic Valley Views", "Ancient Stupa", "Harati Temple", "Monkeys"]
  },
  {
    id: 5,
    name: "Patan Durbar Square",
    category: "UNESCO World Heritage Site",
    location: "Lalitpur (Patan)",
    description: "A masterpiece of Newari architecture, Patan Durbar Square features the former royal palace complex and numerous temples with intricate wood and stone carvings.",
    howToReach: "5 km south of Kathmandu. Cross the Bagmati River via bridge or taxi.",
    duration: "3-4 hours",
    bestSeason: "October to April",
    rating: 4.6,
    reviews: [
      { user: "Chris M.", rating: 5, comment: "Less crowded than Kathmandu Durbar. The craftsmanship is extraordinary." },
      { user: "Sophie L.", rating: 4, comment: "The museum is excellent. Learned so much about Newari culture." },
      { user: "Kumar S.", rating: 5, comment: "Patan is the artistic capital. Every detail is perfect." }
    ],
    highlights: ["Krishna Mandir", "Patan Museum", "Golden Temple", "Ashok Stupas"]
  },
  {
    id: 6,
    name: "Bhaktapur Durbar Square",
    category: "UNESCO World Heritage Site",
    location: "Bhaktapur",
    description: "The best-preserved of the three royal cities in Kathmandu Valley. Bhaktapur is known as the 'City of Devotees' and showcases medieval Nepalese culture.",
    howToReach: "13 km east of Kathmandu. Regular buses and taxis available (45 mins).",
    duration: "Half day to full day",
    bestSeason: "October to April",
    rating: 4.8,
    reviews: [
      { user: "Jennifer W.", rating: 5, comment: "My favorite of the three Durbar Squares. Authentic and less commercial." },
      { user: "Ahmed H.", rating: 5, comment: "Step back in time. The pottery square is fascinating." },
      { user: "Nina P.", rating: 4, comment: "Worth the entrance fee. Stay overnight to experience morning rituals." }
    ],
    highlights: ["55-Window Palace", "Nyatapola Temple", "Pottery Square", "Dattatreya Temple"]
  },
  {
    id: 7,
    name: "Changu Narayan Temple",
    category: "UNESCO World Heritage Site",
    location: "Bhaktapur District",
    description: "The oldest Hindu temple in the Kathmandu Valley, dedicated to Lord Vishnu. Features some of the finest stone, wood, and metal craft in Nepal.",
    howToReach: "15 km east of Kathmandu. Take bus/taxi to Bhaktapur then local transport (4 km from Bhaktapur).",
    duration: "2-3 hours",
    bestSeason: "October to April",
    rating: 4.5,
    reviews: [
      { user: "Robert F.", rating: 5, comment: "Oldest temple with incredible stone carvings. Peaceful setting." },
      { user: "Maria G.", rating: 4, comment: "Beautiful location on the hill. Great views of the valley." },
      { user: "Sanjay R.", rating: 5, comment: "A hidden gem. The museum has amazing artifacts." }
    ],
    highlights: ["Ancient Stone Carvings", "Garuda Statue", "Museum", "Valley Views"]
  },
  {
    id: 8,
    name: "Sagarmatha National Park",
    category: "UNESCO World Heritage Site",
    location: "Solukhumbu District",
    description: "Home to Mount Everest (8,848m) and other towering peaks. The park features dramatic glaciers, deep gorges, and unique Sherpa culture.",
    howToReach: "Fly to Lukla from Kathmandu (30 mins), then trek. Alternative: drive to Jiri/Salleri and trek.",
    duration: "7-14 days for trekking",
    bestSeason: "March-May and September-November",
    rating: 4.9,
    reviews: [
      { user: "Alex T.", rating: 5, comment: "Life-changing experience. The mountains are beyond words." },
      { user: "Helena B.", rating: 5, comment: "EBC trek was challenging but the most rewarding thing I've done." },
      { user: "Kenji M.", rating: 5, comment: "Sherpa hospitality is incredible. Namche Bazaar is amazing." }
    ],
    highlights: ["Mount Everest", "Namche Bazaar", "Tengboche Monastery", "Gokyo Lakes"]
  },
  {
    id: 9,
    name: "Chitwan National Park",
    category: "UNESCO World Heritage Site",
    location: "Chitwan District",
    description: "Nepal's first national park, famous for wildlife safaris. Home to the endangered one-horned rhinoceros, Bengal tigers, and over 500 bird species.",
    howToReach: "160 km from Kathmandu. Tourist bus (5-6 hrs), private vehicle (4-5 hrs), or flight to Bharatpur (20 mins).",
    duration: "2-3 days",
    bestSeason: "October to March",
    rating: 4.7,
    reviews: [
      { user: "Laura C.", rating: 5, comment: "Saw 4 rhinos on elephant safari! Incredible wildlife experience." },
      { user: "Mark S.", rating: 4, comment: "Great contrast to mountain trekking. Tharu culture is fascinating." },
      { user: "Fatima A.", rating: 5, comment: "Canoe ride on Rapti River was magical. Saw crocodiles and birds." }
    ],
    highlights: ["Elephant/Jeep Safari", "One-horned Rhino", "Canoe Ride", "Tharu Village Visit"]
  },
  {
    id: 10,
    name: "Lumbini - Birthplace of Buddha",
    category: "UNESCO World Heritage Site",
    location: "Rupandehi District",
    description: "The sacred birthplace of Lord Gautama Buddha. The site features the Maya Devi Temple, sacred garden, and monasteries built by Buddhist communities from around the world.",
    howToReach: "280 km from Kathmandu. Flight to Bhairahawa (35 mins) then 30 min drive, or bus (8-10 hrs).",
    duration: "1-2 days",
    bestSeason: "October to March",
    rating: 4.6,
    reviews: [
      { user: "Wei L.", rating: 5, comment: "Profoundly peaceful. The eternal flame and sacred pond are moving." },
      { user: "Thomas B.", rating: 4, comment: "International monastic zone is beautiful. Each country has unique architecture." },
      { user: "Sunita D.", rating: 5, comment: "Spiritual journey of a lifetime. Very well maintained." }
    ],
    highlights: ["Maya Devi Temple", "Sacred Garden", "World Peace Pagoda", "International Monasteries"]
  },

  // ==========================================
  // TREKKING DESTINATIONS (20)
  // ==========================================
  {
    id: 11,
    name: "Everest Base Camp Trek",
    category: "Trekking Destination",
    location: "Solukhumbu District",
    description: "The iconic trek to the base of the world's highest mountain. Passes through Sherpa villages, Buddhist monasteries, and offers breathtaking Himalayan views.",
    howToReach: "Fly to Lukla from Kathmandu, then trek to Namche Bazaar and onwards.",
    duration: "12-14 days",
    bestSeason: "March-May and September-November",
    rating: 4.9,
    reviews: [
      { user: "Daniel P.", rating: 5, comment: "Bucket list achieved! The views at Kala Patthar are unreal." },
      { user: "Rachel K.", rating: 5, comment: "Tough but absolutely worth it. Acclimatization days are crucial." },
      { user: "Hans G.", rating: 4, comment: "Crowded trail but the scenery compensates. Go in off-season if possible." }
    ],
    highlights: ["Kala Patthar Viewpoint", "Namche Bazaar", "Tengboche Monastery", "Khumbu Glacier"]
  },
  {
    id: 12,
    name: "Annapurna Base Camp Trek",
    category: "Trekking Destination",
    location: "Kaski District",
    description: "A classic trek leading to the heart of the Annapurna Sanctuary. Offers close-up views of Annapurna I, Machhapuchhre (Fishtail), and surrounding peaks.",
    howToReach: "Drive or fly to Pokhara, then drive to Nayapul or Ghandruk to start the trek.",
    duration: "7-10 days",
    bestSeason: "March-May and September-November",
    rating: 4.8,
    reviews: [
      { user: "Emily R.", rating: 5, comment: "Perfect introduction to Himalayan trekking. Teahouses are comfortable." },
      { user: "Carlos M.", rating: 5, comment: "Sunrise at ABC is something I'll never forget." },
      { user: "Ying Z.", rating: 4, comment: "Many stairs but the hot springs at Jhinu are the perfect reward." }
    ],
    highlights: ["Annapurna Sanctuary", "Machhapuchhre Base Camp", "Jhinu Hot Springs", "Ghorepani Poon Hill"]
  },
  {
    id: 13,
    name: "Annapurna Circuit Trek",
    category: "Trekking Destination",
    location: "Manang & Mustang Districts",
    description: "One of the most diverse treks in the world, circling the Annapurna massif. Crosses the Thorong La Pass (5,416m) and traverses varied landscapes.",
    howToReach: "Drive from Kathmandu to Besishahar, then start trekking.",
    duration: "14-18 days",
    bestSeason: "March-May and September-November",
    rating: 4.8,
    reviews: [
      { user: "Patrick O.", rating: 5, comment: "The variety of landscapes is incredible. From jungle to desert to snow!" },
      { user: "Fiona W.", rating: 5, comment: "Thorong La crossing was tough but the sense of achievement is unmatched." },
      { user: "Omar S.", rating: 4, comment: "Road construction has shortened the trek but still amazing." }
    ],
    highlights: ["Thorong La Pass", "Muktinath Temple", "Manang Village", "Tilicho Lake"]
  },
  {
    id: 14,
    name: "Langtang Valley Trek",
    category: "Trekking Destination",
    location: "Rasuwa District",
    description: "A beautiful trek through the Langtang National Park, offering stunning mountain views, rhododendron forests, and authentic Tamang culture.",
    howToReach: "Drive from Kathmandu to Syabrubesi (7-8 hrs), then trek.",
    duration: "7-10 days",
    bestSeason: "March-May and September-November",
    rating: 4.6,
    reviews: [
      { user: "Natalie H.", rating: 5, comment: "Less crowded than EBC/ABC. The valley is absolutely gorgeous." },
      { user: "James L.", rating: 4, comment: "Great for those short on time. Kyanjin Gompa is beautiful." },
      { user: "Anita P.", rating: 5, comment: "The cheese factory at Kyanjin is a must-visit!" }
    ],
    highlights: ["Kyanjin Gompa", "Tserko Ri Viewpoint", "Langtang Glacier", "Tamang Villages"]
  },
  {
    id: 15,
    name: "Manaslu Circuit Trek",
    category: "Trekking Destination",
    location: "Gorkha District",
    description: "A remote and challenging trek around Mount Manaslu (8,163m), crossing the Larkya La Pass. Offers pristine landscapes and authentic Tibetan-influenced culture.",
    howToReach: "Drive from Kathmandu to Soti Khola (8-9 hrs), then trek.",
    duration: "14-18 days",
    bestSeason: "March-May and September-November",
    rating: 4.8,
    reviews: [
      { user: "Victor M.", rating: 5, comment: "The best trek in Nepal! Remote, challenging, and incredibly beautiful." },
      { user: "Isabella C.", rating: 5, comment: "Larkya La is tough but the views of Manaslu are breathtaking." },
      { user: "Raj K.", rating: 4, comment: "Restricted area permit required but worth the paperwork." }
    ],
    highlights: ["Larkya La Pass", "Mount Manaslu Views", "Samagaon Village", "Birendra Lake"]
  },
  {
    id: 16,
    name: "Upper Mustang Trek",
    category: "Trekking Destination",
    location: "Mustang District",
    description: "A journey into the 'Forbidden Kingdom' of Mustang, featuring a trans-Himalayan landscape, ancient caves, and well-preserved Tibetan Buddhist culture.",
    howToReach: "Fly from Pokhara to Jomsom (20 mins), then trek to Lo Manthang.",
    duration: "12-16 days",
    bestSeason: "March-May and September-November",
    rating: 4.7,
    reviews: [
      { user: "Gabriel S.", rating: 5, comment: "Like trekking in Tibet. The walled city of Lo Manthang is magical." },
      { user: "Mei L.", rating: 5, comment: "Ancient caves and monasteries. A photographer's paradise." },
      { user: "Stefan B.", rating: 4, comment: "Expensive permit but unique experience found nowhere else." }
    ],
    highlights: ["Lo Manthang", "Ancient Caves", "Ghar Gompa", "Trans-Himalayan Landscape"]
  },
  {
    id: 17,
    name: "Gokyo Lakes Trek",
    category: "Trekking Destination",
    location: "Solukhumbu District",
    description: "An alternative to EBC, this trek leads to the stunning Gokyo Lakes and Gokyo Ri, offering panoramic views of four 8,000m peaks.",
    howToReach: "Fly to Lukla, trek to Namche, then branch north to Gokyo Valley.",
    duration: "12-14 days",
    bestSeason: "March-May and September-November",
    rating: 4.8,
    reviews: [
      { user: "Claire D.", rating: 5, comment: "The turquoise lakes are stunning. Less crowded than EBC route." },
      { user: "Bjorn N.", rating: 5, comment: "Gokyo Ri sunrise is arguably better than Kala Patthar!" },
      { user: "Sofia R.", rating: 4, comment: "Crossing Cho La pass is challenging but rewarding." }
    ],
    highlights: ["Gokyo Lakes", "Gokyo Ri Viewpoint", "Ngozumpa Glacier", "Cho La Pass"]
  },
  {
    id: 18,
    name: "Kanchenjunga Base Camp Trek",
    category: "Trekking Destination",
    location: "Taplejung District",
    description: "A challenging trek to the base of the world's third highest mountain. Remote, pristine, and culturally rich with Limbu and Sherpa communities.",
    howToReach: "Fly to Bhadrapur or Suketar, then drive to trailhead and trek.",
    duration: "20-25 days",
    bestSeason: "March-May and September-November",
    rating: 4.9,
    reviews: [
      { user: "Erik H.", rating: 5, comment: "The hardest trek I've done but the most rewarding. True wilderness." },
      { user: "Diana P.", rating: 5, comment: "Barely any tourists. Feels like discovering Nepal 50 years ago." },
      { user: "Tenzin W.", rating: 5, comment: "Kanchenjunga is majestic. The north and south base camps both amazing." }
    ],
    highlights: ["Pangpema (North Base Camp)", "Oktang (South Base Camp)", "Kanchenjunga Views", "Remote Villages"]
  },
  {
    id: 19,
    name: "Makalu Base Camp Trek",
    category: "Trekking Destination",
    location: "Sankhuwasabha District",
    description: "A challenging trek to the base of Mount Makalu (8,485m), the fifth highest peak. Features diverse ecosystems from tropical to alpine.",
    howToReach: "Fly to Tumlingtar, then trek through Arun Valley.",
    duration: "18-21 days",
    bestSeason: "March-May and September-November",
    rating: 4.7,
    reviews: [
      { user: "Hiroshi T.", rating: 5, comment: "Incredible variety of landscapes. Makalu is stunning from base camp." },
      { user: "Maria F.", rating: 4, comment: "Very demanding trek. Good fitness essential." },
      { user: "Lars K.", rating: 5, comment: "Barun Valley is one of the most beautiful places on Earth." }
    ],
    highlights: ["Makalu Base Camp", "Barun Valley", "Shershong Ridge", "Arun Valley"]
  },
  {
    id: 20,
    name: "Dhaulagiri Circuit Trek",
    category: "Trekking Destination",
    location: "Myagdi District",
    description: "A challenging trek around Dhaulagiri I (8,167m), crossing the French Pass and Dhampus Pass. For experienced trekkers seeking adventure.",
    howToReach: "Drive from Pokhara to Beni, then trek to Italian Base Camp and beyond.",
    duration: "15-18 days",
    bestSeason: "March-May and September-November",
    rating: 4.6,
    reviews: [
      { user: "Antoine L.", rating: 5, comment: "The most challenging trek in Nepal. French Pass is epic." },
      { user: "Petra S.", rating: 4, comment: "Requires camping gear and experience. Not for beginners." },
      { user: "Mingma S.", rating: 5, comment: "Hidden Valley is like another planet. Incredible experience." }
    ],
    highlights: ["French Pass", "Dhaulagiri Base Camp", "Hidden Valley", "Dhampus Pass"]
  },
  {
    id: 21,
    name: "Upper Dolpo Trek",
    category: "Trekking Destination",
    location: "Dolpa District",
    description: "A remote trek to one of Nepal's most isolated regions, featuring Shey Phoksundo Lake, ancient monasteries, and Bon culture.",
    howToReach: "Fly to Nepalgunj then Juphal, or drive to Juphal via Surkhet.",
    duration: "18-27 days",
    bestSeason: "May-October (summer monsoon is best here)",
    rating: 4.8,
    reviews: [
      { user: "Werner H.", rating: 5, comment: "Like stepping into a different world. The lake is mesmerizing." },
      { user: "Catherine B.", rating: 5, comment: "Crystal Mountain and Shey Gompa are spiritual highlights." },
      { user: "Dorje T.", rating: 5, comment: "Bon culture is fascinating. Very different from rest of Nepal." }
    ],
    highlights: ["Shey Phoksundo Lake", "Crystal Mountain", "Shey Gompa", "Kang La Pass"]
  },
  {
    id: 22,
    name: "Rara Lake Trek",
    category: "Trekking Destination",
    location: "Mugu District",
    description: "A trek to Nepal's largest lake, surrounded by Rara National Park. Features pristine forests, alpine meadows, and abundant wildlife.",
    howToReach: "Fly to Nepalgunj then Talcha Airport, or trek from Jumla.",
    duration: "8-12 days",
    bestSeason: "March-May and September-November",
    rating: 4.7,
    reviews: [
      { user: "Ingrid M.", rating: 5, comment: "Rara Lake changes colors throughout the day. Absolutely magical." },
      { user: "Samir P.", rating: 4, comment: "Remote and peaceful. Great for nature lovers." },
      { user: "Elena R.", rating: 5, comment: "The flight to Talcha is an adventure itself!" }
    ],
    highlights: ["Rara Lake", "Rara National Park", "Murma Top Viewpoint", "Pine Forests"]
  },
  {
    id: 23,
    name: "Ghorepani Poon Hill Trek",
    category: "Trekking Destination",
    location: "Kaski District",
    description: "A short and relatively easy trek perfect for beginners and families. Famous for sunrise views from Poon Hill over the Annapurna range.",
    howToReach: "Drive from Pokhara to Nayapul or Ulleri, then trek.",
    duration: "3-5 days",
    bestSeason: "Year-round (best October-November)",
    rating: 4.6,
    reviews: [
      { user: "Jessica W.", rating: 5, comment: "Perfect first trek in Nepal. Sunrise at Poon Hill is unforgettable." },
      { user: "Ahmed K.", rating: 4, comment: "Many stairs but manageable. Great for families with kids." },
      { user: "Linda C.", rating: 5, comment: "Rhododendron forests in spring are spectacular!" }
    ],
    highlights: ["Poon Hill Sunrise", "Ghorepani Village", "Ghandruk Village", "Rhododendron Forests"]
  },
  {
    id: 24,
    name: "Mardi Himal Trek",
    category: "Trekking Destination",
    location: "Kaski District",
    description: "A hidden gem trek offering close-up views of Machhapuchhre (Fishtail Mountain) and Annapurna South. Less crowded alternative to ABC.",
    howToReach: "Drive from Pokhara to Kande or Phedi, then trek.",
    duration: "4-6 days",
    bestSeason: "March-May and September-November",
    rating: 4.7,
    reviews: [
      { user: "Tom B.", rating: 5, comment: "Best short trek in Nepal. Views of Fishtail are incredible." },
      { user: "Yuki N.", rating: 5, comment: "Peaceful trail, fewer crowds. High camp is amazing." },
      { user: "Sophie M.", rating: 4, comment: "Steep ascent but worth it. Good for those short on time." }
    ],
    highlights: ["Mardi Himal Base Camp", "High Camp", "Machhapuchhre Views", "Forest Camp"]
  },
  {
    id: 25,
    name: "Everest Three Passes Trek",
    category: "Trekking Destination",
    location: "Solukhumbu District",
    description: "The ultimate Everest region trek, crossing Kongma La, Cho La, and Renjo La passes. Combines EBC, Gokyo, and remote valleys.",
    howToReach: "Fly to Lukla, then trek through all three passes.",
    duration: "18-21 days",
    bestSeason: "March-May and September-November",
    rating: 4.9,
    reviews: [
      { user: "Marcus J.", rating: 5, comment: "The ultimate trek in Nepal. Three passes, EBC, and Gokyo in one!" },
      { user: "Eva S.", rating: 5, comment: "Extremely challenging but the most comprehensive Everest experience." },
      { user: "Chen W.", rating: 4, comment: "Requires excellent fitness and acclimatization. Not for beginners." }
    ],
    highlights: ["Kongma La Pass", "Cho La Pass", "Renjo La Pass", "EBC & Gokyo"]
  },
  {
    id: 26,
    name: "Tsum Valley Trek",
    category: "Trekking Destination",
    location: "Gorkha District",
    description: "A sacred Himalayan pilgrimage valley with ancient monasteries, mani walls, and strong Tibetan Buddhist culture. Recently opened to tourists.",
    howToReach: "Drive to Soti Khola, trek through Manaslu Circuit route to Tsum Valley.",
    duration: "14-18 days",
    bestSeason: "March-May and September-November",
    rating: 4.7,
    reviews: [
      { user: "Ana G.", rating: 5, comment: "Sacred valley with incredible energy. Mu Gompa is special." },
      { user: "Klaus D.", rating: 5, comment: "Authentic Tibetan culture. Very few tourists venture here." },
      { user: "Rita M.", rating: 4, comment: "Combine with Manaslu Circuit for the ultimate experience." }
    ],
    highlights: ["Mu Gompa", "Rachen Gompa", "Ganesh Himal Views", "Ancient Monasteries"]
  },
  {
    id: 27,
    name: "Nar Phu Valley Trek",
    category: "Trekking Destination",
    location: "Manang District",
    description: "A trek to a hidden valley with medieval Tibetan villages, ancient gompas, and dramatic canyon landscapes. Restricted area requiring special permits.",
    howToReach: "Drive to Koto after Besisahar, then branch north to Nar Phu.",
    duration: "10-14 days",
    bestSeason: "March-May and September-November",
    rating: 4.6,
    reviews: [
      { user: "Oliver P.", rating: 5, comment: "Medieval villages frozen in time. Kang La pass is stunning." },
      { user: "Nisha T.", rating: 4, comment: "Remote and challenging. Basic teahouses but authentic experience." },
      { user: "Bruno L.", rating: 5, comment: "The canyon landscapes are unlike anything else in Nepal." }
    ],
    highlights: ["Nar Village", "Phu Village", "Kang La Pass", "Ancient Gompas"]
  },
  {
    id: 28,
    name: "Helambu Trek",
    category: "Trekking Destination",
    location: "Sindhupalchok District",
    description: "A short trek near Kathmandu through Sherpa villages and rhododendron forests. Perfect for those with limited time.",
    howToReach: "Drive from Kathmandu to Sundarijal (1 hr), then trek.",
    duration: "5-7 days",
    bestSeason: "Year-round (best March-April and October-November)",
    rating: 4.3,
    reviews: [
      { user: "Kevin L.", rating: 4, comment: "Great short trek close to Kathmandu. Good for beginners." },
      { user: "Susan H.", rating: 4, comment: "Less mountain views than other treks but nice cultural experience." },
      { user: "Ravi K.", rating: 5, comment: "Perfect weekend trek from Kathmandu." }
    ],
    highlights: ["Tharepati Pass", "Tarkeghyang Village", "Rhododendron Forests", "Sherpa Culture"]
  },
  {
    id: 29,
    name: "Pikey Peak Trek",
    category: "Trekking Destination",
    location: "Solukhumbu District",
    description: "A lower-altitude trek offering panoramic views of Everest and the eastern Himalayas. Sir Edmund Hillary claimed it his favorite view of Everest.",
    howToReach: "Drive from Kathmandu to Dhap or Jiri, then trek.",
    duration: "6-8 days",
    bestSeason: "March-May and September-November",
    rating: 4.5,
    reviews: [
      { user: "George M.", rating: 5, comment: "Best view of Everest without the crowds. Sir Ed was right!" },
      { user: "Paula R.", rating: 4, comment: "Lower altitude makes it easier. Great for those worried about altitude." },
      { user: "Tashi S.", rating: 5, comment: "Thupten Choling Monastery is a hidden gem." }
    ],
    highlights: ["Pikey Peak Sunrise", "Everest Panorama", "Thupten Choling Monastery", "Lower Solu"]
  },
  {
    id: 30,
    name: "Khaptad National Park Trek",
    category: "Trekking Destination",
    location: "Bajhang, Bajura & Doti Districts",
    description: "A trek to Nepal's only mid-mountain national park, featuring rolling meadows, forests, and the ashram of the famous saint Khaptad Baba.",
    howToReach: "Fly to Dipayal or Bajhang, then trek or drive to park entrance.",
    duration: "5-7 days",
    bestSeason: "March-May and September-November",
    rating: 4.4,
    reviews: [
      { user: "Deepak S.", rating: 5, comment: "Peaceful and spiritual. The meadows are beautiful." },
      { user: "Helen B.", rating: 4, comment: "Different from high mountain treks. More like Scottish highlands." },
      { user: "Prakash J.", rating: 4, comment: "Khaptad Baba's ashram is very peaceful." }
    ],
    highlights: ["Khaptad Baba Ashram", "Rolling Meadows", "Tribeni Confluence", "Saipal Views"]
  },

  // ==========================================
  // LAKES & WATER BODIES (10)
  // ==========================================
  {
    id: 31,
    name: "Phewa Lake",
    category: "Lake & Water Body",
    location: "Pokhara, Kaski District",
    description: "The second largest lake in Nepal and the centerpiece of Pokhara. Features the Tal Barahi Temple on an island and offers stunning reflections of Machhapuchhre.",
    howToReach: "Located in Pokhara city. Walking distance from Lakeside area.",
    duration: "2-4 hours (boating)",
    bestSeason: "Year-round (best October-April)",
    rating: 4.7,
    reviews: [
      { user: "Michelle T.", rating: 5, comment: "Boating at sunset with mountain reflections is magical." },
      { user: "Arjun P.", rating: 4, comment: "Can get crowded but beautiful. Early morning is best." },
      { user: "Lisa K.", rating: 5, comment: "The Lakeside restaurants have great views. Perfect for relaxing." }
    ],
    highlights: ["Tal Barahi Temple", "Boating", "Sunset Views", "Lakeside Promenade"]
  },
  {
    id: 32,
    name: "Rara Lake",
    category: "Lake & Water Body",
    location: "Mugu District",
    description: "Nepal's largest lake, known as the 'Queen of Lakes'. Surrounded by Rara National Park, it changes colors throughout the day and offers pristine wilderness.",
    howToReach: "Fly Kathmandu-Nepalgunj-Talcha, then 3-hour trek or drive.",
    duration: "2-3 days",
    bestSeason: "March-May and September-November",
    rating: 4.9,
    reviews: [
      { user: "Thomas H.", rating: 5, comment: "The most beautiful lake I've ever seen. Changes 7 colors!" },
      { user: "Anita D.", rating: 5, comment: "Remote and pristine. Worth the effort to get there." },
      { user: "Markus B.", rating: 5, comment: "Murma Top offers the best views of the lake." }
    ],
    highlights: ["Color-Changing Waters", "Murma Top Viewpoint", "Rara National Park", "Pine Forests"]
  },
  {
    id: 33,
    name: "Tilicho Lake",
    category: "Lake & Water Body",
    location: "Manang District",
    description: "One of the highest lakes in the world at 4,919m. A sacred lake surrounded by snow-capped peaks, accessible via a side trip from the Annapurna Circuit.",
    howToReach: "Trek from Manang on Annapurna Circuit (2 days side trip).",
    duration: "2-3 days (side trip)",
    bestSeason: "March-May and September-November",
    rating: 4.8,
    reviews: [
      { user: "Fernando G.", rating: 5, comment: "Highest lake in the world! The blue color is surreal." },
      { user: "Hannah S.", rating: 5, comment: "Challenging trek but the reward is worth every step." },
      { user: "Ramesh K.", rating: 4, comment: "Altitude is serious. Acclimatize properly." }
    ],
    highlights: ["Highest Lake in World", "Turquoise Waters", "Mountain Reflections", "Sacred Site"]
  },
  {
    id: 34,
    name: "Gosaikunda Lake",
    category: "Lake & Water Body",
    location: "Rasuwa District",
    description: "A sacred alpine lake at 4,380m, important to both Hindus and Buddhists. According to legend, Lord Shiva created the lake by thrusting his trident.",
    howToReach: "Drive to Dhunche (6 hrs from Kathmandu), then 2-day trek.",
    duration: "3-5 days",
    bestSeason: "March-May and September-November",
    rating: 4.7,
    reviews: [
      { user: "Sunita R.", rating: 5, comment: "Sacred and beautiful. Religious significance makes it special." },
      { user: "Peter N.", rating: 4, comment: "Cold but stunning. Frozen in winter." },
      { user: "Maya T.", rating: 5, comment: "Full moon in August is when pilgrims gather. Powerful energy." }
    ],
    highlights: ["Sacred Lake", "Shiva Legends", "Laurebina Pass", "Langtang Views"]
  },
  {
    id: 35,
    name: "Shey Phoksundo Lake",
    category: "Lake & Water Body",
    location: "Dolpa District",
    description: "Nepal's deepest lake and one of the most stunning. The turquoise waters against the backdrop of arid mountains create an otherworldly landscape.",
    howToReach: "Fly to Juphal via Nepalgunj, then 2-3 day trek to Ringmo.",
    duration: "3-5 days",
    bestSeason: "May-October",
    rating: 4.9,
    reviews: [
      { user: "Julia M.", rating: 5, comment: "The color of the water doesn't look real! Absolutely stunning." },
      { user: "Dawa S.", rating: 5, comment: "Sacred to Bon religion. Very spiritual place." },
      { user: "Eric L.", rating: 5, comment: "The waterfall at the lake's outlet is spectacular." }
    ],
    highlights: ["Deepest Lake in Nepal", "Turquoise Waters", "Ringmo Village", "Waterfall"]
  },
  {
    id: 36,
    name: "Gokyo Lakes",
    category: "Lake & Water Body",
    location: "Solukhumbu District",
    description: "A system of six glacial lakes at 4,700-5,000m. The main lake, Dudh Pokhari, is sacred and the site of annual pilgrimages.",
    howToReach: "Trek from Namche Bazaar via Dole and Machhermo (3-4 days).",
    duration: "3-4 days",
    bestSeason: "March-May and September-November",
    rating: 4.8,
    reviews: [
      { user: "Benjamin C.", rating: 5, comment: "The turquoise lakes against white peaks is postcard perfect." },
      { user: "Sara J.", rating: 5, comment: "Third Gokyo Lake is the most beautiful. Less crowded than EBC." },
      { user: "Karma T.", rating: 4, comment: "Sacred lakes. Respect the local beliefs." }
    ],
    highlights: ["Six Glacial Lakes", "Sacred Dudh Pokhari", "Ngozumpa Glacier", "Gokyo Village"]
  },
  {
    id: 37,
    name: "Begnas Lake",
    category: "Lake & Water Body",
    location: "Pokhara, Kaski District",
    description: "The third largest lake in Pokara Valley, less crowded than Phewa. Known for fishing, boating, and peaceful surroundings.",
    howToReach: "15 km east of Pokhara. Local bus or taxi (30 mins).",
    duration: "Half day",
    bestSeason: "Year-round",
    rating: 4.4,
    reviews: [
      { user: "Rohan S.", rating: 4, comment: "Peaceful alternative to Phewa. Good for fishing." },
      { user: "Emma W.", rating: 5, comment: "Less touristy, more authentic village experience." },
      { user: "Bikash M.", rating: 4, comment: "Nice for a quiet day away from Pokhara crowds." }
    ],
    highlights: ["Peaceful Boating", "Fishing", "Village Walks", "Mountain Views"]
  },
  {
    id: 38,
    name: "Rupa Lake",
    category: "Lake & Water Body",
    location: "Pokhara, Kaski District",
    description: "A freshwater lake near Begnas, known for birdwatching and tranquility. The lake is separated from Begnas by a narrow strip of land.",
    howToReach: "Near Begnas Lake, 12 km from Pokhara.",
    duration: "2-3 hours",
    bestSeason: "Year-round (best for birds in winter)",
    rating: 4.3,
    reviews: [
      { user: "David B.", rating: 4, comment: "Great for birdwatching. Saw many migratory birds." },
      { user: "Nisha G.", rating: 4, comment: "Quiet and serene. Perfect for nature lovers." },
      { user: "John P.", rating: 5, comment: "The walk between Begnas and Rupa is beautiful." }
    ],
    highlights: ["Birdwatching", "Tranquility", "Nature Walks", "Village Life"]
  },
  {
    id: 39,
    name: "Panch Pokhari",
    category: "Lake & Water Body",
    location: "Sindhupalchok District",
    description: "A group of five sacred lakes at 4,100m in the Langtang region. An important pilgrimage site, especially during Janai Purnima.",
    howToReach: "Drive to Chautara (5 hrs), then 3-4 day trek.",
    duration: "5-7 days",
    bestSeason: "March-May and September-November",
    rating: 4.5,
    reviews: [
      { user: "Gita S.", rating: 5, comment: "Sacred pilgrimage. The five lakes are beautiful." },
      { user: "Michael R.", rating: 4, comment: "Less known trail. Good for those seeking solitude." },
      { user: "Laxmi T.", rating: 5, comment: "Janai Purnima festival here is very special." }
    ],
    highlights: ["Five Sacred Lakes", "Jugal Himal Views", "Pilgrimage Site", "Camping"]
  },
  {
    id: 40,
    name: "Kapuche Lake",
    category: "Lake & Water Body",
    location: "Kaski District",
    description: "Nepal's lowest glacier lake at 2,450m. A newly discovered gem offering views of Annapurna II and Lamjung Himal.",
    howToReach: "Drive to Sikles from Pokhara, then 2-day trek.",
    duration: "2-3 days",
    bestSeason: "March-May and September-November",
    rating: 4.4,
    reviews: [
      { user: "Amit K.", rating: 5, comment: "Newly discovered gem. Few tourists know about it." },
      { user: "Sophie L.", rating: 4, comment: "Glacier lake at low altitude. Unique!" },
      { user: "Rajesh P.", rating: 4, comment: "Sikles village is beautiful. Great homestays." }
    ],
    highlights: ["Lowest Glacier Lake", "Annapurna Views", "Sikles Village", "Peaceful"]
  },

  // ==========================================
  // NATIONAL PARKS & WILDLIFE RESERVES (10)
  // ==========================================
  {
    id: 41,
    name: "Bardia National Park",
    category: "National Park & Wildlife",
    location: "Bardiya District",
    description: "The largest national park in Nepal's Terai, offering the best tiger sighting opportunities. Less crowded than Chitwan with pristine wilderness.",
    howToReach: "Fly to Nepalgunj (1 hr), then 2-hour drive. Or bus from Kathmandu (12-15 hrs).",
    duration: "2-4 days",
    bestSeason: "October to March",
    rating: 4.8,
    reviews: [
      { user: "William T.", rating: 5, comment: "Saw a tiger on jeep safari! Much better than Chitwan." },
      { user: "Priya M.", rating: 5, comment: "Authentic jungle experience. Fewer tourists, more wildlife." },
      { user: "Hans K.", rating: 4, comment: "Karnali River area is beautiful. Saw Gangetic dolphins." }
    ],
    highlights: ["Tiger Spotting", "Elephant Safari", "Karnali River", "Tharu Culture"]
  },
  {
    id: 42,
    name: "Langtang National Park",
    category: "National Park & Wildlife",
    location: "Rasuwa, Nuwakot & Sindhupalchok Districts",
    description: "Nepal's first Himalayan national park, featuring diverse ecosystems from subtropical to alpine. Home to red pandas and Himalayan black bears.",
    howToReach: "Drive to Syabrubesi (7-8 hrs from Kathmandu), then trek.",
    duration: "5-10 days",
    bestSeason: "March-May and September-November",
    rating: 4.6,
    reviews: [
      { user: "Nina S.", rating: 5, comment: "Beautiful park with diverse landscapes. Saw a red panda!" },
      { user: "Robert J.", rating: 4, comment: "Great for trekking and wildlife. Langtang Valley is stunning." },
      { user: "Yang C.", rating: 5, comment: "Gosaikunda is the highlight. Sacred and beautiful." }
    ],
    highlights: ["Red Panda Habitat", "Gosaikunda Lakes", "Langtang Valley", "Tamang Culture"]
  },
  {
    id: 43,
    name: "Shey Phoksundo National Park",
    category: "National Park & Wildlife",
    location: "Dolpa District",
    description: "Nepal's largest national park, featuring the stunning Phoksundo Lake, snow leopards, and ancient Bon Buddhist culture.",
    howToReach: "Fly to Juphal via Nepalgunj, then trek to Ringmo.",
    duration: "5-10 days",
    bestSeason: "May-October",
    rating: 4.8,
    reviews: [
      { user: "Christine B.", rating: 5, comment: "The most beautiful national park. Phoksundo Lake is unreal." },
      { user: "Tsering D.", rating: 5, comment: "Bon culture is fascinating. Very different from other regions." },
      { user: "Mark L.", rating: 4, comment: "Remote and wild. True wilderness experience." }
    ],
    highlights: ["Phoksundo Lake", "Snow Leopard Habitat", "Bon Culture", "Waterfall"]
  },
  {
    id: 44,
    name: "Shivapuri Nagarjun National Park",
    category: "National Park & Wildlife",
    location: "Kathmandu District",
    description: "The nearest national park to Kathmandu, protecting the valley's watershed. Popular for day hikes and birdwatching.",
    howToReach: "12 km north of Kathmandu. Bus or taxi to Budhanilkantha or Sundarijal.",
    duration: "Half day to full day",
    bestSeason: "Year-round (best October-April)",
    rating: 4.3,
    reviews: [
      { user: "Anil G.", rating: 4, comment: "Perfect day hike from Kathmandu. Nagi Gompa is peaceful." },
      { user: "Sarah K.", rating: 4, comment: "Good for birdwatching. Saw many species." },
      { user: "Bikram S.", rating: 5, comment: "Escape the city chaos. Fresh air and forest trails." }
    ],
    highlights: ["Nagi Gompa", "Shivapuri Peak", "Birdwatching", "Watershed Forest"]
  },
  {
    id: 45,
    name: "Banke National Park",
    category: "National Park & Wildlife",
    location: "Banke District",
    description: "A relatively new national park protecting the tiger corridor between Nepal and India. Part of the Terai Arc Landscape.",
    howToReach: "Fly to Nepalgunj, then 1-hour drive. Or bus from Kathmandu (12 hrs).",
    duration: "1-2 days",
    bestSeason: "October to March",
    rating: 4.2,
    reviews: [
      { user: "Deepak R.", rating: 4, comment: "Newer park, less developed but good wildlife potential." },
      { user: "Emily F.", rating: 4, comment: "Combine with Bardia for comprehensive wildlife experience." },
      { user: "Ramesh B.", rating: 4, comment: "Important tiger conservation area." }
    ],
    highlights: ["Tiger Corridor", "Terai Forest", "Wildlife Conservation", "Birdwatching"]
  },
  {
    id: 46,
    name: "Shuklaphanta National Park",
    category: "National Park & Wildlife",
    location: "Kanchanpur District",
    description: "Known for having Nepal's largest herd of swamp deer and extensive grasslands. Formerly a royal hunting reserve.",
    howToReach: "Fly to Dhangadhi (1 hr), then 1-hour drive. Or bus from Kathmandu (16 hrs).",
    duration: "1-2 days",
    bestSeason: "October to March",
    rating: 4.3,
    reviews: [
      { user: "George H.", rating: 4, comment: "Huge grasslands like African savanna. Great for deer viewing." },
      { user: "Anita K.", rating: 4, comment: "Less visited park. Good for serious wildlife enthusiasts." },
      { user: "Sunil M.", rating: 5, comment: "Sunset over the grasslands is spectacular." }
    ],
    highlights: ["Swamp Deer Herds", "Grasslands", "Tiger Habitat", "Sunset Views"]
  },
  {
    id: 47,
    name: "Parsa National Park",
    category: "National Park & Wildlife",
    location: "Parsa, Makwanpur & Chitwan Districts",
    description: "Adjacent to Chitwan, this park offers similar wildlife experiences with fewer crowds. Home to tigers, elephants, and gharial crocodiles.",
    howToReach: "Near Hetauda. Bus from Kathmandu (5-6 hrs) to Hetauda, then local transport.",
    duration: "1-2 days",
    bestSeason: "October to March",
    rating: 4.1,
    reviews: [
      { user: "Manoj P.", rating: 4, comment: "Good alternative to crowded Chitwan. Similar wildlife." },
      { user: "Lisa T.", rating: 4, comment: "Churia hills add variety to the landscape." },
      { user: "Pravin S.", rating: 4, comment: "Wild elephants frequently spotted." }
    ],
    highlights: ["Wild Elephants", "Churia Hills", "Tiger Habitat", "Less Crowded"]
  },
  {
    id: 48,
    name: "Koshi Tappu Wildlife Reserve",
    category: "National Park & Wildlife",
    location: "Sunsari & Saptari Districts",
    description: "A Ramsar wetland site famous for birdwatching with over 400 species. Home to Nepal's last wild water buffalo population.",
    howToReach: "Fly to Biratnagar (40 mins), then 2-hour drive. Or bus from Kathmandu (10 hrs).",
    duration: "2-3 days",
    bestSeason: "October to March",
    rating: 4.5,
    reviews: [
      { user: "David M.", rating: 5, comment: "Birdwatcher's paradise! Saw over 100 species in 2 days." },
      { user: "Susan L.", rating: 4, comment: "Wild water buffalo are impressive. Boat safari is unique." },
      { user: "Bharat J.", rating: 5, comment: "Migratory birds in winter are spectacular." }
    ],
    highlights: ["Birdwatching", "Wild Water Buffalo", "Boat Safari", "Wetland Ecosystem"]
  },
  {
    id: 49,
    name: "Dhorpatan Hunting Reserve",
    category: "National Park & Wildlife",
    location: "Baglung, Myagdi & Rukum Districts",
    description: "Nepal's only hunting reserve, also open for trekking. Features alpine meadows and is home to blue sheep and snow leopards.",
    howToReach: "Trek from Beni or Tansen, or fly to Dolpa and trek.",
    duration: "5-10 days",
    bestSeason: "March-May and September-November",
    rating: 4.3,
    reviews: [
      { user: "Richard B.", rating: 4, comment: "Unique hunting reserve. Good for trekking too." },
      { user: "Mingma T.", rating: 5, comment: "Blue sheep hunting is regulated. Beautiful alpine scenery." },
      { user: "Paul S.", rating: 4, comment: "Remote and wild. Good for experienced trekkers." }
    ],
    highlights: ["Blue Sheep", "Hunting (Regulated)", "Alpine Meadows", "Dhorpatan Valley"]
  },
  {
    id: 50,
    name: "Rara National Park",
    category: "National Park & Wildlife",
    location: "Mugu District",
    description: "Surrounding Rara Lake, this park features blue pine forests, alpine meadows, and diverse wildlife including musk deer and Himalayan black bears.",
    howToReach: "Fly to Talcha via Nepalgunj, then trek or drive to lake.",
    duration: "3-5 days",
    bestSeason: "March-May and September-November",
    rating: 4.7,
    reviews: [
      { user: "Jennifer W.", rating: 5, comment: "The lake is the highlight but the park is beautiful too." },
      { user: "Tashi L.", rating: 5, comment: "Musk deer spotted! Very peaceful environment." },
      { user: "Kiran S.", rating: 4, comment: "Remote and pristine. True wilderness." }
    ],
    highlights: ["Rara Lake", "Blue Pine Forests", "Musk Deer", "Alpine Meadows"]
  },

  // ==========================================
  // CULTURAL & HISTORICAL SITES (10)
  // ==========================================
  {
    id: 51,
    name: "Tansen (Palpa)",
    category: "Cultural & Historical Site",
    location: "Palpa District",
    description: "A historic hill town with traditional Newari architecture, famous for Dhaka textiles, and offering panoramic mountain views.",
    howToReach: "Bus from Pokhara (5 hrs) or Kathmandu (10 hrs). Or drive via Siddhartha Highway.",
    duration: "1-2 days",
    bestSeason: "Year-round (best October-April)",
    rating: 4.5,
    reviews: [
      { user: "Maria G.", rating: 5, comment: "Charming old town. Rani Mahal is Nepal's Taj Mahal!" },
      { user: "Kamal S.", rating: 4, comment: "Great views from Shreenagar Hill. Dhaka shopping is good." },
      { user: "Emma B.", rating: 5, comment: "Authentic Newari culture without Kathmandu crowds." }
    ],
    highlights: ["Rani Mahal", "Shreenagar Hill", "Tansen Durbar", "Dhaka Weaving"]
  },
  {
    id: 52,
    name: "Bandipur",
    category: "Cultural & Historical Site",
    location: "Tanahun District",
    description: "A preserved hilltop town with 18th-century architecture, offering views of the Himalayas and Marsyangdi Valley.",
    howToReach: "2 km off Prithvi Highway, between Kathmandu and Pokhara. Bus or taxi.",
    duration: "1-2 days",
    bestSeason: "Year-round (best October-April)",
    rating: 4.6,
    reviews: [
      { user: "Lucas H.", rating: 5, comment: "Best preserved town in Nepal. Feels like time travel." },
      { user: "Anjali R.", rating: 5, comment: "No vehicles in town center. Peaceful and beautiful." },
      { user: "Peter K.", rating: 4, comment: "Great stop between Kathmandu and Pokhara." }
    ],
    highlights: ["Pedestrian Main Street", "Viewpoint", "Silkworm Farm", "Cave Temples"]
  },
  {
    id: 53,
    name: "Gorkha",
    category: "Cultural & Historical Site",
    location: "Gorkha District",
    description: "The ancestral home of the Shah dynasty and birthplace of King Prithvi Narayan Shah who unified Nepal. Features the historic Gorkha Durbar.",
    howToReach: "140 km from Kathmandu. Bus (5 hrs) or private vehicle.",
    duration: "1-2 days",
    bestSeason: "Year-round (best October-April)",
    rating: 4.4,
    reviews: [
      { user: "Rajan P.", rating: 5, comment: "Historic significance. Gorkha Durbar is impressive." },
      { user: "Sophie M.", rating: 4, comment: "Great views of Manaslu. Important historical site." },
      { user: "Bikash S.", rating: 4, comment: "The temple complex is beautiful. Steep climb though." }
    ],
    highlights: ["Gorkha Durbar", "Gorakhnath Temple", "Kalika Temple", "Manaslu Views"]
  },
  {
    id: 54,
    name: "Nuwakot Durbar",
    category: "Cultural & Historical Site",
    location: "Nuwakot District",
    description: "A historic seven-story palace complex built by King Prithvi Narayan Shah before conquering Kathmandu Valley.",
    howToReach: "75 km from Kathmandu. Bus (3-4 hrs) or private vehicle.",
    duration: "Half day to full day",
    bestSeason: "Year-round",
    rating: 4.3,
    reviews: [
      { user: "Hari K.", rating: 4, comment: "Historic palace with great valley views." },
      { user: "Lisa J.", rating: 4, comment: "Less visited than other durbars. Peaceful atmosphere." },
      { user: "Mohan D.", rating: 5, comment: "Seven-story palace is unique. Good for history buffs." }
    ],
    highlights: ["Seven-Story Palace", "Historic Significance", "Valley Views", "Bhairabi Temple"]
  },
  {
    id: 55,
    name: "Janakpur",
    category: "Cultural & Historical Site",
    location: "Dhanusa District",
    description: "An ancient city and center of Mithila culture, believed to be the birthplace of Goddess Sita and where she married Lord Rama.",
    howToReach: "Flight from Kathmandu (25 mins) or bus (8-10 hrs).",
    duration: "1-2 days",
    bestSeason: "Year-round (best during festivals)",
    rating: 4.4,
    reviews: [
      { user: "Sita R.", rating: 5, comment: "Sacred city for Hindus. Janaki Temple is beautiful." },
      { user: "Ahmed F.", rating: 4, comment: "Mithila art is unique and colorful." },
      { user: "Priya N.", rating: 5, comment: "Vivah Mandap is where Ram and Sita married. Very spiritual." }
    ],
    highlights: ["Janaki Temple", "Vivah Mandap", "Mithila Art", "Sacred Ponds"]
  },
  {
    id: 56,
    name: "Ilam",
    category: "Cultural & Historical Site",
    location: "Ilam District",
    description: "Nepal's tea capital with rolling tea gardens, pristine forests, and views of Kanchenjunga. Known as the 'Queen of Hills' of Nepal.",
    howToReach: "Flight to Bhadrapur then 3-hour drive, or bus from Kathmandu (16 hrs).",
    duration: "2-3 days",
    bestSeason: "Year-round (best October-November and March-April)",
    rating: 4.5,
    reviews: [
      { user: "Tenzing S.", rating: 5, comment: "Tea gardens are beautiful. Kanyam is the best spot." },
      { user: "Rachel B.", rating: 5, comment: "Darjeeling of Nepal! Less crowded and more authentic." },
      { user: "Deepak M.", rating: 4, comment: "Great for tea lovers. Antu Danda sunrise is spectacular." }
    ],
    highlights: ["Tea Gardens", "Kanyam", "Antu Danda", "Mai Pokhari"]
  },
  {
    id: 57,
    name: "Kirtipur",
    category: "Cultural & Historical Site",
    location: "Kathmandu District",
    description: "An ancient Newari town on a hill southwest of Kathmandu, known for its resistance against Prithvi Narayan Shah's invasion.",
    howToReach: "8 km from Kathmandu. Bus, taxi, or local transport (30 mins).",
    duration: "Half day",
    bestSeason: "Year-round",
    rating: 4.3,
    reviews: [
      { user: "Anita S.", rating: 4, comment: "Authentic Newari town without tourist crowds. Great food!" },
      { user: "James W.", rating: 4, comment: "Bagh Bhairab Temple is interesting. Good valley views." },
      { user: "Mina G.", rating: 5, comment: "Newari cuisine here is the best in Kathmandu Valley." }
    ],
    highlights: ["Bagh Bhairab Temple", "Newari Culture", "Valley Views", "Traditional Architecture"]
  },
  {
    id: 58,
    name: "Panauti",
    category: "Cultural & Historical Site",
    location: "Kavrepalanchok District",
    description: "A historic Newari town with well-preserved temples and a unique confluence of three rivers. Known for its medieval architecture.",
    howToReach: "30 km from Kathmandu. Bus or taxi (1.5 hrs).",
    duration: "Half day to full day",
    bestSeason: "Year-round",
    rating: 4.4,
    reviews: [
      { user: "Sarah L.", rating: 5, comment: "Hidden gem! Beautiful temples and peaceful atmosphere." },
      { user: "Bijay P.", rating: 4, comment: "Indreshwar Temple is one of the tallest in Nepal." },
      { user: "Emma T.", rating: 4, comment: "Great day trip from Kathmandu. Authentic Newari town." }
    ],
    highlights: ["Indreshwar Temple", "Triveni Ghat", "Newari Houses", "Panauti Museum"]
  },
  {
    id: 59,
    name: "Bungamati",
    category: "Cultural & Historical Site",
    location: "Lalitpur District",
    description: "A traditional Newari village known as the birthplace of Rato Machhindranath, the patron deity of rain. Famous for woodcarving.",
    howToReach: "10 km from Kathmandu. Bus or taxi (45 mins).",
    duration: "Half day",
    bestSeason: "Year-round",
    rating: 4.2,
    reviews: [
      { user: "David C.", rating: 4, comment: "Authentic village life. Woodcarvers at work are fascinating." },
      { user: "Sunita B.", rating: 4, comment: "Rato Machhindranath Temple is important culturally." },
      { user: "John M.", rating: 4, comment: "Good to combine with Khokana village visit." }
    ],
    highlights: ["Rato Machhindranath Temple", "Woodcarving", "Village Life", "Traditional Houses"]
  },
  {
    id: 60,
    name: "Khokana",
    category: "Cultural & Historical Site",
    location: "Lalitpur District",
    description: "A traditional Newari village famous for mustard oil production using traditional methods. UNESCO tentative heritage site.",
    howToReach: "8 km from Kathmandu, next to Bungamati. Bus or taxi.",
    duration: "Half day",
    bestSeason: "Year-round",
    rating: 4.2,
    reviews: [
      { user: "Priya H.", rating: 4, comment: "Unique oil pressing process. Like stepping back in time." },
      { user: "Michael R.", rating: 4, comment: "Interesting to see traditional methods still in use." },
      { user: "Anjali K.", rating: 4, comment: "Combine with Bungamati for a nice day trip." }
    ],
    highlights: ["Mustard Oil Production", "Traditional Village", "Shree Rudrayani Temple", "Local Culture"]
  },

  // ==========================================
  // ADVENTURE SPORTS DESTINATIONS (10)
  // ==========================================
  {
    id: 61,
    name: "Sarangkot Paragliding",
    category: "Adventure Sports",
    location: "Pokhara, Kaski District",
    description: "One of the world's top paragliding destinations, offering flights over Phewa Lake with stunning Annapurna range views.",
    howToReach: "Drive 30 mins from Pokhara Lakeside to Sarangkot launch site.",
    duration: "20-30 minutes flight",
    bestSeason: "September to May",
    rating: 4.8,
    reviews: [
      { user: "Jessica M.", rating: 5, comment: "Best paragliding in the world! Flew with eagles!" },
      { user: "Tom B.", rating: 5, comment: "Absolutely incredible views. Professional operators." },
      { user: "Yuki N.", rating: 5, comment: "Sunset flight was magical. Must do in Pokhara!" }
    ],
    highlights: ["Annapurna Views", "Phewa Lake Below", "Tandem Flight", "Sunrise/Sunset Options"]
  },
  {
    id: 62,
    name: "The Last Resort Bungee",
    category: "Adventure Sports",
    location: "Bhote Koshi River, Sindhupalchok",
    description: "Nepal's first bungee jumping site, located on a suspension bridge over the Bhote Koshi River gorge. 160m free fall.",
    howToReach: "3-hour drive from Kathmandu towards Tibet border.",
    duration: "Full day trip",
    bestSeason: "Year-round (best October-May)",
    rating: 4.7,
    reviews: [
      { user: "Alex R.", rating: 5, comment: "Scariest and most thrilling thing I've ever done!" },
      { user: "Lisa K.", rating: 5, comment: "Professional and safe. The canyon swing is also great!" },
      { user: "Marcus J.", rating: 4, comment: "Adrenaline rush like no other. Beautiful location." }
    ],
    highlights: ["160m Bungee Jump", "Canyon Swing", "River Gorge", "Overnight Resort"]
  },
  {
    id: 63,
    name: "Pokhara Zip Flyer",
    category: "Adventure Sports",
    location: "Pokhara, Kaski District",
    description: "One of the world's longest, steepest, and fastest zip lines. Offers a vertical drop of 600m over 1.8 km.",
    howToReach: "Located in Sarangkot area, 30 mins from Pokhara.",
    duration: "2 minutes ride",
    bestSeason: "Year-round",
    rating: 4.6,
    reviews: [
      { user: "Kevin L.", rating: 5, comment: "Insane speed! Views are incredible during the ride." },
      { user: "Sarah P.", rating: 5, comment: "Scary at first but absolutely exhilarating!" },
      { user: "Raj M.", rating: 4, comment: "Short but sweet. Great addition to paragliding." }
    ],
    highlights: ["1.8km Length", "600m Vertical Drop", "120km/h Speed", "Valley Views"]
  },
  {
    id: 64,
    name: "Trishuli River Rafting",
    category: "Adventure Sports",
    location: "Trishuli River, Rasuwa/Chitwan",
    description: "Nepal's most popular white-water rafting river, offering Class II-III rapids suitable for beginners and families.",
    howToReach: "3-hour drive from Kathmandu on Prithvi Highway.",
    duration: "Half day to 2 days",
    bestSeason: "September to May",
    rating: 4.5,
    reviews: [
      { user: "Mike S.", rating: 5, comment: "Perfect for first-timers. Great fun with good safety!" },
      { user: "Anna D.", rating: 4, comment: "Beautiful scenery along the river. Good rapids." },
      { user: "Chris B.", rating: 4, comment: "Combine with Chitwan trip. Convenient location." }
    ],
    highlights: ["Class II-III Rapids", "Scenic Valley", "Beach Camping", "Swimming Spots"]
  },
  {
    id: 65,
    name: "Bhote Koshi Rafting",
    category: "Adventure Sports",
    location: "Bhote Koshi River, Sindhupalchok",
    description: "One of the steepest rivers rafted commercially in Nepal, offering Class IV-V rapids for adrenaline seekers.",
    howToReach: "3-hour drive from Kathmandu towards Tibet border.",
    duration: "Half day to 2 days",
    bestSeason: "September to November, March to May",
    rating: 4.6,
    reviews: [
      { user: "Dave R.", rating: 5, comment: "Intense rapids! Not for the faint-hearted." },
      { user: "Laura M.", rating: 5, comment: "Best white water in Nepal. Professional guides." },
      { user: "Steve K.", rating: 4, comment: "Extreme adventure. Previous rafting experience helps." }
    ],
    highlights: ["Class IV-V Rapids", "Steep Gradient", "Gorge Scenery", "Extreme Adventure"]
  },
  {
    id: 66,
    name: "Pokhara Ultralight Flight",
    category: "Adventure Sports",
    location: "Pokhara, Kaski District",
    description: "Fly in a microlight aircraft over Pokhara Valley with unparalleled views of the Annapurna range and Phewa Lake.",
    howToReach: "Pokhara Airport or designated airstrip near Lakeside.",
    duration: "15-90 minutes options",
    bestSeason: "September to May",
    rating: 4.7,
    reviews: [
      { user: "Helen B.", rating: 5, comment: "Flew close to Machhapuchhre! Unbelievable experience." },
      { user: "Peter S.", rating: 5, comment: "Better than paragliding for photography. Stable flight." },
      { user: "Nina G.", rating: 4, comment: "Pricey but worth it for the views." }
    ],
    highlights: ["Annapurna Range", "Machhapuchhre Close-up", "Open Cockpit", "Professional Pilots"]
  },
  {
    id: 67,
    name: "Pokhara Skydiving",
    category: "Adventure Sports",
    location: "Pokhara, Kaski District",
    description: "Tandem skydiving with views of the Himalayas and Phewa Lake. One of the most scenic skydiving locations in the world.",
    howToReach: "Pokhara Airport or designated drop zones.",
    duration: "Half day experience",
    bestSeason: "November to April",
    rating: 4.8,
    reviews: [
      { user: "Jason T.", rating: 5, comment: "Jumping with Annapurna in background - unbeatable!" },
      { user: "Monica R.", rating: 5, comment: "Most incredible experience of my life. Views are insane!" },
      { user: "Ali K.", rating: 5, comment: "World-class instructors. Felt completely safe." }
    ],
    highlights: ["Himalayan Views", "Phewa Lake Below", "Tandem Jump", "Video/Photo Package"]
  },
  {
    id: 68,
    name: "Hattiban Rock Climbing",
    category: "Adventure Sports",
    location: "Lalitpur District",
    description: "A popular rock climbing destination near Kathmandu with bolted routes for all skill levels.",
    howToReach: "30 mins drive from Kathmandu to Hattiban Resort area.",
    duration: "Half day to full day",
    bestSeason: "Year-round (best October-April)",
    rating: 4.4,
    reviews: [
      { user: "Eric M.", rating: 4, comment: "Good variety of routes. Beautiful forest setting." },
      { user: "Sophie L.", rating: 5, comment: "Great for beginners. Instructors are patient." },
      { user: "Ravi K.", rating: 4, comment: "Convenient location for Kathmandu residents." }
    ],
    highlights: ["Bolted Routes", "All Skill Levels", "Forest Setting", "Equipment Rental"]
  },
  {
    id: 69,
    name: "Nagarjun Rock Climbing",
    category: "Adventure Sports",
    location: "Kathmandu District",
    description: "Rock climbing at Nagarjun Forest near Balaju, offering various routes with Kathmandu Valley views.",
    howToReach: "30 mins from Thamel to Balaju, then hike to climbing site.",
    duration: "Half day",
    bestSeason: "Year-round",
    rating: 4.3,
    reviews: [
      { user: "Daniel K.", rating: 4, comment: "Good for a quick climbing session near the city." },
      { user: "Maya S.", rating: 4, comment: "Nice views while climbing. Various difficulty levels." },
      { user: "Bikram J.", rating: 4, comment: "Combine with Nagarjun hike for full day activity." }
    ],
    highlights: ["Various Routes", "Valley Views", "Close to City", "Forest Setting"]
  },
  {
    id: 70,
    name: "Pokhara Hot Air Balloon",
    category: "Adventure Sports",
    location: "Pokhara, Kaski District",
    description: "Hot air balloon rides over Pokhara Valley with sunrise views of the Annapurna range and surrounding mountains.",
    howToReach: "Launch site near Lakeside or designated fields.",
    duration: "1-hour flight",
    bestSeason: "November to April",
    rating: 4.5,
    reviews: [
      { user: "Victoria H.", rating: 5, comment: "Sunrise balloon ride was magical. Peaceful and beautiful." },
      { user: "Samir P.", rating: 4, comment: "Great alternative to paragliding. More relaxed." },
      { user: "Emma L.", rating: 5, comment: "Champagne breakfast after landing. Classy experience!" }
    ],
    highlights: ["Sunrise Flight", "Annapurna Views", "Champagne Breakfast", "Peaceful Experience"]
  },

  // ==========================================
  // HILL STATIONS & VIEWPOINTS (10)
  // ==========================================
  {
    id: 71,
    name: "Nagarkot",
    category: "Hill Station & Viewpoint",
    location: "Bhaktapur District",
    description: "A popular hill station 32 km from Kathmandu, famous for sunrise views of the Himalayas including Mount Everest on clear days.",
    howToReach: "1.5-hour drive from Kathmandu. Regular buses and taxis available.",
    duration: "Overnight or day trip",
    bestSeason: "Year-round (best October-April)",
    rating: 4.4,
    reviews: [
      { user: "Jennifer L.", rating: 5, comment: "Saw Everest at sunrise! Unforgettable moment." },
      { user: "Ahmed H.", rating: 4, comment: "Can be cloudy but worth the gamble. Nice resorts." },
      { user: "Sakura T.", rating: 4, comment: "Good escape from Kathmandu. Fresh mountain air." }
    ],
    highlights: ["Sunrise Views", "Everest View", "Hiking Trails", "Mountain Resorts"]
  },
  {
    id: 72,
    name: "Dhulikhel",
    category: "Hill Station & Viewpoint",
    location: "Kavrepalanchok District",
    description: "A historic town with traditional Newari architecture, offering panoramic Himalayan views and serving as a starting point for hikes to Namobuddha.",
    howToReach: "30 km from Kathmandu. Bus or taxi (1 hr).",
    duration: "Overnight or day trip",
    bestSeason: "Year-round (best October-April)",
    rating: 4.5,
    reviews: [
      { user: "Robert F.", rating: 5, comment: "Better than Nagarkot for mountain views. Less crowded." },
      { user: "Mei L.", rating: 4, comment: "Old town is charming. Namobuddha hike is recommended." },
      { user: "Kumar S.", rating: 5, comment: "Best place near Kathmandu for clear mountain views." }
    ],
    highlights: ["Himalayan Panorama", "Old Town", "Namobuddha Hike", "Resorts"]
  },
  {
    id: 73,
    name: "Daman",
    category: "Hill Station & Viewpoint",
    location: "Makwanpur District",
    description: "A hill station on the Tribhuvan Highway offering one of the widest panoramic views of the Himalayas from Dhaulagiri to Everest.",
    howToReach: "80 km from Kathmandu on the highway to Hetauda. Bus or taxi (3 hrs).",
    duration: "Overnight or day trip",
    bestSeason: "Year-round (best October-April)",
    rating: 4.3,
    reviews: [
      { user: "Thomas B.", rating: 5, comment: "Widest mountain panorama I've seen. 360-degree views!" },
      { user: "Priya N.", rating: 4, comment: "Less developed but views are spectacular." },
      { user: "Hans M.", rating: 4, comment: "Good stop on the way to Chitwan or Lumbini." }
    ],
    highlights: ["360-Degree Panorama", "View Tower", "Rhododendron Forests", "Peaceful"]
  },
  {
    id: 74,
    name: "Kakani",
    category: "Hill Station & Viewpoint",
    location: "Nuwakot District",
    description: "A hill station famous for strawberry farming and views of the Ganesh Himal range. Less touristy than Nagarkot.",
    howToReach: "25 km from Kathmandu. Drive via Trishuli Road (1.5 hrs).",
    duration: "Day trip or overnight",
    bestSeason: "Year-round (best October-April)",
    rating: 4.2,
    reviews: [
      { user: "Anita R.", rating: 4, comment: "Fresh strawberries in season! Nice local atmosphere." },
      { user: "David K.", rating: 4, comment: "Good for a quiet day trip. Less commercial than Nagarkot." },
      { user: "Sunita G.", rating: 4, comment: "Ganesh Himal views are beautiful. Good hiking trails." }
    ],
    highlights: ["Strawberry Farms", "Ganesh Himal Views", "Local Village", "Hiking"]
  },
  {
    id: 75,
    name: "Shivapuri Hill",
    category: "Hill Station & Viewpoint",
    location: "Kathmandu District",
    description: "The second highest hill around Kathmandu Valley (2,732m), offering hiking trails and views of the valley and mountains.",
    howToReach: "12 km north of Kathmandu. Drive to Budhanilkantha or Sundarijal.",
    duration: "Half day to full day",
    bestSeason: "Year-round",
    rating: 4.3,
    reviews: [
      { user: "Michael S.", rating: 4, comment: "Good workout hike. Nagi Gompa is peaceful." },
      { user: "Lisa T.", rating: 4, comment: "Fresh air escape from Kathmandu. Forest trails." },
      { user: "Rajesh M.", rating: 5, comment: "Baghdwar is the source of Bagmati River. Sacred spot." }
    ],
    highlights: ["Shivapuri Peak", "Nagi Gompa", "Baghdwar", "Forest Trails"]
  },
  {
    id: 76,
    name: "Phulchowki",
    category: "Hill Station & Viewpoint",
    location: "Lalitpur District",
    description: "The highest hill around Kathmandu Valley (2,782m), famous for birdwatching and botanical diversity.",
    howToReach: "20 km from Kathmandu. Drive to Godavari, then hike or drive up.",
    duration: "Half day to full day",
    bestSeason: "Year-round (best March-April for flowers)",
    rating: 4.2,
    reviews: [
      { user: "David B.", rating: 5, comment: "Best birdwatching near Kathmandu. Many species." },
      { user: "Emma J.", rating: 4, comment: "Rhododendrons in spring are beautiful." },
      { user: "Kiran P.", rating: 4, comment: "Can drive to top or hike from Godavari." }
    ],
    highlights: ["Highest Valley Hill", "Birdwatching", "Botanical Garden", "Rhododendrons"]
  },
  {
    id: 77,
    name: "Champadevi",
    category: "Hill Station & Viewpoint",
    location: "Kathmandu District",
    description: "A hill (2,285m) with a Buddhist monastery and Hindu shrine, offering views of Kathmandu Valley and the Himalayas.",
    howToReach: "Drive to Pharping, then 2-hour hike to top.",
    duration: "Half day",
    bestSeason: "Year-round",
    rating: 4.1,
    reviews: [
      { user: "Sarah M.", rating: 4, comment: "Nice day hike from Kathmandu. Good exercise." },
      { user: "Bikash S.", rating: 4, comment: "Champadevi temple is important locally." },
      { user: "Nina P.", rating: 4, comment: "Combine with Pharping and Dakshinkali visit." }
    ],
    highlights: ["Valley Views", "Champadevi Temple", "Day Hike", "Pharping Area"]
  },
  {
    id: 78,
    name: "Pokhara World Peace Pagoda",
    category: "Hill Station & Viewpoint",
    location: "Pokhara, Kaski District",
    description: "A Buddhist stupa on a hilltop overlooking Phewa Lake and the Annapurna range. Built by Japanese Buddhist monks.",
    howToReach: "Boat across Phewa Lake then hike up, or drive around (30 mins).",
    duration: "Half day",
    bestSeason: "Year-round",
    rating: 4.5,
    reviews: [
      { user: "James L.", rating: 5, comment: "Peaceful place with stunning views of lake and mountains." },
      { user: "Yuki T.", rating: 5, comment: "Beautiful pagoda. Sunset views are spectacular." },
      { user: "Maria G.", rating: 4, comment: "Hike up from lake is nice. Can take taxi too." }
    ],
    highlights: ["Pagoda Views", "Phewa Lake Vista", "Annapurna Views", "Peaceful Atmosphere"]
  },
  {
    id: 79,
    name: "Sarangkot Viewpoint",
    category: "Hill Station & Viewpoint",
    location: "Pokhara, Kaski District",
    description: "A hilltop viewpoint famous for sunrise over the Annapurna range and paragliding takeoff point.",
    howToReach: "30-min drive from Pokhara, or 2-hour hike up.",
    duration: "2-3 hours (sunrise visit)",
    bestSeason: "Year-round (best October-April)",
    rating: 4.6,
    reviews: [
      { user: "Peter S.", rating: 5, comment: "Sunrise over Annapurna is breathtaking. Must-do in Pokhara." },
      { user: "Anjali K.", rating: 5, comment: "Early wake-up worth it. Golden mountains are magical." },
      { user: "Tom H.", rating: 4, comment: "Can be crowded at sunrise. Go early for good spot." }
    ],
    highlights: ["Sunrise Views", "Annapurna Range", "Paragliding Takeoff", "Machhapuchhre Views"]
  },
  {
    id: 80,
    name: "Antu Danda",
    category: "Hill Station & Viewpoint",
    location: "Ilam District",
    description: "A viewpoint in eastern Nepal famous for sunrise views over the tea gardens and Kanchenjunga range.",
    howToReach: "Drive from Ilam town (1 hr) or trek from Fikkal.",
    duration: "Half day",
    bestSeason: "October to April",
    rating: 4.5,
    reviews: [
      { user: "Ramesh S.", rating: 5, comment: "Best sunrise in eastern Nepal. Kanchenjunga glows!" },
      { user: "Lisa M.", rating: 5, comment: "Tea gardens below and mountains above. Perfect!" },
      { user: "Bikash T.", rating: 4, comment: "Less known viewpoint. Authentic experience." }
    ],
    highlights: ["Sunrise Views", "Kanchenjunga Range", "Tea Gardens", "Eastern Nepal"]
  },

  // ==========================================
  // RELIGIOUS & PILGRIMAGE SITES (10)
  // ==========================================
  {
    id: 81,
    name: "Muktinath Temple",
    category: "Religious & Pilgrimage Site",
    location: "Mustang District",
    description: "A sacred site for both Hindus and Buddhists at 3,710m. Famous for 108 water spouts and eternal flame.",
    howToReach: "Fly to Jomsom then jeep/trek, or trek Annapurna Circuit.",
    duration: "1-2 days",
    bestSeason: "Year-round (best March-May, September-November)",
    rating: 4.7,
    reviews: [
      { user: "Sita M.", rating: 5, comment: "Sacred pilgrimage. The 108 spouts are spiritually cleansing." },
      { user: "John P.", rating: 5, comment: "Amazing location. Eternal flame is fascinating." },
      { user: "Tenzin W.", rating: 5, comment: "Important for both Hindus and Buddhists. Unique." }
    ],
    highlights: ["108 Water Spouts", "Eternal Flame", "Sacred Site", "Mountain Location"]
  },
  {
    id: 82,
    name: "Gosaikunda",
    category: "Religious & Pilgrimage Site",
    location: "Rasuwa District",
    description: "An alpine lake at 4,380m, sacred to Lord Shiva. Thousands of pilgrims visit during Janai Purnima festival.",
    howToReach: "Drive to Dhunche, then 2-day trek.",
    duration: "3-5 days",
    bestSeason: "March-May and September-November",
    rating: 4.7,
    reviews: [
      { user: "Hari K.", rating: 5, comment: "Holy lake of Lord Shiva. Very powerful spiritually." },
      { user: "Emma S.", rating: 4, comment: "Challenging trek but sacred atmosphere." },
      { user: "Maya D.", rating: 5, comment: "Janai Purnima festival is an incredible experience." }
    ],
    highlights: ["Sacred Lake", "Shiva Pilgrimage", "Janai Purnima", "Laurebina Pass"]
  },
  {
    id: 83,
    name: "Manakamana Temple",
    category: "Religious & Pilgrimage Site",
    location: "Gorkha District",
    description: "A sacred temple dedicated to Goddess Bhagwati, believed to fulfill wishes. Accessible by cable car.",
    howToReach: "Cable car from Kurintar on Prithvi Highway (10 mins).",
    duration: "Half day",
    bestSeason: "Year-round",
    rating: 4.4,
    reviews: [
      { user: "Sunita B.", rating: 5, comment: "My wishes were fulfilled! Very powerful goddess." },
      { user: "David R.", rating: 4, comment: "Cable car ride is scenic. Temple is historic." },
      { user: "Priya L.", rating: 4, comment: "Can be crowded on weekends. Go early." }
    ],
    highlights: ["Cable Car Ride", "Wish-Fulfilling Goddess", "Trishuli Views", "Historic Temple"]
  },
  {
    id: 84,
    name: "Dakshinkali Temple",
    category: "Religious & Pilgrimage Site",
    location: "Kathmandu District",
    description: "A temple dedicated to Goddess Kali, known for animal sacrifices on Tuesdays and Saturdays.",
    howToReach: "22 km from Kathmandu. Bus or taxi (1 hr).",
    duration: "Half day",
    bestSeason: "Year-round",
    rating: 4.2,
    reviews: [
      { user: "Rajesh M.", rating: 4, comment: "Powerful goddess. Important for tantric practices." },
      { user: "Lisa T.", rating: 4, comment: "Intense atmosphere. Not for sensitive visitors." },
      { user: "Anil K.", rating: 4, comment: "Combine with Pharping and Chobar visit." }
    ],
    highlights: ["Goddess Kali", "Tantric Site", "Ravine Setting", "Pharping Nearby"]
  },
  {
    id: 85,
    name: "Namobuddha",
    category: "Religious & Pilgrimage Site",
    location: "Kavrepalanchok District",
    description: "An important Buddhist pilgrimage site where Buddha is believed to have offered his body to a starving tigress.",
    howToReach: "40 km from Kathmandu. Drive or hike from Dhulikhel.",
    duration: "Half day to full day",
    bestSeason: "Year-round",
    rating: 4.5,
    reviews: [
      { user: "Tashi L.", rating: 5, comment: "Very important Buddhist site. Stupa is beautiful." },
      { user: "Sarah J.", rating: 5, comment: "Peaceful monastery. The legend is moving." },
      { user: "Mingma S.", rating: 4, comment: "Combine with Dhulikhel for a nice day trip." }
    ],
    highlights: ["Stupa & Monastery", "Buddhist Legend", "Panoramic Views", "Monk Interactions"]
  },
  {
    id: 86,
    name: "Pathivara Temple",
    category: "Religious & Pilgrimage Site",
    location: "Taplejung District",
    description: "A sacred temple at 3,794m dedicated to Goddess Pathivara, offering views of Kanchenjunga and surrounding peaks.",
    howToReach: "Drive from Taplejung or Phungling (1 day trek).",
    duration: "1-2 days",
    bestSeason: "Year-round (best March-May, September-November)",
    rating: 4.6,
    reviews: [
      { user: "Sarita G.", rating: 5, comment: "Goddess Pathivara fulfills wishes. Very powerful!" },
      { user: "Hans B.", rating: 5, comment: "Kanchenjunga views from temple are spectacular." },
      { user: "Doma S.", rating: 4, comment: "Steep climb but spiritually rewarding." }
    ],
    highlights: ["Goddess Pathivara", "Kanchenjunga Views", "Pilgrimage Trek", "Mountain Temple"]
  },
  {
    id: 87,
    name: "Halesi Mahadev",
    category: "Religious & Pilgrimage Site",
    location: "Khotang District",
    description: "A sacred cave temple dedicated to Lord Shiva, also important in Buddhist tradition. Known as the 'Pashupatinath of the East'.",
    howToReach: "Flight to Lamidanda or trek from Ghurmi. Or drive from Diktel.",
    duration: "1-2 days",
    bestSeason: "Year-round",
    rating: 4.4,
    reviews: [
      { user: "Shiva R.", rating: 5, comment: "Pashupatinath of the East. Very powerful lingam." },
      { user: "Emily T.", rating: 4, comment: "Interesting cave temple. Both Hindu and Buddhist significance." },
      { user: "Bikram J.", rating: 4, comment: "Remote but worth the journey." }
    ],
    highlights: ["Cave Temple", "Shiva Lingam", "Buddhist Significance", "Remote Location"]
  },
  {
    id: 88,
    name: "Kalinchowk Bhagwati",
    category: "Religious & Pilgrimage Site",
    location: "Dolakha District",
    description: "A temple at 3,842m dedicated to Goddess Bhagwati, popular for winter pilgrimage when the area is covered in snow.",
    howToReach: "Drive to Kuri Village, then hike or cable car to temple.",
    duration: "1-2 days",
    bestSeason: "Year-round (popular in winter for snow)",
    rating: 4.5,
    reviews: [
      { user: "Anita S.", rating: 5, comment: "Snow pilgrimage in winter is magical. Goddess is powerful." },
      { user: "Rohit M.", rating: 4, comment: "New cable car makes it easier. Great mountain views." },
      { user: "Lisa K.", rating: 5, comment: "Gaurishankar views are spectacular from here." }
    ],
    highlights: ["Snow Pilgrimage", "Goddess Bhagwati", "Gaurishankar Views", "Cable Car"]
  },
  {
    id: 89,
    name: "Baraha Chhetra",
    category: "Religious & Pilgrimage Site",
    location: "Sunsari District",
    description: "A sacred Hindu site at the confluence of the Saptakoshi and Koka rivers, dedicated to Lord Vishnu's Varaha avatar.",
    howToReach: "20 km from Dharan. Bus or taxi from Itahari or Dharan.",
    duration: "Half day",
    bestSeason: "Year-round (especially during festivals)",
    rating: 4.1,
    reviews: [
      { user: "Mohan P.", rating: 4, comment: "Important pilgrimage site in eastern Nepal." },
      { user: "Sunita D.", rating: 4, comment: "Confluence of rivers is spiritually significant." },
      { user: "John B.", rating: 4, comment: "Good to combine with Koshi Tappu visit." }
    ],
    highlights: ["River Confluence", "Varaha Temple", "Eastern Pilgrimage", "Koshi River"]
  },
  {
    id: 90,
    name: "Swargadwari",
    category: "Religious & Pilgrimage Site",
    location: "Pyuthan District",
    description: "A hilltop temple complex believed to be the gateway to heaven. Features fire that never extinguishes.",
    howToReach: "Drive from Pyuthan or trek from Bhalubang.",
    duration: "1-2 days",
    bestSeason: "Year-round",
    rating: 4.2,
    reviews: [
      { user: "Hari L.", rating: 5, comment: "Gateway to heaven. Eternal fire is miraculous." },
      { user: "Emma R.", rating: 4, comment: "Remote pilgrimage site. Beautiful hilltop views." },
      { user: "Dipak S.", rating: 4, comment: "Important for mid-western Nepal devotees." }
    ],
    highlights: ["Gateway to Heaven", "Eternal Fire", "Hilltop Views", "Remote Pilgrimage"]
  },

  // ==========================================
  // CAVES & NATURAL WONDERS (5)
  // ==========================================
  {
    id: 91,
    name: "Gupteshwor Mahadev Cave",
    category: "Cave & Natural Wonder",
    location: "Pokhara, Kaski District",
    description: "A sacred cave with a natural Shiva lingam and waterfall inside. Located opposite Davis Falls.",
    howToReach: "Walking distance from Davis Falls, Pokhara.",
    duration: "1 hour",
    bestSeason: "Year-round",
    rating: 4.3,
    reviews: [
      { user: "Rajesh K.", rating: 4, comment: "Sacred cave with impressive formations." },
      { user: "Sophie M.", rating: 4, comment: "Waterfall inside the cave is unique." },
      { user: "Anil B.", rating: 4, comment: "Combine with Davis Falls visit." }
    ],
    highlights: ["Natural Shiva Lingam", "Waterfall Inside", "Cave Formations", "Sacred Site"]
  },
  {
    id: 92,
    name: "Mahendra Cave",
    category: "Cave & Natural Wonder",
    location: "Pokhara, Kaski District",
    description: "A large limestone cave with stalactites and stalagmites. One of the largest caves in Nepal.",
    howToReach: "North of Pokhara city. Taxi or local bus (30 mins).",
    duration: "1-2 hours",
    bestSeason: "Year-round",
    rating: 4.1,
    reviews: [
      { user: "David L.", rating: 4, comment: "Interesting cave formations. Bring a flashlight." },
      { user: "Maya T.", rating: 4, comment: "Bat cave nearby is also interesting." },
      { user: "Kiran S.", rating: 4, comment: "Good for a short excursion from Pokhara." }
    ],
    highlights: ["Limestone Formations", "Stalactites", "Stalagmites", "Bat Cave Nearby"]
  },
  {
    id: 93,
    name: "Siddha Gufa (Cave)",
    category: "Cave & Natural Wonder",
    location: "Bandipur, Tanahun District",
    description: "Nepal's largest cave with impressive stalactites and stalagmites. Located near Bandipur.",
    howToReach: "2-hour hike from Bandipur town.",
    duration: "Half day",
    bestSeason: "Year-round",
    rating: 4.2,
    reviews: [
      { user: "Peter H.", rating: 4, comment: "Largest cave in Nepal. Impressive interior." },
      { user: "Anjali R.", rating: 4, comment: "Hike from Bandipur is scenic. Cave is mysterious." },
      { user: "Tom S.", rating: 4, comment: "Need flashlight. Local guide recommended." }
    ],
    highlights: ["Largest Cave in Nepal", "Stalactites", "Stalagmites", "Bandipur Hike"]
  },
  {
    id: 94,
    name: "Davis Falls (Patale Chhango)",
    category: "Cave & Natural Wonder",
    location: "Pokhara, Kaski District",
    description: "A unique waterfall that flows directly into an underground tunnel. Named after a Swiss tourist who drowned here.",
    howToReach: "Walking distance from Lakeside, Pokhara.",
    duration: "30 minutes",
    bestSeason: "Year-round (best in monsoon)",
    rating: 4.2,
    reviews: [
      { user: "Jennifer L.", rating: 4, comment: "Unique waterfall that disappears underground." },
      { user: "Ramesh B.", rating: 4, comment: "More impressive during monsoon season." },
      { user: "Lisa M.", rating: 4, comment: "Combine with Gupteshwor Cave visit." }
    ],
    highlights: ["Underground Waterfall", "Monsoon Power", "Gupteshwor Cave", "Pokhara Landmark"]
  },
  {
    id: 95,
    name: "Tilaurakot Archaeological Site",
    category: "Cave & Natural Wonder",
    location: "Kapilvastu District",
    description: "The ancient capital of the Shakya kingdom where Prince Siddhartha (Buddha) spent his early life.",
    howToReach: "25 km from Lumbini. Bus or taxi (1 hr).",
    duration: "Half day",
    bestSeason: "Year-round",
    rating: 4.3,
    reviews: [
      { user: "Wei C.", rating: 5, comment: "Buddha's childhood palace ruins. Very moving." },
      { user: "Sarah J.", rating: 4, comment: "Important archaeological site. Good museum." },
      { user: "Mingma T.", rating: 4, comment: "Combine with Lumbini visit for complete experience." }
    ],
    highlights: ["Ancient Palace Ruins", "Buddha's Childhood", "Archaeological Museum", "Historical Site"]
  },

  // ==========================================
  // OFF-THE-BEATEN-PATH DESTINATIONS (5)
  // ==========================================
  {
    id: 96,
    name: "Lim Valley",
    category: "Off-the-Beaten-Path",
    location: "Humla District",
    description: "A remote valley on the Nepal-Tibet border with ancient Tibetan villages, monasteries, and unspoiled culture.",
    howToReach: "Fly to Simikot, then 4-5 day trek to Limi Valley.",
    duration: "10-18 days",
    bestSeason: "May-October",
    rating: 4.7,
    reviews: [
      { user: "Thomas H.", rating: 5, comment: "Most remote trek in Nepal. Authentic Tibetan culture." },
      { user: "Dolma S.", rating: 5, comment: "Halji and Til villages are like ancient Tibet." },
      { user: "Markus B.", rating: 4, comment: "Very challenging but culturally rewarding." }
    ],
    highlights: ["Tibetan Villages", "Ancient Monasteries", "Nyalu Pass", "Unspoiled Culture"]
  },
  {
    id: 97,
    name: "Ruby Valley",
    category: "Off-the-Beaten-Path",
    location: "Dhading & Rasuwa Districts",
    description: "A hidden valley between Langtang and Manaslu, featuring Tamang villages, hot springs, and Ganesh Himal views.",
    howToReach: "Drive to Syabrubesi or trek from Dhading Besi.",
    duration: "5-7 days",
    bestSeason: "March-May and September-November",
    rating: 4.4,
    reviews: [
      { user: "Nina P.", rating: 5, comment: "Hidden gem! Few tourists, authentic villages." },
      { user: "Rajesh M.", rating: 4, comment: "Hot springs are great. Ganesh Himal views beautiful." },
      { user: "Sophie L.", rating: 4, comment: "Good alternative to crowded Langtang." }
    ],
    highlights: ["Tamang Villages", "Hot Springs", "Ganesh Himal", "Pangsang Pass"]
  },
  {
    id: 98,
    name: "Makalu Barun National Park",
    category: "Off-the-Beaten-Path",
    location: "Sankhuwasabha District",
    description: "A remote national park with diverse ecosystems, rare wildlife, and stunning views of Makalu.",
    howToReach: "Fly to Tumlingtar, then trek through Arun Valley.",
    duration: "10-18 days",
    bestSeason: "March-May and September-November",
    rating: 4.6,
    reviews: [
      { user: "Erik S.", rating: 5, comment: "Incredible biodiversity. Rare orchids and wildlife." },
      { user: "Yang C.", rating: 5, comment: "Barun Valley is one of Nepal's best kept secrets." },
      { user: "Hannah B.", rating: 4, comment: "Very remote. True wilderness experience." }
    ],
    highlights: ["Makalu Views", "Barun Valley", "Rare Wildlife", "Orchid Forests"]
  },
  {
    id: 99,
    name: "Api Nampa Conservation Area",
    category: "Off-the-Beaten-Path",
    location: "Darchula District",
    description: "A remote protected area in far-west Nepal, featuring Api (7,132m) and Nampa peaks, and unique Byansi culture.",
    howToReach: "Fly to Dipayal or Mahendranagar, then long trek.",
    duration: "10-15 days",
    bestSeason: "March-May and September-November",
    rating: 4.5,
    reviews: [
      { user: "Lars K.", rating: 5, comment: "Most remote area in Nepal. Api peak is stunning." },
      { user: "Sita M.", rating: 4, comment: "Byansi culture is unique. Very few visitors." },
      { user: "Peter N.", rating: 4, comment: "Extremely challenging but rewarding trek." }
    ],
    highlights: ["Api Peak", "Nampa Peak", "Byansi Culture", "Remote Wilderness"]
  },
  {
    id: 100,
    name: "Kanchenjunga Conservation Area",
    category: "Off-the-Beaten-Path",
    location: "Taplejung District",
    description: "A vast protected area surrounding the world's third highest peak, featuring diverse ecosystems and rich cultural heritage.",
    howToReach: "Fly to Bhadrapur or Suketar, then trek.",
    duration: "15-25 days",
    bestSeason: "March-May and September-November",
    rating: 4.8,
    reviews: [
      { user: "Marcus J.", rating: 5, comment: "The ultimate off-beaten-path trek. Kanchenjunga is majestic." },
      { user: "Dawa T.", rating: 5, comment: "Both north and south base camps are incredible." },
      { user: "Elena R.", rating: 5, comment: "Remote, challenging, and absolutely unforgettable." }
    ],
    highlights: ["Kanchenjunga Base Camps", "Yalung Glacier", "Remote Villages", "Conservation Success"]
  }
];

// Export the places array
if (typeof module !== 'undefined' && module.exports) {
  module.exports = places;
}

// Also make available for ES modules
if (typeof exports !== 'undefined') {
  exports.places = places;
  exports.default = places;
}
