import React, { useState, useEffect } from "react";
import axios from "axios";

const SignUpForm: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isEmailAvailable = await checkEmailAvailability(email);
    console.log(isEmailAvailable);
    if (isEmailAvailable == true) {
      alert("Email is not available. Please choose a different email.");
      return;
    }

    const userData = {
      email,
      first_name: firstName,
      last_name: lastName,
      mobile_number: mobileNumber,
      password,
      confirm_password: confirmPassword,
      dob: dateOfBirth,
    };

    try {
      const response = await axios.post(
        "https://mditest.elifeamerica.com/api/v1/register",
        userData
      );
      console.log("Registration successful!", response.data);

      window.location.href = "/success";
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  const checkEmailAvailability = async (email: string) => {
    try {
      const response = await axios.get(
        `https://mditest.elifeamerica.com/api/v1/email/check/${email}`
      );
      return response.data.result.exist;
    } catch (error) {
      console.error("Email availability check error:", error);
      return false;
    }
  };

  return (
    <>
      <div className="login-div">
        <div className="login-headings">
          <a className="text-color-5 text-0" href="/">
            {" < "}Create Account
          </a>
        </div>
        <form className="login-form bg-color-2" onSubmit={handleSubmit}>
          <h1 className="navbar-brand text-0 text-center">ABC COMPANY</h1>
          <div className="row">
            <div className="col-md-6 mb-1">
              <div className="form-outline mb-1">
                <label
                  className="form-label text-color-3 text-2 login-label"
                  htmlFor="firstName"
                >
                  First Name
                </label>
                <input
                  className="form-control login-input"
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-6 mb-1">
              <div className="form-outline mb-1">
                <label
                  className="form-label text-color-3 text-2 login-label"
                  htmlFor="lastName"
                >
                  Last Name
                </label>
                <input
                  className="form-control login-input"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="form-outline mb-1">
            <label
              className="form-label text-color-3 text-2 login-label"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="form-control login-input"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-outline mb-1">
            <label
              className="form-label text-color-3 text-2 login-label"
              htmlFor="mobileNumber"
            >
              Mobile Number
            </label>
            <input
              className="form-control login-input"
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>

          <div className="form-outline mb-1">
            <label
              className="form-label text-color-3 text-2 login-label"
              htmlFor="dateOfBirth"
            >
              Date of Birth
            </label>
            <input
              className="form-control login-input"
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
          </div>

          <div className="form-outline mb-1">
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

          <div className="form-outline mb-1">
            <label
              className="form-label text-color-3 text-2 login-label"
              htmlFor="confirmPassword"
            >
              Set Password
            </label>
            <input
              className="form-control login-input"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary block mb-1 text-2">
            Create Account
          </button>
        </form>
      </div>
    </>
  );
};

export default SignUpForm;
