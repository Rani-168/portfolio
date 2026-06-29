import './App.css';
import heroImage from './assets/hero.png';

const skills = ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'React', 'MySQL', 'MongoDB', 'Docker', 'Git', 'AWS'];

const projects = [
  {
    title: 'Enterprise Web Application',
    description: 'Developed a scalable full-stack application with secure authentication, role-based access, and efficient database integration.',
    stack: ['Java', 'Spring Boot', 'React']
  },
  {
    title: 'RESTful API Platform',
    description: 'Designed and implemented robust backend services with clean architecture, API versioning, and high-performance data handling.',
    stack: ['Spring Boot', 'MySQL', 'Docker']
  },
  {
    title: 'Modern Dashboard Solution',
    description: 'Built an interactive dashboard experience combining responsive frontend design with reliable backend services.',
    stack: ['React', 'Java', 'AWS']
  }
];

function App() {
  return (
    <div className="page-shell">
      <header className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Java Full Stack Developer</p>
          <h1>I build reliable, scalable web applications from backend services to modern user interfaces.</h1>
          <p className="hero-text">
            I specialize in developing end-to-end solutions with Java, Spring Boot, React, and cloud-ready architecture.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">Explore Projects</a>
            <a className="btn btn-secondary" href="#contact">Connect With Me</a>
          </div>
        </div>
        <div className="hero-card" aria-label="Profile summary">
          <img className="profile-photo" src={heroImage} alt="Profile" />
          <h2>Open to professional opportunities and collaborative development projects</h2>
          <p>Focused on delivering secure, scalable, and high-performance applications with clean engineering practices.</p>
        </div>
      </header>

      <main>
        <section className="section-card" id="about">
          <h3>About Me</h3>
          <p>
            I am a Java full-stack developer passionate about building robust applications that combine strong backend architecture with modern frontend experiences. My work focuses on performance, maintainability, and delivering practical solutions that meet real business needs.
          </p>
        </section>

        <section className="section-card">
          <h3>Skills</h3>
          <div className="chip-list">
            {skills.map((skill) => (
              <span className="chip" key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="section-card">
          <h3>Resume Highlights</h3>
          <div className="resume-grid">
            <div className="resume-item">
              <h4>Professional Focus</h4>
              <p>Building scalable full-stack web applications with strong backend architecture and modern frontend interfaces.</p>
            </div>
            <div className="resume-item">
              <h4>Core Strengths</h4>
              <p>Java, Spring Boot, REST APIs, React, database design, cloud deployment, and clean software engineering practices.</p>
            </div>
            <div className="resume-item">
              <h4>Approach</h4>
              <p>Delivering reliable, maintainable solutions that balance performance, usability, and business value.</p>
            </div>
          </div>
        </section>

        <section className="section-card">
          <h3>Experience</h3>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-year">2024 – Present</span>
              <div>
                <h4>Full Stack Developer</h4>
                <p>Developing scalable web applications using Java, Spring Boot, React, and RESTful services.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2022 – 2024</span>
              <div>
                <h4>Backend Developer</h4>
                <p>Focused on API design, database integration, and building reliable server-side systems.</p>
              </div>
            </div>
            <div className="timeline-item">
              <span className="timeline-year">2020 – 2022</span>
              <div>
                <h4>Junior Software Developer</h4>
                <p>Built foundational web solutions and improved application performance and maintainability.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-card" id="projects">
          <h3>Selected Projects</h3>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="chip-list compact">
                  {project.stack.map((item) => (
                    <span className="chip subtle" key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card contact-card" id="contact">
          <h3>Let’s build something impactful</h3>
          <p>If you are looking for a developer to build scalable web applications or collaborate on a full-stack project, I would be happy to connect.</p>
          <a className="btn btn-primary" href="mailto:hello@example.com">hello@example.com</a>
        </section>
      </main>
    </div>
  );
}

export default App;
