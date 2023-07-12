import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Header from "./components/Header";
// import Skills from "./components/Skills";
import About from "./components/About";
import MyProjects from "./components/MyProjects";
import SkillsHobbies from "./components/SkillsHobbies";

const App = () => {
  return (
    <div className="App">
      <div className="bg-image"></div>
      <CustomNavbar />
      <Header />
      <hr id="about-me" className="hr-under" />
      <About />
      <hr id="my-project" className="hr-under" />
      <MyProjects />
      <hr id="skill-hobbies" className="hr-under" />
      <SkillsHobbies />
    </div>
  );
};

export default App;
