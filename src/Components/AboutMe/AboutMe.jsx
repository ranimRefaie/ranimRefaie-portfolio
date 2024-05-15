import "./AboutMe.css";
import about_1 from "../../assets/7.jpg";
import ButtonDownload from "../ButtonDownload/ButtonDownload";
import TitleSection from "../TitleSection/TitleSection";
import ButtonHire from "../ButtonHire/ButtonHire";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  AOS.init({
    easing: "ease-out-quart",
    delay: 0,
    duration: 750,
  });
  return (
    <div data-aos="fade-up" id="about" className="about-container">
      <TitleSection title="About Me" />
      <div className="content-about">
        <div className="left-about">
          <img src={about_1} alt="" />
        </div>
        <div data-aos="zoom-in-up" className="right-about">
          <p>
            I am a frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with HTML, CSS, JavaScript, React and Git. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set. I am a team player and I am excited to work with others to
            create amazing applications.
          </p>
          <div
            className="buttons-about"
            style={{ display: "flex", gap: "2rem" }}
          >
            <ButtonDownload
              text="Download CV"
              link="https://ranimrefaie.github.io/ranimRefaie-portfolio/ranim_alrefaie.pdf"
              name="RanimAlrefaie.pdf"
            />
            <ButtonHire />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
