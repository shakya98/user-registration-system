import React from "react";
import { Link } from "react-router-dom";

const SuccessScreen: React.FC = () => {
  return (
    <div className="bg-color-1 login-main main-height-1">
      <div className="login-div">
        <div className="login-form bg-color-2">
          <img
            src="../../img/tick.PNG"
            width="35rem"
            height="33rem"
            alt="tick"
          />
          <h1 className="text-color-3 text-0">Congratulations</h1>
          <p className="text-color-3 text-2">
            Your account has been created successfully
          </p>
          <Link className="btn btn-primary block mb-4 text-2" to="/">
            Go to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;
