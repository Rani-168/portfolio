import { useState } from "react";
import project1Image from "../assets/Rani3.png";
import project2Image from "../assets/Rani3.png";
import project3Image from "../assets/Rani3.png";

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "Smart Mobile Store Web App",
      description: "E-commerce and admin system for mobile shopping with both online and offline customer management.",
      details: "Implemented Add to Cart with quantity control, search and filter by price/brand/category, smart chatbot recommendations, product comparison, walk-in customer token system, admin sales dashboard, daily sales reports, and Firebase Firestore integration.",
      image: project1Image,
      github: "https://github.com/ranibhosale/smart-mobile-store",
      tags: ["React.js", "Firebase", "Tailwind CSS"]
    },
    {
      title: "NutriScan – Personalized Health Analyzer",
      description: "Mobile app that analyzes ingredients and offers personalized health guidance using barcode scanning.",
      details: "Built barcode scanning, multilingual ingredient parser, health risk evaluation for allergies, diabetes, hypertension, traffic-light rating, diet recommendations, and local caching with Room to reduce API calls.",
      image: project2Image,
      github: "https://github.com/ranibhosale/nutriscan-health-analyzer",
      tags: ["Flutter", "Java", "Room"]
    },
    {
      title: "Medicine Supply Management System",
      description: "Responsive web system for medicine availability management with AI chatbot support.",
      details: "Developed backend logic, database management, responsive frontend, AI chatbot integration for search and assistance, and real-time data updates with performance optimization.",
      image: project3Image,
      github: "https://github.com/ranibhosale/medicine-supply-management",
      tags: ["Node.js", "MongoDB", "AI"]
    }
  ];

  return (
    <section id="projects" className="section projects-section reveal">
      <div className="section-heading">
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              className={`project-card ${isActive ? "expanded" : ""}`}
              key={project.title}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-toggle">
                  {isActive ? "Hide Details" : "View Details"}
                </span>
              </div>

              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                <button
                  className="project-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(isActive ? null : index);
                  }}
                >
                  GitHub
                </button>
                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Open Repo
                </a>
              </div>

              {isActive && (
                <div className="project-detail">
                  <div className="project-detail-text">
                    <p>{project.details}</p>
                    <a
                      className="project-detail-link"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View GitHub repository
                    </a>
                  </div>
                  <div className="project-detail-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
