import { useContext } from "react"
import AboutMe from "../Components/AboutMe/AboutMe"
import Certificates from "../Components/Certificates/Certificates"
import Contact from "../Components/Contact/Contact"
import Hero from "../Components/Hero/Hero"
import Projects from "../Components/Projects/Projects"
import Skills from "../Components/Skills/Skills"
import { ThemeContext } from "../Contexts/Themes"
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"


export const Home = () => {
      const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <Navbar/>

      <div className="container">
        <Hero id="" />
        <AboutMe />
        <Skills />
        <Projects showAll={false}/>
        <Certificates />
        <Contact />
      </div>
      <Footer/>
    </div>
  )
}
