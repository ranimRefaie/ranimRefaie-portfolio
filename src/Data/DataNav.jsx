import { FaHome } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { PiListStarFill } from "react-icons/pi";
import { GrProjects } from "react-icons/gr";
import { LiaCertificateSolid } from "react-icons/lia";
import { SiMinutemailer } from "react-icons/si";

const DataNav = [
  { id: 1, item: "Home", to: "#home", icon: <FaHome className="icon" /> },
  { id: 2, item: "About Me", to: "#about", icon: <FaExclamationCircle className="icon" /> },
  {
    id: 3,
    item: "Skills",
    to: "#skills",
    icon: <PiListStarFill className="icon" />,
  },
  {
    id: 4,
    item: "Projects",
    to: "#projects",
    icon: <GrProjects className="icon" />,
  },
  {
    id: 5,
    item: "Certificates",
    to: "#certificates",
    icon: <LiaCertificateSolid className="icon" />,
  },
  {
    id: 6,
    item: "Contact",
    to: "#contact",
    icon: <SiMinutemailer className="icon" />,
  },
];

export default DataNav;
