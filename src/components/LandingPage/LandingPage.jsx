import "./LandingPage.css";
import React from "react";
import LandingPageHeading from "../LandingPageHeading/LandingPageHeading";
import LandingPageParagraph from "../LandingPageParagraph/LandingPageParagraph";
import LandingPageButton from "../LandingPageButton/LandingPageButton";

const LandingPage = () => {
  return (
    <div className="flex j-c--center a-i--center landing-page__container--shadow">
      <div className="flex container">
        <div className="h--fit-content landing-page__container">
          <LandingPageHeading />
          <LandingPageParagraph />
          <LandingPageButton />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
