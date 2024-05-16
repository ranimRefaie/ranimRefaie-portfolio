import "./Skills.css";
import TitleSection from "../TitleSection/TitleSection";
import AOS from "aos";
import "aos/dist/aos.css";

import html from "../../assets/html.svg";
import css from "../../assets/css-3.svg";
import js from "../../assets/js.svg";
import bootstrap from "../../assets/bootstrap.svg";
import tailwind from "../../assets/tailwind.svg";
import react from "../../assets/react.svg";

const Skills = () => {
  AOS.init({
    easing: "ease-out-sine",
    delay: 0,
    duration: 500,
  });
  return (
    <div
      id="skills"
      data-aos="fade-down"
      style={{ width: "80%", margin: "8rem auto" }}
    >
      <TitleSection title="My Skills" />
      <div className="skills-container">
        <img
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          src={html}
          alt=""
        />
        <img
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          src={css}
          alt=""
        />
        <img
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          src={js}
          alt=""
        />
      </div>
      <div className="skills-container">
        <img
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          src={bootstrap}
          alt=""
        />
        <img
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          src={tailwind}
          alt=""
        />
        <img
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          src={react}
          alt=""
        />
      </div>
    </div>
  );
};

export default Skills;
