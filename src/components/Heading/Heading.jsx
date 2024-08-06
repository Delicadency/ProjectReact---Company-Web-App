import "./Heading.css";
import React from "react";

const Heading = ({ className, text }) => {
  return <h2 className={className}>{text}</h2>;
};
export default Heading;
