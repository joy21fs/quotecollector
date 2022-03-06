import React from "react";
import steps from "./steps";

function Steps() {
  return (
    <section className="white-section" id="steps">
      <div className="container-fluid row wrapper">
        {steps.map((step) => (
          <div key={step.id} className="column col-lg-4 col-md-6 col-sm-12">
            <div className="steps card">
              <div className="card-header">
                <h2 className="card-step">STEP {step.id}.</h2>
              </div>
              <div className="steps card-body">
                <h3 className="card-content card-title">
                  <strong>{step.title}</strong>
                </h3>
                <p className="card-content card-text">{step.instruction}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Steps;
