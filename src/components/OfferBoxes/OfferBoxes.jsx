import { offerts } from "../../data/offers";
import OfferBox from "../OfferBox/OfferBox";

const OfferBoxes = () => {
  return (
    <>
      {offerts.map((offer, index) => (
        <OfferBox key={index} offer={offer} />
      ))}
    </>
  );
};

export default OfferBoxes;
