import React from "react";
import testimonials from "./testimonials";

function Testimonial() {
  return (
    <div
      id="testimonial-carousel"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={
              testimonial.id === 1
                ? "carousel-item active container-fluid"
                : "carousel-item container-fluid"
            }
          >
            <div className="testimonial-content-wrapper">
              <div className="testimonial-text-box">
                <i className="quotation-mark quotation-mark-left fas fa-quote-right fa-2x fa-flip-horizontal"></i>
                <i className="quotation-mark quotation-mark-right fas fa-quote-right fa-2x"></i>
                <h3 className="review">{testimonial.review}</h3>
              </div>
              <div>
                <img
                  className="reviewer-image"
                  src={testimonial.img}
                  alt="reviewer"
                />
                <p className="reviewer-name">{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
