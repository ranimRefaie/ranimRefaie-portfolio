import "./App.css";
import { useContext } from "react";
import { ThemeContext } from "./Contexts/Themes";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Certificates from "./Components/Certificates/Certificates";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Navbar />

      <div className="container">
        <Hero id="" />
        <AboutMe />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
