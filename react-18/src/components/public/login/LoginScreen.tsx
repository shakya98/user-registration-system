import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';

const LoginScreen: React.FC = () => {
  return (
    <div className='bg-color-1 login-main'>
      <LoginForm />
    </div>
  );
};

export default LoginScreen;
