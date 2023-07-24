import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmationScreen: React.FC = () => {
  return (
    <div>
      <p>Profile Updated Successfully</p>
      <Link to="/profile">Go to Main</Link>
    </div>
  );
};

export default ConfirmationScreen;
