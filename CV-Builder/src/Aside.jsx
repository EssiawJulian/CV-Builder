import genIcon from "./assets/account.svg";
import eduIcon from "./assets/school-outline.svg";
import satIcon from "./assets/cog-outline.svg";
import expIcon from "./assets/briefcase-outline.svg";
import prjIcon from "./assets/lightbulb-on-outline.svg";

// Aside component that contains the navigation bar for the resume sections
function Aside({ active, setActive, setResumeInfo }) {
  const handleClick = (str) => {
    setActive(str);
  };

  const loadExample = () => {
    setResumeInfo(loadExampleTemplate());
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
          <img src={genIcon} alt="Account Icon" /> Personal Details
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
      <button className="loadExampleButton" onClick={loadExample}>
        Load Example Template
      </button>
    </div>
  );
}

// Function that returns an object with the example template
const loadExampleTemplate = () => ({
  fullName: "Julian Essiaw",
  email: "juliane@vt.edu",
  number: "123-456-7890",
  linkedInUrl: " linkedin.com/in/julianessiaw/",
  githubUrl: " github.com/EssiawJulian  ",
  languageArr: ["Java", "Python", "JavaScript", "HTML/CSS", "C"],
  techArr: [
    "Git",
    "Node.js",
    "Linux",
    "Regex",
    "Git-Hub",
    "Webpack",
    "Vite",
    "React",
  ],
  edu: {
    inst: "Virginia Polytechnic Institute and State University",
    degree: "B .S. - Computer Science                            ",
    location: "Blacksburg, VA ",
    expectedGrad: "May 2026",
    courseWork: [
      "Intro to Software Design",
      "Software Design & Data Structures",
      "Discrete Mathematics",
      "Linear Algebra",
      "Problem Solving in Computer Science",
      "Intro to Computer Organization",
    ],
  },
  experience: [
    {
      jobTitle: "Residential Well-being Student Leader ",
      company: "Virginia Tech, Blacksburg  ",
      startDate: "Aug 2023",
      endDate: "",
      description:
        "•\tCollaborated within a triad of student leaders to advise and support 150 students in residential buildings. \n•\tEnsured each resident has access to the resources they need to thrive mentally, socially, and financially, during their time on campus\n•\tWorked closely with other student leaders to develop relationships with residents and provide experiences that foster an environment of acceptance, diversity, inclusion, and belonging.\n•\tResponded to various emergencies within the residential facility, including medical incidents, fire alarms, and other critical situations, ensuring the safety and well-being of residents.\n",
    },
    {
      jobTitle: "Prompt Engineer ",
      company: "Scale AI\t",
      startDate: "May 2024",
      endDate: "Aug 2024",
      description:
        "•\tUtilized Side-by-Side (SxS) scoring to evaluate AI-generated responses, focusing on key dimensions for model improvement. \n•\tContributed to AI accuracy enhancement by providing detailed and structured feedback on response quality\n",
    },
    {
      jobTitle: "Production Technician",
      company: "Blacksburg, VA",
      startDate: "Aug 2022",
      endDate: "Aug 2023",
      description:
        "•\tProvided audio, video, and lighting support for events at various campus venues. \n•\tWorked under the leadership of the Production Technician II and student Supervisors to learn basic sound reinforcement, audio, video, and lighting principles and systems operation. \n•\tAssisted in the setup, operation, and adjustment of equipment for safety, quality, and efficiency. \n•\tOperated software to control AV technologies and monitored live feeds to ensure quality.   \n",
    },
  ],
  project: [
    {
      projName: "Weather-App ",
      langUsed: "HTML, CSS, JavaScript ",
      projURL: "https://github.com/EssiawJulian/weather-app",
      description:
        "•\tDeveloped a weather application, WeatherWiz, using the Visual Crossing API with features like location-based search and temperature unit conversion.\n•\tDesigned a user-interface, integrating weather icons and maintaining user preferences via local storage.\n",
    },
    {
      projName: "Task Tracker ",
      langUsed: "HTML, CSS, JavaScript  ",
      projURL: "https://github.com/EssiawJulian/TaskTracker-Elite",
      description:
        "•\tCreated a task management web app that allows users to create and delete projects, add and remove tasks from projects, view daily tasks, and upcoming tasks. ",
    },
    {
      projName: "Tetris Brain ",
      langUsed: "Java",
      projURL: "",
      description:
        "•\tImplemented a Tetris class, CleverBrain, to intelligently place Tetris blocks at the best possible location by analyzing and scoring the difficulty of the game board, allowing the computer to make informed decisions for successful Tetris gameplay.",
    },
    {
      projName: "Dictionary Attack",
      langUsed: "Python",
      projURL: "",
      description:
        "•\tDeveloped a password security program that hashes user-inputted passwords using SHA-256 and SHA-512, measures the time and number of guesses for dictionary attacks, and visualizes the relationship between password length and cracking difficulty using matplotlib",
    },
  ],
});

export { Aside };
