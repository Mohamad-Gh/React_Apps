import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Main from "../../Main/Main";

function HomePage(props) {
  return (
    <div>
      <Header />
      <Main
        id={(event) => {
          props.id(event.target.id);
          console.log("id", event.target.id);
          console.log("current_id", event.currentTarget.id);
        }}
      />
      <Footer />
    </div>
  );
}

export default HomePage;
