function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    // demo handler — in real app you'd send this to a backend
    alert('Thanks — your message was sent (demo)');
    e.target.reset();
  }

  return (
    <section id="contact" className="section contact-section reveal">
      <div className="section-heading">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <p>Have a project in mind or want to work together? Feel free to reach out to me.</p>
          <div className="contact-item">
            <strong>Email</strong>
            <span>ranibhosale168@email.com</span>
          </div>
          <div className="contact-item">
            <strong>Phone</strong>
            <span>+91 7709829002</span>
          </div>
          <div className="contact-item">
            <strong>Location</strong>
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <input type="text" placeholder="Subject" name="subject" />
          <textarea placeholder="Message" rows="5" name="message" required></textarea>
          <button className="primary-btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
