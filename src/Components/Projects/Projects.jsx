import "./Projects.css";
import CardProject from "../CardProject/CardProject";
import Data from "../../Data/Data";
import TitleSection from "../TitleSection/TitleSection";
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonShow from "../ButtonShow/ButtonShow";

const Projects = ({ showAll = false }) => {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });

  const projectsToShow = showAll ? Data : Data.slice(0, 6);

  return (
    <div id="projects" className="projects-container">
      <TitleSection title="My Projects" />

      <div
        className="projects-cards"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          margin: "auto",
          gap: "2rem",
        }}
      >
        {projectsToShow.map((item) => (
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            key={item.id}
          >
            <CardProject
              title={item.title}
              desc={item.desc}
              img={item.img}
              demo={item.demo}
              git={item.git}
            />
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="btn-show-projects">
          <ButtonShow title="Show All Projects" link="/projects" />
        </div>
      )}
    </div>
  );
};

export default Projects;