import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="brand">PORTFOLIO</div>

      <button
        className={`nav-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
         <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
         <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
         <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
         <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
         <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      <a className="nav-button" href="#contact" onClick={() => setMenuOpen(false)}>Hire Me</a>
    </nav>
  );
}

export default Navbar;
