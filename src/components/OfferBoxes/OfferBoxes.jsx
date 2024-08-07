import "./OfferBoxes.css";
import React from "react";
import { offerts } from "../../data/offers";

const OfferBoxes = () => {
  return (
    <>
      {offerts.map((offer, index) => (
        <div key={index} className="flex j-c--center a-i--center offer__box">
          {offer.isNew && (
            <>
              <div className="offer__dot"></div>
              <p className="offer__paragraph">
                {offer.name}
                <span className="paragraph span offer__span">(nowość)</span>
              </p>
            </>
          )}
          {!offer.isNew && <p className="offer__paragraph">{offer.name}</p>}
        </div>
      ))}
    </>
  );
};

export default OfferBoxes;
