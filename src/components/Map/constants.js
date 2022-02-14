import { tokyo, santaCruz, shanghai, banff, shenzhen, vancouver, paris, london, frankfurt } from "../../assets";

export const markers = [
  { place: "Shenzhen", coords: [114.0596, 22.5429]},
  { place: "Santa Cruz", coords: [-122.0308, 36.9741] },
  { place: "Shanghai", coords: [121.4737, 31.2304]},
  { place: "Tokyo", coords: [139.6503, 35.6762]},
  { place: "London", coords: [0.1276, 51.5072]},
  { place: "Paris", coords: [2.3522, 48.8566]},
  { place: "Banff", coords: [-115.5708, 51.1784]},
  { place: "Vancouver", coords: [-123.1207, 49.2827]},
  { place: "Frankfurt", coords: [8.6821, 50.1109]}
];

export const stories = {
  "Shenzhen": { title: "Shenzhen", text: "This is where most of my family live and is truly a young city that I miss.", image: shenzhen },
  "Santa Cruz": { title: "Santa Cruz", text: "This is where I have been for the last three years. I truly feel included by this lovely community and I am thankful for the nature here!", image: santaCruz},
  "Shanghai": { title: "Shanghai", text: "Many of my friends are from here, and I love how historical it looks!", image: shanghai },
  "Tokyo": { title: "Tokyo", text: "One of the very few countries that I keep going back to. I love the technology, people, and food in Tokyo!", image: tokyo },
  "London": { title: "London", text: "I'll never forget how they say water here.", image: london },
  "Paris": { title: "Paris", text: "It is indeed a romantic city, but also has so much more to offer.", image: paris },
  "Banff": { title: "Banff", text: "If you were to ask me where you should visit next, there is no better place than Banff!", image: banff },
  "Vancouver": { title: "Vancouver", text: "It will always feel like the Canadian Silicon Valley to me. This is also where I spent a lot my time growing up!", image: vancouver },
  "Frankfurt": { title: "Frankfurt", text: "My favorite European tech hub.", image: frankfurt },
};
