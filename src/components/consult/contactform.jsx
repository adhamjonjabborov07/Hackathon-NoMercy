import "./contactform.css";

function ContactForm() {
  return (
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
  );
}

export default ContactForm;
