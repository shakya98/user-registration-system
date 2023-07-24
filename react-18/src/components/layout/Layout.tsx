import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <div id="page-content-wrapper">{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
