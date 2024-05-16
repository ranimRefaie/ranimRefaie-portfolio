import { useContext, useState } from "react";
import "./Navbar.css";
import { FiAlignJustify } from "react-icons/fi";
import MobileNav from "../MobileNav/MobileNav";
import { IoClose } from "react-icons/io5";
import BottonTheme from "../BottonTheme/BottonTheme";
import { ThemeContext } from "../../Contexts/Themes";
import Logo from "../Logo/Logo";
import DataNav from "../../Data/DataNav";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [{ theme }] = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  AOS.init({
    easing: "ease-in-sine",
    delay: 0,
    duration: 750,
  });
  return (
    <div data-aos="fade-down">
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <div className="nav-wrapper">
        <div className="nav-content">
          <Logo />
          <ul
            style={{
              backgroundColor: theme.backgroundColor,
            }}
          >
            {DataNav.map((item) => (
              <li key={item.id}>
                <a
                  style={{
                    color: theme.color,
                  }}
                  href={item.to}
                >
                  {item.item}
                </a>
              </li>
            ))}
          </ul>
          <BottonTheme className="btn-mode" />
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? <IoClose /> : <FiAlignJustify />}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
