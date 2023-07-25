import React, { useState } from "react";
import axios from "axios";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://mditest.elifeamerica.com/oauth/token",
        {
          username,
          password,
          client_id,
          client_secret,
          scope: "",
          grant_type: "password",
        }
      );
      console.log(response.data.access_token);

      const access_token = response.data.access_token;
      localStorage.setItem("access_token", access_token);

      window.location.href = "/profile";
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <div className="login-div">
        <div className="login-headings">
          <h1 className="text-color-5 text-0">Welcome Back</h1>
          <h2 className="text-color-5 text-2">Login to your account</h2>
        </div>
        <form className="login-form bg-color-2" onSubmit={handleSubmit}>
          <h1 className="navbar-brand text-0 text-center">ABC COMPANY</h1>
          <div className="form-outline mb-4">
            <label
              className="form-label text-color-3 text-2 login-label"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              className="form-control login-input"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <label
              className="form-label text-color-3 text-2 login-label"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="form-control login-input"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary block mb-4 text-2">
            Login
          </button>

          <div>
            <p className="text-color-3 text-2 login-label">
              Still have no account?{" "}
              <a className="text-color-4 text-1" href="/signup">
                SIGN UP
              </a>{" "}
              now
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
