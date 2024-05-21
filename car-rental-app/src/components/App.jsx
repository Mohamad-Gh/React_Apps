import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VehicleModel from "./pages/VehicleModel/VehicleModel";
import OurTeam from "./pages/OurTeam/OurTeam";
import About from "./pages/About/About";
import TestimonialsPage from "./pages/TestimonialsPage/TestimonialsPage";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Routes>
        <Analytics />

        <Route path="/" element={<HomePage />} />
        <Route path="/Vehicle Model" element={<VehicleModel />} />
        <Route path="/Testimonials" element={<TestimonialsPage />} />
        <Route path="/Our Team" element={<OurTeam />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
