import React from "react";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";

const SignUpScreen: React.FC = () => {
  return (
    <div className="bg-color-1 login-main">
      <SignUpForm />
    </div>
  );
};

export default SignUpScreen;
