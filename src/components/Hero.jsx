import heroImage from "../assets/Rani5.png";

function Hero() {
  return (
    <section id="home" className="hero reveal">
      <div className="hero-left">
        <span className="hero-label">Hello, I'm</span>
        <h1>Rani Bhosale</h1>
        <p className="hero-role">Full Stack Developer</p>
        <p className="hero-description">
          I build modern, responsive and user-friendly web applications using MERN stack.
        </p>

        <div className="hero-actions">
          <a className="primary-btn" href="/resume.txt" download>Download Resume</a>
          <a className="secondary-btn" href="#contact">Contact Me</a>
        </div>

        <div className="hero-social">
          <a href="https://github.com/">GitHub</a>
          <a href="https://www.linkedin.com/in/rani-bhosale-833945290/">LinkedIn</a>
          <a href="https://mail.google.com/mail/u/0/#inbox">Mail</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-image-wrap">
          <img src={heroImage} alt="Rani Bhosale portrait" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
