import "./Hero.css";
import my_photo from "../../assets/profile-2.jpg";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/Themes";
import ButtonHire from "../ButtonHire/ButtonHire";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import { useTypewriter } from "react-simple-typewriter";
import ButtonShow from "../ButtonShow/ButtonShow";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [{ isDark }] = useContext(ThemeContext);

  const [typeEffect] = useTypewriter({
    words: ["Ranim Alrefaie", "Front End Developer"],
    loop: 10,
    typeSpeed: 200,
    deleteSpeed: 40,
  });
  AOS.init({
    easing: "ease-in-sine",
    delay: 0,
    duration: 750,
  });
  return (
    <section
      id="home"
      className={isDark ? "hero-container dark" : "hero-container light"}
    >
      <div data-aos="fade-right" className="hero-content">
        <h2 style={{ width: "auto", height: "5rem" }}>
          Hello, I'm
          <span>{typeEffect}</span>
        </h2>
        <p>
          I'm a front-end developer passionate about creating interactive and
          experiences on the web. Contact me if you'd like to learn more!
        </p>

        <SocialMediaIcons />

        <div
          data-aos="fade-up"
          className="buttons-hero"
          style={{ display: "flex", gap: "2rem" }}
        >
          <ButtonShow />
          <ButtonHire />
        </div>
      </div>

      <div data-aos="fade-left" className="my-photo">
        <img src={my_photo} alt="Ranim Alrefaie" />
      </div>
    </section>
  );
};

export default Hero;
