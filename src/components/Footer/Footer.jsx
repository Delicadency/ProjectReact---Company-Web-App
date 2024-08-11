import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex j-c--center a-i--center footer">
      <div className="flex a-i--center footer--direction-and-justify container">
        <p className="paragraph bold footer__paragraph">
          Nazwa firmy - wszelkie prawa zastrzeżone, 2024
        </p>
        <div className="flex j-c--center a-i--center">
          <a
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" className="icon" />
          </a>
          <a
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
