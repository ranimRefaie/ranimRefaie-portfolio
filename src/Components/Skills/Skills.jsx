import "./Skills.css";
import TitleSection from "../TitleSection/TitleSection";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const tabs = [
  { id: "frontend", label: "🖥️ Front-End" },
  { id: "ui", label: "🎨 UI & Styling" },
  { id: "tools", label: "🛠️ Tools" },
  { id: "other", label: "🧠 Other" },
];

const skillsData = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "TypeScript"],
  ui: ["Tailwind CSS", "Bootstrap", "CSS Modules"],
  tools: ["Git", "GitHub", "GitLab", "VS Code", "Figma"],
  other: ["Responsive Design", "API Integration", "Context API", "React Hooks"],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");
  const getIcon = (label) => label.match(/^[^\w\s]+/)[0]; 
  const getText = (label) => label.replace(/^[^\w\s]+/, "").trim();

  return (
    <div id="skills" style={{ width: "90%", margin: "8rem auto" }} data-aos="fade-up">
      <TitleSection title="My Skills" />

      <div className="custom-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`custom-tab-button ${activeTab === tab.id ? "active" : ""}`}
          >
            <motion.span
              animate={activeTab === tab.id ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 0.5 }}
              style={{ display: "inline-block", marginRight: "0.5rem" }}
            >
              {getIcon(tab.label)}
            </motion.span>
            {getText(tab.label)}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          className="custom-skills-grid"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {skillsData[activeTab].map((skill, index) => (
            <div
              key={index}
              className="custom-skill-card"
              style={{
                background: "linear-gradient(180deg, rgba(21, 185, 185, 0.15), rgba(60, 29, 255, 0.15))",
              }}
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Skills;