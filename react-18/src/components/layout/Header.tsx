import React from "react";
import { Link } from "react-router-dom";

interface Props {
  userInfo: any;
}

const Header: React.FC<Props> = ({ userInfo }) => {
  const handleSignOut = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  };

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Header">
      <p>{userInfo.patient.name}</p>
      <button onClick={handleSignOut}>Sign Out</button>
      <Link to="/editprofile">Edit Profile</Link>
      {userInfo.patient && userInfo.patient.profile_image && (
        <img src={userInfo.patient.profile_image.resource} alt="User" />
      )}
    </div>
  );
};

export default Header;
