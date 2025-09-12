import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";


function Header() {

  return (
    <header>
      <nav>
          <Link to={"/"}>
           home
          </Link>
          <Link className="pages-style" to={"/contact"}>Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
