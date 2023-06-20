import "./App.css";
import Hero from "./component/Hero/Hero";
import Goals from "./component/Goals/Goals";
import Questions from "./component/Questions/Questions";
import Activities from "./component/Activities/Activities";
import Ideas from "./component/Ideas/Ideas";
import Guarantee from "./component/Guarantee/Guarantee";
import ProgramSlid from "./component/ProgramSlid/ProgramSlid";
import Form from "./component/Form/Form";
import Footer from "./component/Footer/Footer";
import Sommaire from "./component/Sommaire/Sommaire";
import Faq from "./component/Faq/Faq";

function App() {
  return (
    <div className="App">
      <div className="section">
        <Hero />
        <Goals />
      </div>
      <Questions />
      <div className="section">
        <Activities />
      </div>
      <Ideas />
      <div className="section1">
        <Guarantee />
        <Sommaire/>
        <ProgramSlid />
        <Form />
        <Faq/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
