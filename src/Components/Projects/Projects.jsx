import "./Projects.css";
import CardProject from "../CardProject/CardProject";
import Data from "../../Data/Data";
import TitleSection from "../TitleSection/TitleSection";
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });
  return (
    <div id="projects" className=" projects-container">
      <TitleSection title="My Projects" />
      <div
        className="projects-cards"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          margin: " auto",
          gap: "2rem",
        }}
      >
        {Data.map((item) => (
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
    </div>
  );
};

export default Projects;
