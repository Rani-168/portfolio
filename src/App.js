import './App.css';

function App() {
  return (
    <div className="container">
      <header className="hero">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="profile-img"
        />

        <h1>Rani Bhosale</h1>
        <h3>Computer Engineering Student</h3>
        <p>Web Developer | Java Programmer | Problem Solver</p>
      </header>

      <section className="card">
        <h2>About Me</h2>
        <p>
          I am a Computer Engineering student passionate about web
          development and creating innovative projects using modern
          technologies.
        </p>
      </section>

      <section className="card">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Java</span>
          <span>Node.js</span>
          <span>MongoDB</span>
        </div>
      </section>

      <section className="card">
        <h2>Projects</h2>

        <div className="project">
          <h3>Medicine Supply with AI Chatbot</h3>
          <p>
            Developed a medicine supply system with AI chatbot using
            React, Node.js, and MongoDB.
          </p>
        </div>

        <div className="project">
          <h3>Electric Vehicle Recharge Bunk</h3>
          <p>
            Created an EV charging slot booking system to reduce waiting
            time at charging stations.
          </p>
        </div>
      </section>

      <section className="card">
        <h2>Contact</h2>
        <p>Email: yourgmail@gmail.com</p>
        <p>GitHub: github.com/yourusername</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </section>
    </div>
  );
}

export default App;