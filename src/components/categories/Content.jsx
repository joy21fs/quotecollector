import React from "react";
import quotes from "./quotes";

function Content(props) {
  return (
    <section className="quote-content">
      <div className="wrapper quote-category">
        <i className="quotation-mark quotation-mark-left fas fa-quote-right fa-2x fa-flip-horizontal"></i>
        <i className="quotation-mark quotation-mark-right fas fa-quote-right fa-2x"></i>
        <div className="quote-title-box">
          <h2 className="quote-title">{props.category}</h2>
        </div>

        <div className="quotes-container row">
          {quotes.map((quote) => {
            return (
              quote.number === props.id && (
                <div
                  key={quotes.id}
                  className="column col-lg-4 col-md-6 col-sm-12"
                >
                  <img
                    className="quotes"
                    src={
                      quote.number === 2 || quote.number === 5
                        ? process.env.PUBLIC_URL + quote.src
                        : quote.src
                    }
                    alt="quote"
                  />
                </div>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Content;
