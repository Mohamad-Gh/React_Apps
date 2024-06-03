import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Main from "../../Main/Main";

function HomePage(props) {
  return (
    <div>
      <Header />
      <Main
        onClick={(event) => {
          props.id(event.currentTarget.id);
          console.log(event.target.id);
        }}
      />
      <Footer />
    </div>
  );
}

export default HomePage;
