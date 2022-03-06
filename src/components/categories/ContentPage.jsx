import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer";
import Content from "./Content";
import collectionCategories from "../collectionCategories";

function ContentPage(props) {
  let index = props.categoryID - 1;

  return (
    <div>
      <Navbar />

      <Content
        category={collectionCategories[index].title}
        key={collectionCategories[index].id}
        id={collectionCategories[index].id}
      />

      <Footer />
    </div>
  );
}

export default ContentPage;
