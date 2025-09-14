import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>404</h1>
      <h2>Sahifa topilmadi</h2>
      <p>
        Siz qidirayotgan sahifa mavjud emas. 
        <br />
        <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
          Bosh sahifaga qaytish
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
