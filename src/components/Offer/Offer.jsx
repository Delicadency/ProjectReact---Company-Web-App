import React from "react";
import "./Offer.css";
import Heading from "../Heading/Heading";
import OfferBoxes from "../OfferBoxes/OfferBoxes";
const Offer = () => {
  return (
    <div className="flex j-c--center a-i--center f-direction--column container">
      <Heading
        className="bold offer__heading"
        text="Czym zajmuje się nasza firma?"
      />
      <div className="flex j-c--center a-i--center f--flow offer__container">
        <OfferBoxes />
      </div>
    </div>
  );
};
export default Offer;
