import { useState, useEffect } from "react";
import { Aside } from "./Aside";
import { Form } from "./Form";
import "./ResumeView.css";
import { ResumeView } from "./ResumeView";
import { ResumeDownload } from "./DownloadButton";

// App component
// This component is the parent component that renders the entire application
// It contains the state for the active tab and the resume information
function App() {
  const [active, setActive] = useState("gen-info");

  const initialResumeInfo = () => {
    const savedData = localStorage.getItem("resumeInfo");
    return savedData
      ? JSON.parse(savedData)
      : {
          fullName: "",
          email: "",
          number: "",
          linkedInUrl: "",
          githubUrl: "",
          languageArr: [],
          techArr: [],
          edu: {
            inst: "",
            degree: "",
            location: "",
            expectedGrad: "",
            courseWork: [],
          },
          experience: [],
          project: [],
        };
  };

  const [resumeInfo, setResumeInfo] = useState(initialResumeInfo);

  // Save to localStorage whenever resumeInfo changes
  useEffect(() => {
    localStorage.setItem("resumeInfo", JSON.stringify(resumeInfo));
  }, [resumeInfo]);

  return (
    <>
      <Aside
        active={active}
        setActive={setActive}
        setResumeInfo={setResumeInfo}
      />
      <Form
        active={active}
        resumeInfo={resumeInfo}
        setResumeInfo={setResumeInfo}
      />
      <ResumeView resumeInfo={resumeInfo} />
      <ResumeDownload setResumeInfo={setResumeInfo} />
    </>
  );
}

export { App };
