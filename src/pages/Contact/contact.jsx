import "./contact.css";
import email1 from "../Contact/img/Email.png";
import addres1 from "../Contact/img/Address.png";

function Contact() {
  return (
    <>
      <div className="cont1">
        <h1>Contact us</h1>
        <p>
          Letraset sheets containing Lorem Ipsum passages and more recently with
          desktop publishing
        </p>
      </div>


      <div className="cont2">
        <div className="conT2">
          <div className="imgCont">
            <img src={email1} alt="email" />
            <div className="emailInfo">
              <h6>Email US</h6>
              <p>
                Feel free to contact us at{" "}
                <a href="mailto:info@nicktio.com">info@nicktio.com</a> we’ll
                respond promptly
              </p>
            </div>
          </div>

          <div className="imgCont">
            <img src={addres1} alt="address" />
            <div className="emailInfo">
              <h6>Address</h6>
              <p>
                Ganesh Glory, Gota, Ahmedabad, Gujarat 382481
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* карта */}
      <div className="mapContainer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.1412546499564!2d72.50740497525841!3d23.124682913508774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84e9e3a2d3f1%3A0x3fa8d5b6cb3acb9b!2sGANESH%20GLORY%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1694523145612!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </>
  );
}

export default Contact;
