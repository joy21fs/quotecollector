import React from "react";
import aboutItems from "./aboutItems";

function About() {
  return (
    <section className="colored-section" id="about">
      <div className="container-fluid row wrapper">
        {aboutItems.map((aboutItem) => (
          <div
            key={aboutItem.id}
            className="column col-lg-4 col-md-6 col-sm-12"
          >
            <div className="card">
              <div className="card-body">
                <i className="quotation-mark fas fa-quote-right fa-2x"></i>

                <h3 className="card-content card-title">
                  <span>{aboutItem.title.first}</span>
                  {aboutItem.title.rest}
                </h3>

                <p className="card-content card-text">
                  {aboutItem.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
