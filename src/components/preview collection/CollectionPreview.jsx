import React from "react";
import CollectionItem from "../collection item/CollectionItem";

import "./PreviewCollection.scss";

function CollectionPreview({ title, items, ...rest }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem {...item} />
          ))}
      </div>
    </div>
  );
}

export default CollectionPreview;
