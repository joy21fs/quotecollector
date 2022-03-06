import React from "react";

function Intro() {
  return (
    <section className="white-section">
      <div className="wrapper intro">
        <i className="quotation-mark fas fa-quote-right fa-4x"></i>
        <div className="header">
          <h1 className="title">
            <em>
              Be Comforted,
              <br /> Be Inspired,
              <br />
              Be Who You Want to BE
            </em>
          </h1>
          <button type="button" className="btn sign-up-btn">
            Sign Up
          </button>
        </div>

        <img
          className="intro-image"
          src={process.env.PUBLIC_URL + "/images/Mountain.png"}
          alt="mountain"
        ></img>
      </div>
    </section>
  );
}

export default Intro;
