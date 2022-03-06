import React from "react";
import { Link } from 'react-router-dom';

function DropDownList(props) {
  return (
    <li id="dropdown-item">
      <Link className="dropdown-item" to={"/" + props.link}>
        {props.title}
      </Link>
    </li>
  );
}

export default DropDownList;
