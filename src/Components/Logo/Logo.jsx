import "./Logo.css";
import { FaLaptopCode } from "react-icons/fa";
const Logo = () => {
  return (
    <a href="/home" className="logo">
      <h2>
        R
        <div className="icon-logo">
          <FaLaptopCode />
        </div>
        NIM
      </h2>
    </a>
  );
};

export default Logo;
