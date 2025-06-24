
import { useContext } from 'react';
import { ThemeContext } from "../Contexts/Themes"
import Footer from '../Components/Footer/Footer';
import SecProjects from '../Components/Projects/Projects'
import BottonTheme from '../Components/BottonTheme/BottonTheme';
import { Link } from 'react-router';
import { FaArrowLeft } from "react-icons/fa";
import '../Components/Projects/Projects.css'
export const Projects = () => {
    const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  return (
    <div
      className="app"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
     <div className="nav-projects">
      <Link to='/' className='btn-back'><FaArrowLeft />Back to Home</Link>
      <BottonTheme className="btn-mode" />
     </div>

      <div className="container">
       <SecProjects showAll={true}/>
      </div>
      <Footer/>
    </div>
  )
}
