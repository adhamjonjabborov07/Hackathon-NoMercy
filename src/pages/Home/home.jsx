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
                  Book appointment
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
                <button className="btn1" type="button">
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
              <div className="service-card">
                <div className="service-icon">
                  <img
                    src="./src/pages/Home/images/as.svg"
                    alt="Sports Injury"
                  />
                </div>
                <div className="service-title">
                  <p>Sports Injury</p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <img
                    src="./src/pages/Home/images/sa.svg"
                    alt="Lung Diseases"
                  />
                </div>
                <div className="service-title">
                  <p>Lung Diseases</p>
                </div>
              </div>

              <div className="service-card">
                <div className="service-icon">
                  <img src="./src/pages/Home/images/sa.svg" alt="Eye Care" />
                </div>
                <div className="service-title">
                  <p>Eye Care</p>
                </div>
              </div>
            </div>
            <div className="btn-container1">
              <button className="btn1" type="button">
                View More
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="text-container2">
              <div>
                <img src="./src/pages/Home/images/ij.png" alt="" />
              </div>
              <div>
                <div>
                  <p className="text1">Find Support for Your Mental Health</p>
                </div>
                <div>
                  <p className="text2">
                    Connect with others facing similar challenges through guided
                    group sessions. These support circles offer a safe space to
                    share, listen, and grow together while managing anxiety,
                    depression, and emotional wellbeing.
                  </p>
                </div>
                <div className="btn-container">
                  <button className="btn1" type="button">
                    Read More
                  </button>
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
