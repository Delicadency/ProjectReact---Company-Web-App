import "./Section.css";
import React from "react";
import background from "../images/background-pizza.jpg"
const sectionTypes = [
  {
    id: "landing-page",
    class: "flex j-c--center a-i--center landing-page",
    style: { backgroundImage: `url(${background}) no-repeat` },
    child: <LandingPage />,
  },
  {
    id: "about",
    class: "flex j-c--center a-i--center h--fit-content about",
    child: <About />,
  },
  {
    id: "offer",
    class: "flex j-c--center a-i--center h--fit-content offer",
    child: <Offer />,
  },
];

const Section = () => {
  return (
    <>
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
    </>
  );
};

export default Section;
