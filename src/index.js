import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import ContentPage from "./components/categories/ContentPage";
import collectionCategories from "./components/collectionCategories";

import { BrowserRouter, Routes, Route } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter basename="/quotecollector">
    <Routes>
      <Route exact path="/" element={<App />}/>
      {collectionCategories.map((collectionCategory) => (
        <Route
          key={collectionCategory.id}
          exact path={"/" + collectionCategory.link}
          element={<ContentPage categoryID={collectionCategory.id} />}
        ></Route>
      ))}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
