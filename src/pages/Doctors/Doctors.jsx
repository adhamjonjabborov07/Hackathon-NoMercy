import DoctorCard from "../../components/doctors/DoctorCard";
import "./Doctors.css";
import ch1 from "../Doctors/img/ch1.png";
import ch2 from "../Doctors/img/ch2.png";
import ch3 from "../Doctors/img/ch3.png";
import ch4 from "../Doctors/img/ch4.png";

function Doctors() {
  return (
    <>
      <div className="doc1">
        <h1>Meet our Doctors</h1>
        <p>
          Letraset sheets containing Lorem Ipsum passages and more recently with
          desktop publishing
        </p>
      </div>
      <div className="doc2">
        <h3>Team of doctors</h3>
        <p>Team of doctors</p>
        <div className="lineDoc">
          <DoctorCard
            image={ch1}
            name="Dr. Jessica Joan"
            specialty="Nephrology"
          />
          <DoctorCard
            image={ch2}
            name="Dr. Alexandra"
            specialty="Gastroenterology"
          />

          <DoctorCard
            image={ch3}
            name="Dr. Kimberly"
            specialty="Neurology"
          />

          <DoctorCard
            image={ch4}
            name="Dr. Bella Carol"
            specialty="Obstetrics"
          />
        </div>
      </div>
    </>
  );
}

export default Doctors;
