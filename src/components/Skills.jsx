function Skills() {
  const skills = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "MongoDB",
    "MySQL",
    "Git & GitHub"
  ];

  return (
    <section id="skills" className="section skills-section reveal">
      <div className="section-heading">
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
