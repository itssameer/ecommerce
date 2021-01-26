import React from "react";

import "./Forminput.scss";

function FormInput({ label, onChangeHandler, ...rest }) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={(e) => onChangeHandler(e.target.value)}
        {...rest}
      />
      {label && (
        <label
          className={`${rest.value.length ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
}

export default FormInput;
