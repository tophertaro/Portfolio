import { useState } from "react";

function Projects({projects}) {

  const [selectedProject, setSelectedProject] = useState(null);

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
          <div key={project.id} className="project-card">
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