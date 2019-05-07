import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {};

  const handleChangeUsername = event => {
    const { value } = event.target;
    setUsername(value);
  };

  const handleChangePassword = event => {
    const { value } = event.target;
    setPassword(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input value={username} onChange={handleChangeUsername} />

        <label>password</label>
        <input
          value={password}
          onChange={handleChangePassword}
          type="password"
        />

        <input type="submit" value="login" />
      </form>
    </div>
  );
};

export default LoginForm;
