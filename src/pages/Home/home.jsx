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
        <section>
          <div>
            <img src="./src/pages/Home/images/doctor1.png" alt="" />
            <div>
              <p className="text1">The Heart and Science Of Medicine Service</p>
              <p className="text2">
                Letraset sheets containing Lorem Ipsum passages and more
                recently with desktop publishing Various versions have evolved
                over the years, sometimes by accident, sometimes chunks as
                necessary making desktop publishing Various versions have
                evolved over the years, sometimes by accident.
              </p>
              <div>
                <button className="btn2" type="button"></button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
