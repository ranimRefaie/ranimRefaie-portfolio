import "./MobileNav.css";
import BottonTheme from "../BottonTheme/BottonTheme";
import { ThemeContext } from "../../Contexts/Themes";
import { useContext } from "react";
import DataNav from "../../Data/DataNav";
import ButtonHire from "../ButtonHire/ButtonHire";
import Logo from "../Logo/Logo";

const MobileNav = ({ isOpen, toggleMenu }) => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div
          className="mobile-menu-coontainer"
          style={{ backgroundColor: theme.backgroundColor }}
        >
          <div className="top-menu">
            <Logo />
            <BottonTheme className="btn-mode" />
          </div>

          <div style={{ padding: "2rem" }}>
            <ul>
              {DataNav.map((item) => (
                <li key={item.id}>
                  <a
                    style={{
                      color: theme.color,
                    }}
                    href={item.to}
                  >
                    <span> {item.icon}</span>
                    {item.item}
                  </a>
                </li>
              ))}
            </ul>
            <ButtonHire />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
