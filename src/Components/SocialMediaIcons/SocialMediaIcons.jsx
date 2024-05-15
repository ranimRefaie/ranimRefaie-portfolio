import "./SocialMediaIcons.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const SocialMediaIcons = () => {
  const Data = [
    {
      id: 1,
      item: <FaFacebook className="icon" />,
      link: " https://www.facebook.com/ranem.alrefaie?mibextid=b06tZ0",
    },
    {
      id: 2,
      item: <FaInstagram className="icon" />,
      link: "https://dev.to/sakhnyuk/300-react-interview-questions-2ko4",
    },
    {
      id: 3,
      item: <FaLinkedinIn className="icon" />,
      link: "www.linkedin.com/in/ranim-alrefaie-a2ba741bb",
    },
    {
      id: 4,
      item: <FaGithub className="icon" />,
      link: "https://github.com/ranimRefaie",
    },
  ];
  AOS.init({
    easing: "ease-in-sine",
    delay: 0,
    duration: 750,
  });
  return (
    <ul className="social-media">
      {Data.map((item) => (
        <li key={item.id}>
          <a href={item.link}>{item.item}</a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaIcons;
