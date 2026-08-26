import Nav from "./Portfolio/Nav";
import Header from "./Header/Header";
import CoreSkills from "./CoreSkills/CoreSkills";
import ITSkills3D from "./ITSkills/ITSkills";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import ProjectShowcase from "./ProjectShow/ProjectShow";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      {" "}
      <main className="pt-1">
        {" "}
        <section id="home">
          <Nav /> <Header />{" "}
        </section>{" "}
        <section id="skills">
          {" "}
          <CoreSkills />{" "}
        </section>{" "}
        <section id="stack">
          {" "}
          <ITSkills3D />{" "}
        </section>{" "}
        <section id="education">
          {" "}
          <Education />{" "}
        </section>{" "}
        <section id="experience">
          {" "}
          <Experience />{" "}
        </section>{" "}
        <section id="projects">
          {" "}
          <ProjectShowcase />{" "}
        </section>{" "}
        <section id="contact">
          {" "}
          <Contact />{" "}
        </section>{" "}
      </main>{" "}
      <Footer />{" "}
    </div>
  );
}
export default App;
