import { useState } from "react";

import booki from '../assets/booki.png'
import sophieBluel from '../assets/sophie-bluel.png'
import siteKasa from '../assets/site-kasa.png'

function Projects() {

  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Portfolio Architecte",
      description: "Ajout de fonctionnalités JavaScript sur un site de portfolio d'architecte, permettant la connexion, l'ajout et suppression de projet.",
      imageUrl: sophieBluel,
      link: "https://projet-3-oc.vercel.app/"
    },
    {
      id: 2,
      title: "Site de location immobilière",
      description: "Création d’un site de location immobilière avec React.",
      imageUrl: siteKasa,
      link: "https://projet-5-oc.vercel.app/"
    }, 
    {
      id: 3,
      title: "Intégrer une maquette Figma",
      description: "Ce projet consiste à intégrer une maquette Figma en HTML et CSS.",
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