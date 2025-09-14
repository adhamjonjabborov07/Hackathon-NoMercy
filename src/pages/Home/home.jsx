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
              <img
                className="img1"
                src="./src/pages/Home/images/doctor.png"
                alt=""
              />
            </div>
          </div>
        </section>
        <section>
          <div className="text-container2">
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
              <div className="btn-container">
                <button className="btn2" type="button">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="div-p1">
              <p>Highly innovativetechnology & services</p>
            </div>
            <div className="main-card">
              <div className="card">
                <div>
                  <img src="./src/pages/Home/images/icon.svg" alt="" />
                </div>
                <div className="div-p">
                  <p>Cardiology</p>
                </div>
              </div>
              <div className="card1">
                <div className="div-p">
                  <p>
                    Radiology uses medical imaging, like X-rays and MRIs, to
                    diagnose and treat diseases, allowing doctors to visualize
                    internal body structures.
                  </p>
                </div>
              </div>
              <div className="card">
                <div>
                  <img src="./src/pages/Home/images/sa.svg" alt="" />
                </div>
                <div className="div-p">
                  <p>Gynecology</p>
                </div>
              </div>
            </div>
            <div className="main-card">
              <div className="card">
                <div>
                  <img src="./src/pages/Home/images/as.svg" alt="" />
                </div>
                <div className="div-p">
                  <p>Cardiology</p>
                </div>
              </div>
              <div className="card">
                <div className="div-p">
                  <div>
                    <img src="./src/pages/Home/images/eye.svg" alt="" />
                  </div>
                  <p>Lung Diseases</p>
                </div>
              </div>
              <div className="card">
                <div>
                  <img src="./src/pages/Home/images/sa.svg" alt="" />
                </div>
                <div className="div-p">
                  <p>Gynecology</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
