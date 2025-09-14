import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/contact";
import Home from "./pages/Home/home";
import Layout from "./components/layout/layout";
import Notfound from "./pages/Notfound/Notfound";
import SignIn from "./pages/SignIn/SignIn";
import signUp from "./pages/SignUp/SignUp";
import doctors from "./pages/Doctors/Doctors";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout> <Home/> </Layout>} />
      <Route path="/contact" element={<Layout> <Contact/> </Layout>}  />
      <Route path="*" element={<Notfound />} />
      <Route path="/login" element={<Layout><SignIn/></Layout>}/>
      <Route path="/signUp" element={<Layout><signUp/></Layout>}/>
      <Route path="/doctors" element={<Layout><doctors/></Layout>}/>
    </Routes>
  );  
}

export default App;
