import React from "react";
import DropDownList from "./DropDownList";
import collectionCategories from "../collectionCategories";
import { HashLink as Link } from "react-router-hash-link";


function NavbarToggleItem(props) {
  function createDropDownList(collectionCategory) {
    return (
      <DropDownList
        key={collectionCategory.id}
        title={collectionCategory.title}
        link={collectionCategory.link}
      />
    );
  }

  return (
    <li id="toggle-item" className={props.itemClass}>
      <Link
        className={props.a.class}
        to={"/" + props.a.link}
        id={props.a.id}
        role={props.a.role}
        data-bs-toggle={props.a.bsSetting}
        aria-expanded={props.a.ariaSetting}
      >
        {props.name}
      </Link>

      {props.ul.class !== "" && (
        <ul className={props.ul.class} aria-labelledby={props.ul.ariaLabel}>
          {collectionCategories.map(createDropDownList)}
        </ul>
      )}
    </li>
  );
}

export default NavbarToggleItem;
