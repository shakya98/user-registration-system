import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginScreen: React.FC = () => {
  return (
    <div>
      <h1>ABC COMPANY</h1>
      <LoginForm />
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default LoginScreen;
