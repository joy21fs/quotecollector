import React from "react";
import CarouselButton from "./CarouselButton";
import Testimonial from "./Testimonial";

function CTA() {
  return (
    <section className="colored-section" id="testimonials">
      <div className="wrapper">
        <Testimonial />
        <CarouselButton
          name="carousel-control-prev"
          direction="prev"
          icon="carousel-control-prev-icon"
        />
        <CarouselButton
          name="carousel-control-next"
          direction="next"
          icon="carousel-control-next-icon"
        />
      </div>
    </section>
  );
}

export default CTA;
