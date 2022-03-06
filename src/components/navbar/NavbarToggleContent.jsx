import React from "react";
import navbarToggleItems from "./navbarToggleItems";
import NavbarToggleItem from "./NavbarToggleItem";

function NavbarToggler() {
  function createNavbarToggleItems(navbarToggleItem) {
    return (
      <NavbarToggleItem
        key={navbarToggleItem.id}
        name={navbarToggleItem.name}
        itemClass={navbarToggleItem.itemClass}
        a={navbarToggleItem.a}
        ul={navbarToggleItem.ul}
      />
    );
  }

  return (
    <div className="collapse navbar-collapse" id="navbarToggler">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {navbarToggleItems.map(createNavbarToggleItems)}
      </ul>
    </div>
  );
}

export default NavbarToggler;
