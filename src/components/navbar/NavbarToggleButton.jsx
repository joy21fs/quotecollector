import React from "react";

function ToggleButton() {
  return (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
  );
}

export default ToggleButton;
