import React, { useState } from "react";
import Button from "../custom button/Button";
import FormInput from "../form input/FormInput";

import "./SignIn.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={handleOnSubmit}>
        <FormInput
          name="email"
          type="email"
          onChangeHandler={setEmail}
          value={email}
          required
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          onChangeHandler={setPassword}
          value={password}
          required
          label="Password"
        />
        <Button type="submit"> Submit Form</Button>
      </form>
    </div>
  );
}

export default SignIn;
