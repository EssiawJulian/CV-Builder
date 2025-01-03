import { useState } from "react";
import genIcon from "./assets/account.svg";
import eduIcon from "./assets/school-outline.svg";
import satIcon from "./assets/cog-outline.svg";
import expIcon from "./assets/briefcase-outline.svg";
import prjIcon from "./assets/lightbulb-on-outline.svg";

function Aside() {
  const [active, setActive] = useState("gen-info");

  const handleClick = (str) => {
    setActive(str);
  };

  return (
    <div className="aside">
      <header>TechResumeGen</header>
      <ul className="resume-category">
        {/* General Info List*/}
        <li
          className={`gen-info + ${active === "gen-info" ? "active" : ""}`}
          onClick={() => handleClick("gen-info")}
        >
          <img src={genIcon} alt="Account Icon" /> General Information
        </li>

        {/* Education List */}
        <li
          className={`edu + ${active === "edu" ? "active" : ""}`}
          onClick={() => handleClick("edu")}
        >
          <img src={eduIcon} alt="School Outline" /> Education
        </li>

        {/* Skills and Technology List */}
        <li
          className={`skills-and-tech + ${active === "s&t" ? "active" : ""}`}
          onClick={() => handleClick("s&t")}
        >
          <img src={satIcon} alt="Gear Icon" />
          Skills & Technology
        </li>

        {/* Experience List */}
        <li
          className={`experience + ${active === "experience" ? "active" : ""}`}
          onClick={() => handleClick("experience")}
        >
          <img src={expIcon} alt="Briefcase Icon" />
          Experience
        </li>

        {/* Projects List */}
        <li
          className={`projects + ${active === "projects" ? "active" : ""}`}
          onClick={() => handleClick("projects")}
        >
          <img src={prjIcon} alt="Lightbulb switched on icon" />
          Projects
        </li>
      </ul>
    </div>
  );
}

export { Aside };
