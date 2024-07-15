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
    <div id="about" className="about-container">
      <TitleSection title="About Me" />
      <div className="content-about">
        <div data-aos="flip-up" className="left-about">
          <img src={about_1} alt="" />
        </div>
        <div className="right-about">
          <p data-aos="fade-up">
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
              link="https://drive.google.com/file/d/1A1NjtZ8UStMYeRQXK0cKNputb0JPfZJy/view?usp=drivesdk"
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
