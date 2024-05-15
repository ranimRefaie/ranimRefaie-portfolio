import "./ButtonDownload.css";
import { motion } from "framer-motion";
import { FaCloudArrowDown } from "react-icons/fa6";

const ButtonDownload = ({ text, link, name }) => {
  return (
    <motion.a
      className="btn-cv"
      whileInView={{ scale: 1.1 }}
      href={link}
      download={name}
    >
      <FaCloudArrowDown className="icon" />
      <span>{text}</span>
    </motion.a>
  );
};

export default ButtonDownload;
