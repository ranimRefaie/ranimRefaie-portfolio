import "./ButtonShow.css";
import { motion } from "framer-motion";
import { LuArrowUpRightFromCircle } from "react-icons/lu";

const ButtonShow = ({link, title}) => {
  return (
    <motion.a href={link} className="btn-cv" whileInView={{ scale: 1.1 }}>
      {title}
      <LuArrowUpRightFromCircle className="icon" />
    </motion.a>
  );
};

export default ButtonShow;
