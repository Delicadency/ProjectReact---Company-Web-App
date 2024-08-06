import "./About.css";
import React from "react";
import Heading from "../Heading/Heading";
import Employees from "../Employees/Employees";

const About = () => {
  return (
    <div className="flex f-direction--column container">
      <Heading className="bold about__heading" text="Nasi specjaliści" />
      <Employees />
    </div>
  );
};
export default About;
