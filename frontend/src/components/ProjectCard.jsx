// components/ProjectCard.jsx - Displays a single project
// Receives project data as props and renders a styled card.

import './ProjectCard.css'

/**
 * ProjectCard component
 * Props:
 *   - project: { id, title, description, technologies, duration, github_url, demo_url }
 */
function ProjectCard({ project }) {
  // Split "React, Flask, PostgreSQL" → ["React", "Flask", "PostgreSQL"]
  const techList = project.technologies.split(',').map(t => t.trim())

  return (
    <div className="project-card card">

      {/* Card Header */}
      <div className="project-card-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-duration">{project.duration}</span>
      </div>

      {/* Description */}
      <p className="project-description">{project.description}</p>

      {/* Technology tags */}
      <div className="project-tags">
        {techList.map((tech, index) => (
          <span key={index} className="tag">{tech}</span>
        ))}
      </div>

      {/* Links */}
      <div className="project-links">
        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub →
          </a>
        )}
        {project.demo_url && (
          <a
            href={project.demo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link-demo"
          >
            Live Demo →
          </a>
        )}
      </div>

    </div>
  )
}

export default ProjectCard
