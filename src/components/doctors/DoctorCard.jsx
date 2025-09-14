import React from "react";
import "./DoctorCard.css";

function DoctorCard({ image, name, specialty }) {
  return (
    <div className="doctorCard">
      <img src={image} alt={name} className="doctorImg" />
      <div className="doctorInfo">
        <h4>{name}</h4>
        <p>{specialty}</p>
      </div>
    </div>
  );
}

export default DoctorCard;
