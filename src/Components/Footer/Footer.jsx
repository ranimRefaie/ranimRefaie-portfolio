import "./Footer.css";
import Logo from "../Logo/Logo";

import DataNav from "../../Data/DataNav";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

const Footer = () => {
  const Data1 = [
    { id: 1, item: "Home", link: "/home" },
    { id: 2, item: "About Me", link: "/about" },
    { id: 3, item: "Skills", link: "/skills" },
  ];
  const Data2 = [
    { id: 4, item: "Projects", link: "/projects" },
    { id: 5, item: "Contact", link: "/contact" },
    { id: 5, item: "Achievements & Certificates", link: "/certificates" },
  ];
  return (
    <div className="footer">
      <p>© 2024 All rights Reserved. -Designed by Ranim Alrefaie</p>
      <SocialMediaIcons />
    </div>
  );
};

export default Footer;
