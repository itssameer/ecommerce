import React from "react";
import "./MenuItem.scss";

function MenuItem({ title, sub, ...rest }) {
  console.log(rest);
  return (
    <div className="menu-item">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${rest.imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="description">SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
