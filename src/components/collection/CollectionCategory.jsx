import React from "react";
import collectionCategories from "../collectionCategories";
import { Link } from 'react-router-dom';

function CollectionCategory() {
  return (
    <div className="category-container">
      {collectionCategories.map((collectionCategory) => (
        <div
          key={collectionCategory.id}
          className={
            collectionCategory.id % 2 === 0
              ? "collection even-circle"
              : "collection odd-circle"
          }
        >
          <p className="category-name">
            <Link to={"/" + collectionCategory.link}>{collectionCategory.title}</Link>
          </p>
        </div>
      ))}
    </div>
  );
}

export default CollectionCategory;
