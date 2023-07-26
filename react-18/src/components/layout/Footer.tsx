import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="row ml-4 mr-4 footer-inner">
        <div className="col-md-4 mb-1">
          <p className="text-color-1">Version 1.0</p>
        </div>
        <div className="col-md-4 mb-1"></div>
        <div className="col-md-4 mb-1">
          <div className="row">
            <div className="col-md-4 mb-1 right-align">
              <p className="text-3 text-color-2">About</p>
            </div>
            <div className="col-md-4 mb-1 right-align">
              <p className="text-3 text-color-2">Privecy</p>
            </div>
            <div className="col-md-4 mb-1 right-align">
              <p className="text-3 text-color-2">Terms</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
