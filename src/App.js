import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Header from "./components/Header";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
import SkillsHobbies from "./components/SkillsHobbies";
import WorkExperiance from "./components/WorkExperiance";
import Education from "./components/Education";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      {/* <div className="bg-image"></div> */}
      <CustomNavbar />
      <Header />
      <hr id="about-me" className="hr-under" />
      <About />
      <hr id="my-project" className="hr-under" />
      <MyProjects />
      <hr id="skill-hobbies" className="hr-under" />
      <SkillsHobbies />
      <hr id="experiances" className="hr-under" />
      <WorkExperiance />
      <hr id="educations" className="hr-under" />
      <Education />
      <hr id="educations" className="hr-under" />
      <Footer />
    </div>
  );
};

export default App;
