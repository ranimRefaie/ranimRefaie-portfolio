import "./BottonTheme.css";
import { useContext, useState } from "react";
import { ThemeContext } from "../../Contexts/Themes";
import { MdLightMode } from "react-icons/md";
import { BsMoonStarsFill } from "react-icons/bs";

const BottonTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className="btn-mode" onClick={toggleMode}>
      <button type="button" onClick={toggleTheme}>
        {isDark ? <MdLightMode /> : <BsMoonStarsFill />}
      </button>
    </div>
  );
};

export default BottonTheme;
