import React from "react";
import Header from "../Header/Header";
import Footer from "../footer/footer";
import "./layout.css"
function Layout({ children }) {
  return (
    <div className="conatiner">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
