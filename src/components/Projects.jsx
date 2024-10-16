import { useState } from "react";

import booki from '../assets/booki.png'
import sophieBluel from '../assets/sophie-bluel.png'
import siteKasa from '../assets/site-kasa.png'

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Architect Portfolio",
      description: "Added JavaScript features to an architect portfolio site, enabling login, and project addition and deletion.",
      imageUrl: sophieBluel,
      link: "https://projet-3-oc.vercel.app/"
    },
    {
      id: 2,
      title: "Real Estate Rental Site KASA",
      description: "Created a real estate rental website using React.",
      imageUrl: siteKasa,
      link: "https://projet-5-oc.vercel.app/"
    }, 
    {
      id: 3,
      title: "Integrating a Figma Mockup",
      description: "This project consists of integrating a Figma mockup using HTML and CSS.",
      imageUrl: booki,
      link: "https://tophertaro.github.io/projet-2-oc-/"
    },
  ];

  const toggleDescription = (projectId) => {
    if (selectedProject === projectId) {
      setSelectedProject(null); 
    } else {
      setSelectedProject(projectId); 
    }
  };

  return (
    <div className="projects-section">
      <h2>PROJECTS</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card" onClick={() => openLightbox(project)}>
            <a href={project.link} target="blank" rel="noopener noreferrer">
              <img src={project.imageUrl} alt={project.title} className="project-image" />
            </a>
            <h3>{project.title}</h3>
            
            <div className="description-toggle">
              <span>Description :</span>
              <button onClick={() => toggleDescription(project.id)} className="toggle-button">
                {selectedProject === project.id ? '-' : '+'}
              </button>
            </div>

        
            {selectedProject === project.id && (
              <p className="project-description">{project.description}</p>
            )}

          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;