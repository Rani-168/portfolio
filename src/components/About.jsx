function About() {
  return (
    <section id="about" className="section about-section reveal">
      <div className="section-heading">
        <div>
          <h2>About Me</h2>
          <p>
            I'm a Computer Engineering student passionate about web development.
            I enjoy creating beautiful and functional websites and web applications.
          </p>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I build modern, responsive experiences with a focus on clean UI,
            fast performance, and strong user interactions.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-row">
            <span>Name</span>
            <strong>Rani Bhosale</strong>
          </div>
          <div className="detail-row">
            <span>Email</span>
            <strong>ranibhosale168@email.com</strong>
          </div>
          <div className="detail-row">
            <span>Location</span>
            <strong>Pune, Maharashtra</strong>
          </div>
          <div className="detail-row">
            <span>Education</span>
            <strong>B.Tech Computer Engineering</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
