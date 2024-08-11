import "./OfferBox.css";

const OfferBox = ({ offer }) => {
  return (
    <div className="flex j-c--center a-i--center offer__box">
      {offer.isNew && (
        <>
          <div className="offer__dot"></div>
          <p className="offer__paragraph">
            {offer.name}
            <span className="paragraph offer__span">(nowość)</span>
          </p>
        </>
      )}
      {!offer.isNew && <p className="offer__paragraph">{offer.name}</p>}
    </div>
  );
};

export default OfferBox;
