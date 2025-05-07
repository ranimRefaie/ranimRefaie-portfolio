
import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./Contexts/Themes";

import { Home } from "./pages/Home";
import { Route, Routes } from "react-router";
import { Projects } from "./pages/Projects";
const App = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
     <div
         className="app"
         style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
       >
         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/projects" element={<Projects/>} />
         </Routes>
       </div>
  );
};

export default App;
