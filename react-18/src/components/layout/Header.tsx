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
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-1" href="/profile">
            ABC COMPANY
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            aria-label="Toggle navigation"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            data-mdb-target="#navbarSupportedContent"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>

            <ul className="navbar-nav d-flex flex-row me-1">
              <li className="nav-item">
                <a className="nav-link text-color-1 text-3" href="#">
                  {userInfo.patient.name}
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-color-2 text-3" to="/editprofile">
                  Edit Profile
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link text-color-2 text-3" onClick={handleSignOut}>
                  Sign Out
                </button>
              </li>
              <li className="nav-item me-3 me-lg-0">
                {userInfo.patient && userInfo.patient.profile_image && (
                  <img
                    src={userInfo.patient.profile_image.resource}
                    width="35rem"
                    height="33rem"
                    alt="User"
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
