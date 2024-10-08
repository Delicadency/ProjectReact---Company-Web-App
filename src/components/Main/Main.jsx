import "./Main.css";
import background from "../../images/background-pizza.jpg";
import LandingPage from "../LandingPage/LandingPage";
import About from "../About/About";
import Offer from "../Offer/Offer";

const sectionTypes = [
  {
    id: "landing-page",
    class: "flex j-c--center a-i--center landing-page",
    style: { backgroundImage: `url(${background})` },
    child: <LandingPage />,
  },
  {
    id: "about",
    class: "flex j-c--center a-i--center h--fit-content section about",
    child: <About />,
  },
  {
    id: "offer",
    class: "flex j-c--center a-i--center h--fit-content section offer",
    child: <Offer />,
  },
];

const Main = () => {
  return (
    <main>
      {sectionTypes.map((sectionType) => (
        <section
          key={sectionType.id}
          id={sectionType.id}
          className={sectionType.class}
          style={sectionType.style || {}}
        >
          {sectionType.child}
        </section>
      ))}
    </main>
  );
};

export default Main;
