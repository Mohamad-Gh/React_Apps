import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import VehicleModel from "./VehicleModel";
import Testimonials from "./Testimonials";
import OurTeam from "./OurTeam";
import About from "./About";
import Register from "./Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Vehicle Model" element={<VehicleModel />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Our Team" element={<OurTeam />} />
        <Route path="/About" element={<About />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
