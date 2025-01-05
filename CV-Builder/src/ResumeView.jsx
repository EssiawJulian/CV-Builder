// A helper function to turn any "•" bullets in text into <li> items.
function parseBulletPoints(text = "") {
  // Split on the bullet symbol.
  // Filter out empty strings in case there's a trailing bullet.
  const bullets = text.split("•").filter((bullet) => bullet.trim() !== "");
  return (
    <ul>
      {bullets.map((bullet, idx) => (
        <li key={idx}>{bullet.trim()}</li>
      ))}
    </ul>
  );
}

function ResumeView({ resumeInfo }) {
  const {
    fullName,
    email,
    number,
    linkedInUrl,
    githubUrl,
    languageArr,
    techArr,
    edu,
    experience,
    project,
  } = resumeInfo;

  return (
    <div className="resume-cnt">
      {/* Header */}
      <h1 className="resume-name">{fullName}</h1>
      <p className="resume-contact">
        {email} &nbsp;•&nbsp; {number} &nbsp;•&nbsp; {linkedInUrl} &nbsp;•&nbsp;{" "}
        {githubUrl}
      </p>

      {/* EDUCATION */}
      <h2 className="section-header">EDUCATION</h2>
      <hr />
      <div className="education-section">
        <p className="edu-line">
          {edu.inst} | {edu.location}
          <span className="edu-right">
            Expected Graduation {edu.expectedGrad}
          </span>
        </p>
        <p className="edu-degree">{edu.degree}</p>
        {edu.courseWork?.length > 0 && (
          <p className="edu-coursework">
            <strong>Coursework:</strong> {edu.courseWork.join(", ")}
          </p>
        )}
      </div>

      {/* SKILLS & TECHNICAL TOOLS */}
      <h2 className="section-header">SKILLS & TECHNICAL TOOLS</h2>
      <hr />
      <div className="skills-section">
        <p>
          <strong>Languages:</strong> {languageArr.join(", ")}
        </p>
        <p>
          <strong>Technologies:</strong> {techArr.join(", ")}
        </p>
      </div>

      {/* EXPERIENCE */}
      <h2 className="section-header">EXPERIENCE</h2>
      <hr />
      <div className="experience-section">
        {experience.map((exp, idx) => {
          const { jobTitle, company, startDate, endDate, description } = exp;
          return (
            <div className="exp-item" key={idx}>
              <p className="exp-line">
                {jobTitle} | {company}
                <span className="exp-date">
                  {startDate} – {endDate || "Present"}
                </span>
              </p>
              {/* Parse bullet points in the experience description */}
              {parseBulletPoints(description)}
            </div>
          );
        })}
      </div>

      {/* PROJECTS */}
      <h2 className="section-header">PROJECTS</h2>
      <hr />
      <div className="project-section">
        {project.map((proj, idx) => {
          const { projName, langUsed, projURL, description } = proj;
          return (
            <div className="project-item" key={idx}>
              <p className="proj-line">
                {projName} | {langUsed}{" "}
                {projURL && (
                  <a href={projURL} target="_blank" rel="noreferrer">
                    ({projURL})
                  </a>
                )}
              </p>
              {/* Parse bullet points in the project description */}
              {parseBulletPoints(description)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { ResumeView };
