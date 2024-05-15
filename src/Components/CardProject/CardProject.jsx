import "./CardProject.css";
import { BsGlobe } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { motion } from "framer-motion";

const CardProject = ({ img, title, desc, demo, git }) => {
  return (
    <motion.div
      className="cards"
      initial={{ y: "100vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 0.1, duration: 1, type: "spring", stiffness: 40 }}
    >
      <div className="profile-pic">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <div className="content">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className="buttons">
          <a href={git}>
            <BsGithub className="icon" />
            Code
          </a>
          <a href={demo}>
            <BsGlobe className="icon" />
            Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CardProject;
