import { useContext, useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const [{ theme }] = useContext(ThemeContext);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);
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
      <div
        style={{
          backgroundColor: theme.backgroundColor,
        }}
        className={scrolled ? "nav-wrapper scrolled" : "nav-wrapper"}
      >
        <div className="nav-content">
          <Logo />
          <ul>
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
