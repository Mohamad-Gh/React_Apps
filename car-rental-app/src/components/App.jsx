import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VehicleModel from "./pages/VehicleModel/VehicleModel";
import OurTeam from "./pages/OurTeam/OurTeam";
import About from "./pages/About/About";
import TestimonialsPage from "./pages/TestimonialsPage/TestimonialsPage";
import BookNow from "./pages/BookNow/BookNow";
import MoreInfo from "./pages/MoreInfo/MoreInfo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Vehicle Model" element={<VehicleModel />} />
        <Route path="/Testimonials" element={<TestimonialsPage />} />
        <Route path="/Our Team" element={<OurTeam />} />
        <Route path="/About" element={<About />} />
        <Route path="/Vehicle Model/Book Now" element={<BookNow />} />
        <Route path="/Vehicle Model/More Info" element={<MoreInfo />} />
      </Routes>
    </>
  );
}

export default App;
