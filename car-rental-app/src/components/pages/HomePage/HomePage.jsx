import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Main from "../../Main/Main";

function HomePage(props) {
  return (
    <div>
      <Header />
      <Main id={props.id} />
      <Footer />
    </div>
  );
}

export default HomePage;
