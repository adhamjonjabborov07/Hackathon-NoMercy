import React, { useState } from "react";
import "./contactform.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    department: "",
    time: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3001/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Сообщение отправлено в Telegram");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          department: "",
          time: "",
          date: "",
          message: "",
        });
      } else {
        alert("❌ Ошибка при отправке");
      }
    } catch (err) {
      alert("❌ Ошибка соединения с сервером");
    }
  };

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

        <button className="mapBtn">📍 View Location Map</button>
      </div>

      {/* Правая часть */}
      <div className="formCard">
        <form onSubmit={handleSubmit}>
          <div className="formRow">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="formRow">
            <input
              type="tel"
              name="phone"
              placeholder="+91"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <div className="formRow">
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Anything else you wanna communicate"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
