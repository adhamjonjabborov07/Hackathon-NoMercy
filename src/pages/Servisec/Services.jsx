import React from "react";
import { Link } from "react-router-dom";
function Services() {
  return (
    <main>
      <section>
        <div className="services-header">
          <h1>Services</h1>
          <p>
            Letraset sheets containing Lorem Ipsum passages and more recently
            with desktop publishing
          </p>
          <nav className="breadcrumb">
            <Link to={"/"}>Home</Link> <span>Services</span>
          </nav>
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
             <div className="card">
              <div>
                <img src="./src/pages/Home/images/sa.svg" alt="" />
              </div>
              <div className="div-p">
                <p>Gynecology</p>
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
                <img src="./src/pages/Home/images/as.svg" alt="Sports Injury" />
              </div>
              <div className="service-title">
                <p>Sports Injury</p>
              </div>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <img src="./src/pages/Home/images/sa.svg" alt="Lung Diseases" />
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
      <section className="kontakt">
        <div className="contactSection">
          {/* Левая часть */}
          <div className="contactInfo">
            <h2>Get quick free professional consultation</h2>

            <div className="infoBlock">
              <p>
                <strong>Mon-Fri :</strong> 9:00 am – 10:00 pm <br />
                <strong>Sat-Sun :</strong> 9:00 am – 8:00 pm
              </p>
            </div>

            <div className="infoBlock">
              <p>
                <strong>Phone :</strong> (+690) 2560 0020 <br />
                <strong>Email :</strong> booking@reshealthpoint.com
              </p>
            </div>

            <div className="infoBlock">
              <p>
                <strong>Phone :</strong> (+690) 2560 0020 <br />
                <strong>Email :</strong> booking@reshealthpoint.com
              </p>
            </div>

            <button className="mapBtn">📍 View Location Map</button>
          </div>

          {/* Правая часть */}
          <div className="formCard">
            <form>
              <div className="formRow">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email address" />
              </div>

              <div className="formRow">
                <input type="tel" placeholder="+91" />
                <input type="text" placeholder="Department" />
              </div>

              <div className="formRow">
                <input type="time" />
                <input type="date" />
              </div>

              <textarea placeholder="Anything else you wanna communicate"></textarea>

              <button type="submit" className="submitBtn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
