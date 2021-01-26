import React from "react";
import "./Button.scss";

function Button({ children, ...rest }) {
  return (
    <button className="custom-button" {...rest}>
      {children}
    </button>
  );
}

export default Button;
