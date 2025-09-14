import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/contact";
import Home from "./pages/Home/home";
import Layout from "./components/layout/layout";
import Notfound from "./pages/Notfound/Notfound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout> <Home/> </Layout>} />
      <Route path="/contact" element={<Layout> <Contact/> </Layout>}  />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );  
}

export default App;
