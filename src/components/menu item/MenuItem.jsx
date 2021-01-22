import React from "react";
import {withRouter} from 'react-router-dom'

import "./MenuItem.scss";

function MenuItem({ title, sub,linkUrl, match, history, ...rest }) {
  console.log(match);
  console.log(history);
  return (
    <div className="menu-item" onClick={()=> history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);
