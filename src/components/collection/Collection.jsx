import React from "react";
import CollectionCategory from "./CollectionCategory";

function Collection() {
  return (
    <section className="white-section" id="collections">
      <div className="container-fluid category wrapper">
        <h2 className="section-title">Quote Collections</h2>

        <CollectionCategory />
      </div>
    </section>
  );
}

export default Collection;
