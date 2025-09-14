import DoctorCard from "../../components/doctors/DoctorCard";
import "./Doctors.css";
import ch1 from "../Doctors/img/ch1.png";
import ch2 from "../Doctors/img/ch2.png";
import ch3 from "../Doctors/img/ch3.png";
import ch4 from "../Doctors/img/ch4.png";
import ch5 from "../Doctors/img/ch5.png";
import ch6 from "../Doctors/img/ch6.jpg";
import ch7 from "../Doctors/img/ch7.png";
import ContactForm from "../../components/consult/contactform";
import ch8 from "../Doctors/img/ch8.png";

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

          <DoctorCard image={ch3} name="Dr. Kimberly" specialty="Neurology" />

          <DoctorCard
            image={ch4}
            name="Dr. Bella Carol"
            specialty="Obstetrics"
          />
        </div>
        <div className="lineDoc2">
          <DoctorCard
            image={ch5}
            name="Dr. Rebecca Rose"
            specialty="Gynecology"
          />
          <DoctorCard
            image={ch6}
            name="Dr. Stephanie Sue"
            specialty="Haematology"
          />

          <DoctorCard
            image={ch7}
            name="Dr. Penelope"
            specialty="Physiotherapy"
          />

          <DoctorCard image={ch8} name="Dr. Lauren Leah" specialty="Oncology" />
        </div>
      </div>
      <ContactForm />
    </>
  );
}

export default Doctors;
