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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <button type="submit">Create Account</button>
    </form>
  );
};

export default SignUpForm;
