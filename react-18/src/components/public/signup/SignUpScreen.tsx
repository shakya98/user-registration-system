import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from './SignUpForm';

const SignUpScreen: React.FC = () => {
  return (
    <div>
      <Link to="/">Back to Login</Link>
      <SignUpForm />
    </div>
  );
};

export default SignUpScreen;
