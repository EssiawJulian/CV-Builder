import { useState } from "react";
import { Aside } from "./Aside";
import { Form } from "./Form";

function App() {
  const [active, setActive] = useState("gen-info");
  const [resumeInfo, setResumeInfo] = useState({
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
  });
  return (
    <>
      <Aside active={active} setActive={setActive} />
      <Form
        active={active}
        resumeInfo={resumeInfo}
        setResumeInfo={setResumeInfo}
      />
    </>
  );
}

export { App };
