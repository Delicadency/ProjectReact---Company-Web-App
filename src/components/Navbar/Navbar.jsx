import "./Navbar.css";
import React from "react";
import NavbarLogo from "../NavbarLogo/NavbarLogo";
import NavbarMenu from "../NavbarMenu/NavbarMenu";

const Navbar = () => {
  return (
    <nav className="flex j-c--space-between a-i--center navbar container">
      <NavbarLogo />
      <NavbarMenu />
    </nav>
  );
};
export default Navbar;
