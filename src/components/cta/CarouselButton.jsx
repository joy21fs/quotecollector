import React from "react";

function CarouselButton(props) {
  return (
    <button
      className={props.name}
      type="button"
      data-bs-target="#testimonial-carousel"
      data-bs-slide={props.direction}
    >
      <span className={props.icon} aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </button>
  );
}

export default CarouselButton;
