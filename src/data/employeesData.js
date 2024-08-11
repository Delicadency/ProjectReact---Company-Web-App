import portraitX from "../images/portrait-x.jpeg";
import portraitY from "../images/portrait-y.jpeg";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel massa et lacus egestas cursus a non magna. Fusce scelerisque blandit nunc, id malesuada ex lobortis a. Integer felis nisi, tempor elementum lorem in, varius pellentesque ligula. Duis efficitur lacinia enim, non tincidunt libero ultrices in.";

export const listOfEmployees = [
  {
    name: "Mariusz",
    surname: "Budzyński",
    position: "kucharz",
    portrait: { backgroundImage: `url(${portraitX})` },
    description: lorem,
  },
  {
    name: "Izabela",
    surname: "Wieczko",
    position: "kelnerka",
    portrait: { backgroundImage: `url(${portraitY})` },
    description: lorem,
  },
];
