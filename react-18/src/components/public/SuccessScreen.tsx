import React from 'react';
import { Link } from 'react-router-dom';

const SuccessScreen: React.FC = () => {
  return (
    <div>
      <p>Sign In success</p>
      <Link to="/">Go to Login</Link>
    </div>
  );
};

export default SuccessScreen;
