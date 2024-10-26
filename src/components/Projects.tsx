import Hero from "./Projects/Project-Home";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ProjectNav from "./Projects/ProjectNav";

const Projects = () => {
  return (
    <div>
      <Navbar />

      <div className="mb-14 md:mb-0">
        <Hero />
      </div>
    <ProjectNav/>
      {/* <Footer /> */}
    </div>
  );
};

export default Projects;
