import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import VehicleModel from "./VehicleModel";
import OurTeam from "./OurTeam";
import About from "./About";
import Registration from "./Registration";
import TestimonialsPage from "./TestimonialsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Vehicle Model" element={<VehicleModel />} />
        <Route path="/Testimonials" element={<TestimonialsPage />} />
        <Route path="/Our Team" element={<OurTeam />} />
        <Route path="/About" element={<About />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
