import React from "react";

export const Auth = ({
  email,
  password,
  onEmailChange,
  onPassChange,
  Login,
  SignUp,
  SignOut
}) => {
  return (
    <div>
      <input
        type="text"
        onChange={onEmailChange}
        placeholder="email"
        value={email}
      />
      <input
        type="password"
        onChange={onPassChange}
        placeholder="password"
        value={password}
      />
      <button id="btnLogin" onClick={Login}>
        Login
      </button>
      <button id="btnSignUp" onClick={SignUp}>
        SignUp
      </button>
      <button id="btnLogOut" onClick={SignOut}>
        LogOut
      </button>
    </div>
  );
};
