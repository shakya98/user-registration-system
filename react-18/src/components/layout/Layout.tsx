import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
  userInfo:any;
}

const Layout: React.FC<Props> = ({ children, userInfo }) => {
  return (
    <>
      <Header userInfo={userInfo} />
      <div>
        <div id="page-content-wrapper">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
