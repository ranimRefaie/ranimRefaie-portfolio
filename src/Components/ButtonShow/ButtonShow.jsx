import "./ButtonShow.css";
import { motion } from "framer-motion";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const ButtonShow = () => {
  return (
    <motion.a href="#projects" className="btn-cv" whileInView={{ scale: 1.1 }}>
      Previous Projects
      <LuArrowUpRightFromCircle className="icon" />
    </motion.a>
  );
};

export default ButtonShow;
