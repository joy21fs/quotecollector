import React from "react";
import NavbarToggleContent from "./NavbarToggleContent";
import NavbarToggleButton from "./NavbarToggleButton";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="navbar-container container-fluid">
        <Link className="brand-title navbar-brand" to="/">
          QUOTE COLLECTOR
        </Link>
        <NavbarToggleButton />
        <NavbarToggleContent />
      </div>
    </nav>
  );
}

export default Navbar;
