import "./contact.css";
import email1 from "../Contact/img/Email.png";
import addres1 from "../Contact/img/Address.png";
import ContactForm from "../../components/consult/contactform";

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
              <p>Ganesh Glory, Gota, Ahmedabad, Gujarat 382481</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mapContainer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24009.36310898723!2d69.18401031083982!3d41.21805720000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6100178c5865%3A0xa067c18e46831c43!2sOOO%20%22Exclusive%20Medical%22!5e0!3m2!1sen!2s!4v1757831416600!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        />
      </div>
      <ContactForm />
    </>
  );
}

export default Contact;
