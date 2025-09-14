import React, { useRef, useState } from "react";
import "./home.css";
function Home() {
  return (
    <>
      <main>
        <section>
            <div className="text-container">
              <div className="text">
                <p className="p1">Advanced Healthcare Made Personal</p>
                <p className="p2">
                  Letraset sheets containing Lorem Ipsum passages and more
                  recently with desktop publishing
                </p>
                <div>
                  <button className="btn1" type="button">
                    <a href="#">Book appointment</a>
                  </button>
                </div>
              </div>

              <div>
                <img src="./src/pages/Home/images/doctor.png" alt="" />
              </div>
            </div>
         
        </section>
      </main>
    </>
  );
}

export default Home;
