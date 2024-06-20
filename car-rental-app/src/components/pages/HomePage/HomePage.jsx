import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Main from "../../Main/Main";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function HomePage(props) {
  const location = useLocation();
  const scrollToSection = location.state?.fromClick;
  useEffect(() => {
    const element = document.getElementById(scrollToSection);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
  return (
    <div>
      <Header />
      <Main id={props.id} />
      <Footer />
    </div>
  );
}

export default HomePage;
