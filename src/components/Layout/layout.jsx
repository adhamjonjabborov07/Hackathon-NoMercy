import React from "react";
import Header from "../Header/Header";
import Footer from "../footer/footer";
import "./layout.css"
function Layout({ children }) {
  return (
    <div className="bg">
      <div className="conatiner">
      <Header />
      {children}
      <Footer />
    </div>
    </div>
  );
}

export default Layout;
