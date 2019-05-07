import React, { useState, useEffect } from "react";

/*
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {};

  const handleChange = event => {
    const { value, name } = event.target;
    if (name === "username") setUsername(value);
    else if (name === "password") setPassword(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input value={username} name="username" onChange={handleChange} />

        <label>password</label>
        <input
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
        />

        <input type="submit" value="login" />
      </form>
    </div>
  );
};

*/

const LoginForm = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });

  const handleSubmit = event => {
    event.preventDefault();
  };

  const handleChange = event => {
    const { value, name } = event.target;

    setInputs(inputs => {
      return { ...inputs, [name]: value };
    });
  };

  useEffect(() => {
    console.log("did mount");
  }, []);

  useEffect(() => {
    console.log("username change");
  }, [inputs.username]);

  useEffect(() => {
    // triggered every time there is a new render
    // equivalent to componentDidMount and componentDidUpdate
    console.log("render");

    // optional
    return () => {
      // triggered everytime BEFORE a new render
      // equivalent to componentWillUnmount
      // => CLEANUP
      console.log("cleanup");
    };
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>username</label>
        <input
          value={inputs.username}
          name="username"
          onChange={handleChange}
        />

        <label>password</label>
        <input
          value={inputs.password}
          name="password"
          onChange={handleChange}
          type="password"
        />

        <input type="submit" value="login" />
      </form>

      {/* <Children username={username} /> */}
    </div>
  );
};

export default LoginForm;
