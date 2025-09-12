import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/contact";
import Home from "./pages/Home/home";
import Layout from "./components/Layout/layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout> <Home/> </Layout>} />
      <Route path="/contact" element={<Layout> <Contact/> </Layout>}  />
    </Routes>
  );  
}

export default App;
