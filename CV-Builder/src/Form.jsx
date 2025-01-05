import { useState } from "react";
import "./Form.css";

// Group all necessary rendering into one component
function Form({ active, resumeInfo, setResumeInfo }) {
  const map = new Map();
  map.set("gen-info", "Personal Details");
  map.set("edu", "Education");
  map.set("s&t", "Skills & Technology");
  map.set("experience", "Experience");
  map.set("projects", "Projects");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let buttonText = "Next >>";

  let formContent;
  let techForm = (
    <form onSubmit={handleSubmit} className="techForm">
      <Tech resumeInfo={resumeInfo} setResumeInfo={setResumeInfo} />
      <button type="submit">{buttonText}</button>
    </form>
  );

  switch (active) {
    case "gen-info":
      formContent = (
        <GeneralInfoForm
          resumeInfo={resumeInfo}
          setResumeInfo={setResumeInfo}
        />
      );
      break;
    case "edu":
      formContent = (
        <EducationInfo resumeInfo={resumeInfo} setResumeInfo={setResumeInfo} />
      );
      break;
    case "s&t":
      formContent = (
        <Language resumeInfo={resumeInfo} setResumeInfo={setResumeInfo} />
      );
      break;
    case "experience":
      formContent = (
        <Experience resumeInfo={resumeInfo} setResumeInfo={setResumeInfo} />
      );
      break;
    case "projects":
      formContent = (
        <Project resumeInfo={resumeInfo} setResumeInfo={setResumeInfo} />
      );
      break;
    default:
      alert("Not a Valid side navigation");
  }

  if (active === "projects") {
    buttonText = "Download";
  }

  return (
    <div className="cv-info-cnt">
      <header>{map.get(active)}</header>
      <form onSubmit={handleSubmit}>
        {formContent}
        {active !== "s&t" && <button type="submit">{buttonText}</button>}
      </form>
      {active === "s&t" && techForm}
    </div>
  );
}

// Rendering to Personal details
function GeneralInfoForm({ resumeInfo, setResumeInfo }) {
  console.log(resumeInfo);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo({ ...resumeInfo, [name]: value });
  };

  return (
    <>
      <div className="form-info">
        <label htmlFor="full-name">Your full name</label>
        <input
          type="text"
          id="full-name"
          name="fullName"
          value={resumeInfo.fullName}
          onChange={handleChange}
          placeholder="John Doe"
        />
      </div>

      <div className="form-info">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={resumeInfo.email}
          onChange={handleChange}
          placeholder="example@something.com"
        />
      </div>

      <div className="form-info">
        <label htmlFor="number">Phone Number</label>
        <input
          type="number"
          id="number"
          name="number"
          value={resumeInfo.number}
          onChange={handleChange}
          placeholder="123-456-7890"
        />
      </div>

      <div className="form-info">
        <label htmlFor="linkedInUrl">LinkedIn URL</label>
        <input
          type="text"
          id="linkedInUrl"
          name="linkedInUrl"
          value={resumeInfo.linkedInUrl}
          onChange={handleChange}
          placeholder="https://url/in/username"
        />
      </div>

      <div className="form-info">
        <label htmlFor="githubUrl">Github URL</label>
        <input
          type="text"
          id="githubUrl"
          name="githubUrl"
          value={resumeInfo.githubUrl}
          onChange={handleChange}
          placeholder="https://github.com/username"
        />
      </div>
    </>
  );
}
// Rendering for Technology Related Skills
function Tech({ resumeInfo, setResumeInfo }) {
  const [newInput, setNewInput] = useState("");
  const [error, setError] = useState("");
  const handleButton = () => {
    if (newInput.trim().length > 25) {
      setError("Word should be lesser than 25 characters");
      return;
    }
    if (newInput.trim()) {
      setError("");
      setResumeInfo((prevState) => ({
        ...prevState,
        techArr: [...prevState.techArr, newInput],
      }));
      setNewInput("");
    }
  };

  const deleteTag = (index) => {
    const updatedTechArr = resumeInfo.techArr.filter((_, i) => i !== index);
    setResumeInfo((prevState) => ({ ...prevState, techArr: updatedTechArr }));
  };

  return (
    <>
      <h3> Technologies:</h3>
      <div className="tag">
        {resumeInfo.techArr.map((tagName, index) => (
          <SkillTag
            key={index}
            tagName={tagName}
            index={index}
            deleteTag={deleteTag}
          />
        ))}
      </div>
      {error !== "" && <div className="error">{error}</div>}
      <div className="skill-and-tech-input-and-addButton-cnt">
        <input
          type="text"
          id="tech"
          name="tech"
          value={newInput}
          onChange={(e) => {
            setNewInput(e.target.value);
          }}
          placeholder="Github, React..."
        />

        <button className="skill-and-tech-add-button" onClick={handleButton}>
          Add Technology
        </button>
      </div>
    </>
  );
}

// Component for tags
function SkillTag({ tagName, index, deleteTag }) {
  return (
    <div>
      {" "}
      {tagName}{" "}
      <span className="delete-icon" onClick={() => deleteTag(index)}>
        &#10006;
      </span>
    </div>
  );
}

// Rendering Language related Skills
function Language({ resumeInfo, setResumeInfo }) {
  const [newInput, setNewInput] = useState("");
  const [error, setError] = useState("");
  const handleButton = () => {
    if (newInput.trim().length > 25) {
      setError("Word should be lesser than 25 characters");
      return;
    }
    if (newInput.trim()) {
      setError("");
      setResumeInfo((prevState) => ({
        ...prevState,
        languageArr: [...prevState.languageArr, newInput],
      }));
      setNewInput("");
    }
  };

  const deleteTag = (index) => {
    const updatedLanguageArr = resumeInfo.languageArr.filter(
      (_, i) => i !== index
    );
    setResumeInfo((prevState) => ({
      ...prevState,
      languageArr: updatedLanguageArr,
    }));
  };

  return (
    <>
      <h3> Languages:</h3>
      <div className="tag">
        {resumeInfo.languageArr.map((tagName, index) => (
          <SkillTag
            key={index}
            tagName={tagName}
            index={index}
            deleteTag={deleteTag}
          />
        ))}
      </div>
      {error !== "" && <div className="error">{error}</div>}
      <div className="skill-and-tech-input-and-addButton-cnt">
        <input
          type="text"
          id="tech"
          name="tech"
          value={newInput}
          onChange={(e) => {
            setNewInput(e.target.value);
          }}
          placeholder="Github, React..."
        />

        <button className="skill-and-tech-add-button" onClick={handleButton}>
          Add Language
        </button>
      </div>
    </>
  );
}

// Rendering education Form
function EducationInfo({ resumeInfo, setResumeInfo }) {
  const [inputClicked, setInputClicked] = useState("");

  const handleInputClicked = (str) => {
    setInputClicked(str);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeInfo((prevState) => ({
      ...prevState,
      edu: {
        ...prevState.edu,
        [name]: value,
      },
    }));
  };

  console.log(resumeInfo);

  return (
    <>
      <div className="form-info">
        <label htmlFor="inst">Institution</label>
        <input
          type="text"
          id="inst"
          name="inst"
          value={resumeInfo.edu.inst}
          placeholder="Ex. Virginia Tech"
          onChange={handleChange}
          onClick={() => handleInputClicked("inst")}
        />
      </div>

      <div className="form-info">
        <label htmlFor="inst">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={resumeInfo.edu.location}
          placeholder="Ex. Blacksburg, VA"
          onChange={handleChange}
          onClick={() => handleInputClicked("inst")}
        />
      </div>

      <div className="form-info">
        <label htmlFor="inst">Expected Graduation</label>
        <input
          type="text"
          id="expectedGrad"
          name="expectedGrad"
          value={resumeInfo.edu.expectedGrad}
          placeholder="Ex. May 2026"
          onChange={handleChange}
          onClick={() => handleInputClicked("inst")}
        />
      </div>

      <div className="form-info">
        <label htmlFor="inst">Degree</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={resumeInfo.edu.degree}
          placeholder="B.S. - Computer Science"
          onChange={handleChange}
          onClick={() => handleInputClicked("inst")}
        />
      </div>

      <CourseWork resumeInfo={resumeInfo} setResumeInfo={setResumeInfo} />
    </>
  );
}

// Courses Taken
function CourseWork({ resumeInfo, setResumeInfo }) {
  const [newInput, setNewInput] = useState("");
  const [error, setError] = useState("");
  const handleButton = () => {
    if (newInput.trim().length > 25) {
      setError("Word should be lesser than 25 characters");
      return;
    }
    if (newInput.trim()) {
      setError("");
      setResumeInfo((prevState) => ({
        ...prevState,
        edu: {
          ...prevState.edu,
          courseWork: [...prevState.edu.courseWork, newInput],
        },
      }));
      setNewInput("");
    }
  };

  const deleteTag = (index) => {
    const updatedCourseWorkArr = resumeInfo.edu.courseWork.filter(
      (_, i) => i !== index
    );
    setResumeInfo((prevState) => ({
      ...prevState,
      edu: { ...prevState.edu, courseWork: updatedCourseWorkArr },
    }));
  };

  return (
    <>
      <h3> CourseWork:</h3>
      <div className="tag">
        {resumeInfo.edu.courseWork.map((tagName, index) => (
          <SkillTag
            key={index}
            tagName={tagName}
            index={index}
            deleteTag={deleteTag}
          />
        ))}
      </div>
      {error !== "" && <div className="error">{error}</div>}
      <div className="skill-and-tech-input-and-addButton-cnt">
        <input
          type="text"
          id="tech"
          name="tech"
          value={newInput}
          onChange={(e) => {
            setNewInput(e.target.value);
          }}
          placeholder="Linear Algebra..."
        />

        <button className="skill-and-tech-add-button" onClick={handleButton}>
          Add Course
        </button>
      </div>
    </>
  );
}

// Rendering Experience Form
function Experience({ resumeInfo, setResumeInfo }) {
  const [employmentInfo, setEmploymentInfo] = useState({
    jobTitle: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmploymentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeInfo((prevState) => ({
      ...prevState,
      experience: [...prevState.experience, employmentInfo],
    }));
    setEmploymentInfo({
      jobTitle: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  return (
    <>
      <div className="form-info">
        <label htmlFor="jobTitle">Job title</label>
        <input
          type="text"
          id="jobTitle"
          name="jobTitle"
          value={employmentInfo.jobTitle}
          onChange={handleChange}
          placeholder="Ex. Software Engineer"
        />
      </div>

      <div className="form-info">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={employmentInfo.company}
          onChange={handleChange}
          placeholder="Ex. Google Inc."
        />
      </div>

      <div className="form-info">
        <label htmlFor="startDate">Start date</label>
        <input
          type="month"
          id="startDate"
          name="startDate"
          value={employmentInfo.startDate}
          onChange={handleChange}
          placeholder="May 2022"
        />
      </div>

      <div className="form-info">
        <label htmlFor="endDate">End date</label>
        <input
          type="month"
          id="endDate"
          name="endDate"
          value={employmentInfo.endDate}
          onChange={handleChange}
          placeholder="May 2022"
        />
      </div>

      <div className="form-info">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={employmentInfo.description}
          onChange={handleChange}
          placeholder="• Provided audio, video, and lighting support for events at various campus venues.
• Worked under the leadership of the Production Technician II and student Supervisors to learn basic sound
reinforcement, audio, video, and lighting principles and systems operation. "
          className="description-textarea"
        />
      </div>

      <button type="submit" className="exp-btn" onClick={handleSubmit}>
        Add Employment
      </button>

      <ExperienceList resumeInfo={resumeInfo} setResumeInfo={setResumeInfo} />
    </>
  );
}

// Display Experience added by the user
function ExperienceList({ resumeInfo, setResumeInfo }) {
  const handleDelete = (index) => {
    // Filter out the experience at the specified index
    const updatedExperience = resumeInfo.experience.filter(
      (_, i) => i !== index
    );

    // Update the overall resumeInfo in parent state
    setResumeInfo((prevState) => ({
      ...prevState,
      experience: updatedExperience,
    }));
  };

  return (
    <div className="experience-list">
      <h2>Employment History</h2>
      {resumeInfo.experience.length === 0 && (
        <p>No employment experience added yet.</p>
      )}

      {resumeInfo.experience.map((exp, index) => (
        <div className="experience-item" key={index}>
          <div className="exp-top-line">
            <h3>{exp.jobTitle}</h3>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
          <p>
            <strong>Company:</strong> {exp.company}
          </p>
          <p>
            <strong>Dates:</strong> {exp.startDate} - {exp.endDate || "Present"}
          </p>
          <p className="exp-description">
            <strong>Description:</strong> {exp.description}
          </p>
        </div>
      ))}
    </div>
  );
}

// Rendering Project Form
function Project({ resumeInfo, setResumeInfo }) {
  const [projInfo, setProjInfo] = useState({
    projName: "",
    langUsed: "",
    projURL: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeInfo((prevState) => ({
      ...prevState,
      project: [...prevState.project, projInfo],
    }));
    setProjInfo({
      projName: "",
      langUsed: "",
      projURL: "",
      description: "",
    });
  };

  return (
    <>
      <div className="form-info">
        <label htmlFor="projName">Project Name</label>
        <input
          type="text"
          id="projName"
          name="projName"
          value={projInfo.projName}
          onChange={handleChange}
          placeholder="Ex. CV Generator"
        />
      </div>

      <div className="form-info">
        <label htmlFor="langUsed">Languages/Frameworks used</label>
        <input
          type="text"
          id="langUsed"
          name="langUsed"
          value={projInfo.langUsed}
          onChange={handleChange}
          placeholder="Ex. React, Node.js"
        />
      </div>

      <div className="form-info">
        <label htmlFor="projURL">Link to Repository/Website</label>
        <input
          type="text"
          id="projURL"
          name="projURL"
          value={projInfo.projURL}
          onChange={handleChange}
          placeholder="https://github.com/username/ProjectName"
        />
      </div>

      <div className="form-info">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={projInfo.description}
          onChange={handleChange}
          placeholder="• Provided audio, video, and lighting support for events at various campus venues.
  • Worked under the leadership of the Production Technician II and student Supervisors to learn basic sound
  reinforcement, audio, video, and lighting principles and systems operation. "
          className="description-textarea"
        />
      </div>

      <button type="submit" className="exp-btn" onClick={handleSubmit}>
        Add Project
      </button>

      <ProjList resumeInfo={resumeInfo} setResumeInfo={setResumeInfo} />
    </>
  );
}

// Display Projects added by the user
function ProjList({ resumeInfo, setResumeInfo }) {
  const handleDelete = (index) => {
    // Filter out the experience at the specified index
    const updatedExperience = resumeInfo.project.filter((_, i) => i !== index);

    // Update the overall resumeInfo in parent state
    setResumeInfo((prevState) => ({
      ...prevState,
      project: updatedExperience,
    }));
  };

  return (
    <div className="experience-list">
      <h2>Projects</h2>
      {resumeInfo.project.length === 0 && <p>No project added yet.</p>}

      {resumeInfo.project.map((prj, index) => (
        <div className="experience-item" key={index}>
          <div className="exp-top-line">
            <h3>{prj.projName}</h3>
            <button className="delete-btn" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>
          <p>
            <strong>Languges Used:</strong> {prj.langUsed}
          </p>
          <p>
            <strong>Project URL:</strong> {prj.projURL}
          </p>
          <p className="exp-description">
            <strong>Description:</strong> {prj.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export { Form };
