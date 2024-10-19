// description: This file contains all the constants that are used in the project.
const cities = {
  "Kibbutz Hagoshrim": "Kibbutz Hagoshrim",
  "Kibbutz Kfar Blum": "Kibbutz Kfar Blum",
  Tveria: "Tveria",
  "Marom Golan": "Marom Golan",
  Evron: "Evron",
  "Maalot Tarshiha": "Maalot Tarshiha",
  Akko: "Akko",
  Nahariya: "Nahariya",
  Haifa: "Haifa",
  "Beit Ashita": "Beit Ashita",
  "Tel-Aviv": "Tel-Aviv",
  "Kibutz Shfayim": "Kibutz Shfayim",
  "Rishon Lezion": "Rishon Lezion",
  "Kfar Adumim": "Kfar Adumim",
  "Bear Tuvia": "Bear Tuvia",
  Beeri: "Beeri",
  Eilat: "Eilat",
  Ashdod: "Ashdod",
  "Ben Shemen": "Ben Shemen",
  Jerusalem: "Jerusalem",
  Modiin: "Modiin",
  Rehovot: "Rehovot",
  Ashdod: "Ashdod",
  "Rishon Letzion": "Rishon Letzion",
  "Rosh Pina": "Rosh Pina",
};


const categories = {
  Atv: "Atv And RZR",
  Crossbow: "Crossbow",
  Climbing: "Climbing",
  Kayaks: "Kayaks",
  Diving: "Diving",
  Skydiving: "Skydiving",
  Karting: "Karting",
  Park: "Park",
  Bike: "Bike",
};

const areas = {
  Center: "Center",
  North: "North",
  South: "South",
};

const iconOnMap = {
  Atv: "./icons/atv.png",
  Crossbow: "./icons/bow-and-arrow.png",
  Climbing: "./icons/climbing.png",
  Kayaks: "./icons/kayaking.png",
  Diving: "./icons/diving.png",
  Skydiving: "./icons/skydiving.png",
  Karting: "./icons/karting.png",
  Park: "./icons/park.png",
  Bike: "./icons/bike.png",
};
const adventures = [
  {
    id: 1,
    name: "Hagoshrim kayaks",
    location: "Kibbutz Hagoshrim",
    icon: iconOnMap.Kayaks,
    category: categories.Kayaks,
    area: areas.North,
    position: { lat: 33.2258579651851, lng: 35.613906151335556 },
    website: "http://www.kayak.co.il/",
    phone: "0779969248",
    suitableToChildren: true,
    rating: 4.4,
    openAtWeekend: true,
    price: 112,
    description:
      "The Hagoshrim Kayaks site is located on the Hasbani river, in the heart of the Hula Valley, and offers a variety of adventures and activities for the whole family.",
    image: "./images/Hagoshrim.jpg",
  },
  {
    id: 2,
    name: "Kfar Blum Kayaks", //קייקי כפר בלום
    location: "Kibbutz Kfar Blum",
    icon: iconOnMap.Kayaks,
    category: categories.Kayaks,
    area: areas.North,
    position: { lat: 33.17664800432861, lng: 35.614204392571125 },
    website: "http://www.kayaks.co.il/",
    phone: "046902616",
    suitableToChildren: true,
    rating: 4.4,
    openAtWeekend: true,
    price: 90,
    description:
      "A family-friendly experience of kayaking on the Jordan River in a pastoral route full of lush vegetation. The 4 km long route will provide you and your families with about an hour and a half of relaxing and fun kayaking in professional river boats.",
    image: "./images/Blum.jpg",
  },
  {
    id: 3,
    name: "Aqua Kef",
    location: "Tveria",
    icon: iconOnMap.Diving,
    category: categories.Diving,
    area: areas.North,
    position: { lat: 32.77575328302121, lng: 35.54613031087106 },
    website: "https://www.aquakef.com/",
    phone: "043811101",
    suitableToChildren: true,
    rating: 4.5,
    openAtWeekend: false,
    price: 75,
    description:
      "A water park on the water's edge with an obstacle course with inflatable facilities including trampolines, slides and swings.",
    image: "./images/AquaFun.jpg",
  },
  {
    id: 4,
    name: "Rayzers Marom Golan",
    location: "Marom Golan",
    icon: iconOnMap.Atv,
    category: categories.Atv,
    area: areas.North,
    position: { lat: 33.13330175303428, lng: 35.77696371076595 },
    website: "http://www.tomcarsmeromgolan.co.il/",
    phone: "04-6960483",
    suitableToChildren: true,
    rating: 3.9,
    openAtWeekend: true,
    price: 120,
    description:
      "An ATV tour in the Golan Heights, with a variety of routes and a variety of vehicles.",
    image: "./images/MaromGolanRay.jpg",
  },
  {
    id: 5,
    name: "Kshatot Arad",
    location: "Evron",
    icon: iconOnMap.Crossbow,
    category: categories.Crossbow,
    address: "Evron",
    area: areas.North,
    position: { lat: 32.99257359969506, lng: 35.09985799230953 },
    website: "None",
    phone: "052-2361090",
    suitableToChildren: true,
    rating: 4,
    openAtWeekend: true,
    price: 80,
    description:
      "Keshet Arad offers sports entertainment suitable for all ages: shooting at a target with a bow and arrow.It is an age-old sport that develops the shooter's motor skills, patience, concentration and accuracy in shooting.The adventure is both mobile and stationary - and you can order a shooting range for archery targets anywhere chosen as a fun activity for groups - events, birthdays, bar mitzvahs, gathering days and more. The activity includes competitions, games, shooting for special purposes and includes training in the use of a bow and explanations.",
    image: "./images/KshatotArad.jpg",
  },
  {
    id: 6,
    name: "Karting in the lake",
    location: "Maalot Tarshiha",
    icon: iconOnMap.Karting,
    category: categories.Karting,
    area: areas.North,
    position: { lat: 33.00615853044911, lng: 35.291131488112576 },
    website: "http://www.lakemonfort.co.il/",
    phone: " 052-5511119",
    suitableToChildren: true,
    rating: 4.2,
    openAtWeekend: true,
    price: 60,
    description:
      "Karting is a challenging, competitive and extremely safe sport.Our asphalt track was specially built for professional karting.Meets the strictest standards and provides a fast and safe racing driving experience.",
    image: "./images/KartingBagam.jpg",
  },
  {
    id: 7,
    name: "Extreme Park Akko",
    location: "Akko",
    icon: iconOnMap.Park,
    category: categories.Park,
    area: areas.North,
    position: { lat: 32.91634570258187, lng: 35.09432886517459 },
    website: "https://pex.co.il/",
    phone: "1-700-556-070",
    suitableToChildren: true,
    rating: 4.5,
    openAtWeekend: false,
    price: 130,
    description:
      "Extreme Park Akko is a unique and challenging experience for the whole family. The park is located in the heart of the ancient city of Acre, in the walls of the Crusader city, and offers a variety of extreme activities for all ages.",
    image: "./images/ParkEtgraimAkko.jpg",
  },
  {
    id: 8,
    name: "Park Etgrai",
    location: "Nahariya",
    icon: iconOnMap.Climbing,
    category: categories.Climbing,
    area: areas.North,
    position: { lat: 32.9915655766865, lng: 35.083338582239136 },
    website: "None",
    phone: "04-9879811",
    suitableToChildren: true,
    rating: 4.8,
    openAtWeekend: true,
    price: 65,
    description:
      "On the southern promenade of Nahariya is the adventure park for the whole family.The park has playgrounds for children, swings, a climbing wall and fitness facilities for teenagers and adults facing the open view of the Mediterranean Sea. Entrance to the park is free for residents of Nahariya. ",
    image: "./images/ParkEtgraimNahariya.jpg",
  },
  {
    id: 9,
    name: "Flyboard",
    location: "Haifa",
    icon: iconOnMap.Skydiving,
    category: categories.Skydiving,
    area: areas.North,
    position: { lat: 32.78985452019856, lng: 34.955369438302654 },
    website: "https://www.flyboardhatsafon.co.il/",
    phone: " 054-435-4875",
    suitableToChildren: false,
    rating: 4.2,
    openAtWeekend: true,
    price: 120,
    description:
      "Flyboard is a water sport that allows you to fly above the water, dive and perform acrobatic stunts. The flyboard is connected to a jet ski by a hose that provides the propulsion force. The flyboarder stands on the flyboard and controls the flyboard with his feet. The flyboarder can fly up to 15 meters above the water, dive into the water and perform acrobatic stunts.",
    image: "./images/Flyboard.jpg",
  },
  {
    id: 10,
    name: "Sky Trek",
    location: "Beit Ashita",
    icon: iconOnMap.Skydiving,
    category: categories.Skydiving,
    area: areas.North,
    position: { lat: 32.54777640155647, lng: 35.43623429764867 },
    website: "https://www.skytrek.co.il/",
    phone: "048010023",
    suitableToChildren: true,
    rating: 4.8,
    openAtWeekend: false,
    price: 580,
    description:
      "Sky Trek Hot Air Balloons operates balloon experience flights throughout the country. We invite you to the most amazing experience you will ever have!",
    image: "./images/SkyTrack.jpg",
  },
  {
    id: 11,
    name: "Israel-Extreme",
    location: "Tel-Aviv",
    icon: iconOnMap.Skydiving,
    category: categories.Skydiving,
    area: areas.Center,
    position: { lat: 32.0548675598073, lng: 34.79938119032453 },
    website: "https://israel-extreme.com/he/",
    phone: "0723725555",
    suitableToChildren: true,
    rating: 4.8,
    openAtWeekend: true,
    price: 100,
    description:
      "Cave trips, rock climbing, canyoning, bungees, omegas, abseiling-cliffs, paragliding, flying ATVs, hot air balloons, ATVs, skydiving and a variety of other extreme activities!!",
    image: "./images/IsraelExtreme.jpg",
  },
  {
    id: 12,
    name: "Cactus",
    location: "Kibutz Shfayim",
    icon: iconOnMap.Atv,
    category: categories.Atv,
    area: areas.Center,
    position: { lat: 32.16757389052237, lng: 34.82474711755712 },
    website: "https://www.cactustours.co.il/",
    phone: "0545610512",
    suitableToChildren: true,
    rating: 4,
    openAtWeekend: false,
    price: 120,
    description:
      "Come and enjoy an experience you have never known before, dedicated and challenging paintball complexes all over the country with the most professional instructors.With us you can experience and feel the adrenaline like you have never known. Go with us for an unforgettable experience all over the country in the most fun, safe and no less important way - a super affordable price.A variety of options for formation days, birthdays, romantic fun days, fun days for the whole family and combine the trip with other attractions such as a meal in the field, laser tag, water tag and a huge variety of other options.",
    image: "./images/Cactus.jpg",
  },
  {
    id: 13,
    name: "Flybox",
    location: "Rishon Lezion",
    icon: iconOnMap.Skydiving,
    category: categories.Skydiving,
    area: areas.Center,
    position: { lat: 31.978193853896023, lng: 34.75258170473672 },
    website: "https://www.flybox.co.il/",
    phone: "039493939",
    suitableToChildren: true,
    rating: 4.7,
    openAtWeekend: true,
    price: 289,
    description:
      "Flybox is a unique experience for the whole family and for all ages. Flybox is a vertical wind tunnel that simulates a free fall from a height of 4000 meters. The experience is safe and suitable for all ages from 4 years old. The experience is accompanied by a professional instructor who will accompany you throughout the experience. The experience is suitable for the whole family, for birthdays, for groups and for couples. Flybox is located in Rishon Lezion and is open 7 days a week.",
    image: "./images/Flybox.jpg",
  },
  {
    id: 14,
    name: "Canaan desert tourism",
    location: "Kfar Adumim",
    icon: iconOnMap.Atv,
    category: categories.Atv,
    area: areas.Center,
    position: { lat: 31.81589677825527, lng: 35.35056444217741 },
    website: "https://cnaantours.co.il/",
    phone: "025355351",
    suitableToChildren: true,
    rating: 4.8,
    openAtWeekend: false,
    price: 220,
    description:
      "A desert observation trip that combines a challenging trip within the riverbeds and on the beautiful ridges of the Judean Desert.Come and feel the desert with the ultimate SUV for lovers of both terrain and peace.The Raider is an Israeli electric off-road vehicle that reinvents the extreme, along with protecting the environment.The participants will undergo a safety briefing and driving procedures in the field and set off.We will go for a ride in the desert on the Rider, we will pass through breathtaking landscapes. We will reach a spectacular view of the Euphrates River.",
    image: "./images/Canaan.jpg",
  },
  {
    id: 15,
    name: "Chahmatipus",
    location: "Bear Tuvia",
    icon: iconOnMap.Climbing,
    category: categories.Climbing,
    area: areas.South,
    position: { lat: 31.722293352044943, lng: 34.74753285902834 },
    website: "https://www.boulder-problem.com/",
    phone: "089281090",
    suitableToChildren: true,
    rating: 4.7,
    openAtWeekend: false,
    price: 90,
    description:
      "A climbing wall in the city of Bear Tuvia, suitable for all ages and levels. The wall is 8 meters high and has 6 different routes. The climbing wall is suitable for beginners and advanced climbers. The wall is located in the sports hall of the city of Bear Tuvia, and is open to the public on Saturdays and holidays.",
    image: "./images/Chahmatipus.jpg",
  },
  {
    id: 16,
    name: "La medavesh",
    location: "Beeri",
    icon: iconOnMap.Bike,
    category: categories.Bike,
    area: areas.South,
    position: { lat: 31.428960040611802, lng: 34.4939278615232 },
    website: "http://www.lamedavesh.co.il/",
    phone: "089949374",
    suitableToChildren: true,
    rating: 4.7,
    openAtWeekend: true,
    price: 75,
    description:
      "The peak of the travel season is during the South Red Festival, a time when the red anemone flowers bloom in huge carpets. Blooming in the south of Azarno is in the Bari Forest, the Shukda Forest, the Bari Tarunt Reserve and fields and open areas.",
    image: "./images/Lamedavesh.jpg",
  },
  {
    id: 17,
    name: "Top 94",
    location: "Eilat",
    icon: iconOnMap.Climbing,
    category: categories.Climbing,
    area: areas.South,
    position: { lat: 29.60096091146295, lng: 34.97017058435546 },
    website: "https://top94.co.il/",
    phone: "086109009",
    suitableToChildren: true,
    rating: 4.5,
    openAtWeekend: true,
    price: 70,
    description:
      "An innovative challenge park in the northern corner of the city of Eilat, a meeting of nature, desert and extreme experience. INDOOR complex where you can find carefully selected activities suitable for all ages",
    image: "./images/top94.jpg",
  },
  {
    id: 18,
    name: "Atlantis",
    location: "Eilat",
    icon: iconOnMap.Diving,
    category: categories.Diving,
    area: areas.South,
    position: { lat: 29.554454469780367, lng: 34.958585531286765 },
    website: "https://www.eilatisrael.co.il/",
    phone: "0545585378",
    suitableToChildren: true,
    rating: 5,
    openAtWeekend: true,
    price: 90,
    description:
      "The Atlantis company has been operating for 20 years and leads the field of tourism in Eilat. The company offers a variety of activities, hotel deals and recommendations in Eilat for all target audiences, for direct, fast and secure booking on the website",
    image: "./images/atlantis.jpg",
  },
  {
    id: 19,
    name: "Manta",
    location: "Eilat",
    icon: iconOnMap.Diving,
    category: categories.Diving,
    area: areas.South,
    position: { lat: 29.51286099952158, lng: 34.92360864663256 },
    website: "https://divemanta.co.il/",
    phone: "086333666",
    suitableToChildren: true,
    rating: 4.7,
    openAtWeekend: true,
    price: 60,
    description:
      "The underwater world in Eilat is one of the shortest ways to a different reality from the everyday life of all of us.",
    image: "./images/manata.jpg",
  },
  {
    id: 20,
    name: "DeepSiam",
    location: "Eilat",
    icon: iconOnMap.Diving,
    category: categories.Diving,
    area: areas.South,
    position: { lat: 29.51241465765436, lng: 34.92437161964888 },
    website: "https://www.deepsiam.co.il/",
    phone: "083819800",
    suitableToChildren: true,
    rating: 4.3,
    openAtWeekend: true,
    price: 50,
    description: "Guided dives at all diving sites in Eilat according to the diver's choice",
    image: "./images/DeepSiam.jpg",
  },
  {
    id: 21,
    name: "Park Etgarim",
    location: "Ashdod",
    icon: iconOnMap.Climbing,
    category: categories.Climbing,
    area: areas.South,
    position: { lat: 31.819937952713996, lng: 34.65631171528277 },
    website:
      "https://visit.ashdod.muni.il/night-life/%D7%A4%D7%90%D7%A8%D7%A7-%D7%90%D7%AA%D7%92%D7%A8%D7%99%D7%9D/",
    phone: "0737971188",
    suitableToChildren: true,
    rating: 4.1,
    openAtWeekend: false,
    price: 50,
    description:
      "In the park you will find a variety of facilities: a wading pool, a facility for colliding cars, water inflatables, a climbing tower, trampolines, omega, shaded seating areas and more.",
    image: "./images/ParkEtgarim.jpg",
  },
  {
    id: 22,
    name: "Superland",
    location: "Rishon Letzion",
    icon: iconOnMap.Park,
    category: categories.Park,
    area: areas.Center,
    position: { lat: 31.978857987517376, lng: 34.74422000420766 },
    website: "https://www.superland.co.il/",
    phone: "0737971188",
    suitableToChildren: true,
    rating: 4.1,
    openAtWeekend: false,
    price: 70,
    description:
      "In Superland, everyone, especially the young among us and the young at heart, can find the facilities that will excite him",
    image: "./images/Superland.jpg",
  },
  {
    id: 23,
    name: "RZR club",
    location: "Ben Shemen",
    icon: iconOnMap.Atv,
    category: categories.Atv,
    area: areas.Center,
    position: { lat: 31.978479788989883, lng: 34.9501443079125 },
    website: "https://www.rzrclub.co.il/",
    phone: "0546858567",
    suitableToChildren: true,
    rating: 4.1,
    openAtWeekend: false,
    price: 100,
    description: "Feel nature and adrenaline like you've never known",
    image: "./images/RZRclub.jpg",
  },
  {
    id: 24,
    name: "Carting Jerusalem",
    location: "Jerusalem",
    icon: iconOnMap.Karting,
    category: categories.Karting,
    area: areas.Center,
    position: { lat: 31.750849391965893, lng: 35.20880366374163 },
    website: "https://www.teamkarting.co.il/",
    phone: "0775030566",
    suitableToChildren: true,
    rating: 4.5,
    openAtWeekend: false,
    price: 55,
    description:
      "The first karting track in Jerusalem has started and you will get to experience driving a karting on the safest and most advanced track in the world!",
    image: "./images/CartingJerusalem.jpg",
  },
  {
    id: 25,
    name: "Performance Rock",
    location: "Modiin",
    icon: iconOnMap.Climbing,
    category: categories.Climbing,
    area: areas.Center,
    position: { lat: 31.90481079042533, lng: 35.006082133046746 },
    website: "https://performancerock.co.il/branch/modiin/",
    phone: "086755591",
    suitableToChildren: true,
    rating: 4.5,
    openAtWeekend: false,
    price: 40,
    description:
      "The climbing wall in Modiin is the third of the climbing walls in the network and has over 100 climbing routes on a weekly basis (!) suitable for all ages and levels. Come climb and sit with us over a beer or coffee.",
    image: "./images/PerformanceRock.jpg",
  },
  {
    id: 26,
    name: "Urban Climbing",
    location: "Rehovot",
    icon: iconOnMap.Climbing,
    category: categories.Climbing,
    area: areas.Center,
    position: { lat: 31.909793741659776, lng: 34.80686704653833 },
    website: "https://www.uclimb.co.il/",
    phone: "0542077058",
    suitableToChildren: true,
    rating: 4.2,
    openAtWeekend: false,
    price: 45,
    description:
      "Rehovot Urban Type was established in 2011 and is the third bouldering wall established in Israel.",
    image: "./images/UrbanClimbing.jpg",
  },
  {
    id: 27,
    name: "LAKE TLV",
    location: "Tel Aviv",
    icon: iconOnMap.Diving,
    category: categories.Diving,
    area: areas.Center,
    position: { lat: 32.04145157982248, lng: 34.80326800420506 },
    website: "https://laketlv.co.il/",
    phone: "037391168",
    suitableToChildren: true,
    rating: 4.5,
    openAtWeekend: false,
    price: 55,
    description:
      "Get to know LAKE TLV is the only lake with cable water skiing in Israel. Based on the most advanced technologies in the world with a variety of activities in the lake",
    image: "./images/LakeTLV.jpg",
  },
  {
    id: 28,
    name: "iClimb",
    location: "Rishon Letzion",
    icon: iconOnMap.Climbing,
    category: categories.Climbing,
    area: areas.Center,
    position: { lat: 31.988414366732748, lng: 34.76982254653515 },
    website: "https://iclimb-rishon.co.il/",
    phone: "036121109",
    suitableToChildren: true,
    rating: 4.4,
    openAtWeekend: false,
    price: 55,
    description: "The innovative, experiential and largest climbing complex in Israel",
    image: "./images/iClimb.jpg",
  },
  {
    id: 29,
    name: "Sky Jump",
    location: "Rosh Pina",
    icon: iconOnMap.Skydiving,
    category: categories.Skydiving,
    area: areas.North,
    position: { lat: 32.97711168118511, lng: 35.57312939252679 },
    website: "https://www.sky-jump.co.il/giftcard",
    phone: "0732248386",
    suitableToChildren: false,
    rating: 4.8,
    openAtWeekend: false,
    price: 500,
    description:
      "The free-diving group The Parachutist operates clubs and schools for free-diving, where they train skydiving instructors and photographers and the next generation of skydivers in Israel.",
    image: "./images/SkyJump.jpg",
  },
  {
    id: 30,
    name: "SPORTX",
    location: "Tel Aviv",
    category: categories.Skydiving,
    icon: iconOnMap.Skydiving,
    area: areas.Center,
    position: { lat: 32.06933809949171, lng: 34.76340210420389 },
    website: "https://sportx.co.il/",
    phone: "0737880888",
    suitableToChildren: true,
    rating: 3.8,
    openAtWeekend: false,
    price: 600,
    description:
      "In this department we have put together for you a variety of flights with a flying ATV, a family flight with a flying ATV, a romantic flight, a pilot marriage proposal for one day and more, flights with a flying ATV are carried out at several airstrips in Israel, a flight with a flying ATV is an experiential and special flight. A flight with a flying ATV is carried out in the morning and in the afternoon.",
    image: "./images/SPORTX.jpg",
  },
];
