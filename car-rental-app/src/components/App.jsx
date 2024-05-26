import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VehicleModel from "./pages/VehicleModel/VehicleModel";
import OurTeam from "./pages/OurTeam/OurTeam";
import About from "./pages/About/About";
import TestimonialsPage from "./pages/TestimonialsPage/TestimonialsPage";
import BookNow from "./pages/BookNow/BookNow";
import MoreInfo from "./pages/MoreInfo/MoreInfo";
// creating a context and put it here to act as global context
import { createContext, useState } from "react";

export const GlobalContext = createContext();

function App() {
  // use id and set id to pass the selected id on vehicle model page as global context to use in moreInfo and Booking car components
  const [id, setId] = useState(1);
  return (
    // here is how i used this
    <GlobalContext.Provider value={{ carId: id }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Vehicle Model" element={<VehicleModel id={setId} />} />
        <Route path="/Testimonials" element={<TestimonialsPage />} />
        <Route path="/Our Team" element={<OurTeam />} />
        <Route path="/About" element={<About />} />
        <Route path="/Vehicle Model/Book Now" element={<BookNow />} />
        <Route path="/Vehicle Model/More Info" element={<MoreInfo />} />
      </Routes>
    </GlobalContext.Provider>
  );
}

export default App;
