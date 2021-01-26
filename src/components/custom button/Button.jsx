import React from "react";
import "./Button.scss";

function Button({ children, google, ...rest }) {
  return (
    <button className={`custom-button ${google ? "google" : ""}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
