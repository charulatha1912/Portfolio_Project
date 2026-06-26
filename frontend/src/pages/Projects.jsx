// pages/Projects.jsx - Projects listing page
// Fetches project data from the Flask backend API using Axios.
// Demonstrates: useEffect, useState, async API calls, loading states.

import { useState, useEffect } from 'react'
import ProjectCard from '../components/ProjectCard'
import { getProjects } from '../services/api'
import './Projects.css'

function Projects() {
  // State variables:
  // projects   - the array of project objects from the API
  // loading    - true while the API call is in progress
  // error      - stores error message if API call fails
  const [projects, setProjects]   = useState([])
  const [loading, setLoading]     = useState(true)
  const [error, setError]         = useState(null)

  // useEffect runs once when the component mounts (empty dependency array [])
  // This is where we trigger the API call to fetch projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true)
        const data = await getProjects()   // GET /api/projects
        setProjects(data)
      } catch (err) {
        console.error('Failed to fetch projects:', err)
        setError('Could not load projects. Please check that the backend is running.')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, []) // [] means "run only once on mount"


  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Projects</h1>
          <p>A selection of personal and academic projects I've built.</p>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">

          {/* Loading state */}
          {loading && (
            <div className="loading-state">
              <p>Loading projects...</p>
            </div>
          )}

          {/* Error state */}
          {error && !loading && (
            <div className="error-state">
              <p>{error}</p>
            </div>
          )}

          {/* Projects grid - only shows when data is ready */}
          {!loading && !error && (
            <div className="projects-grid">
              {projects.map((project) => (
                // Each ProjectCard receives the full project object as a prop
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {/* Empty state */}
          {!loading && !error && projects.length === 0 && (
            <div className="loading-state">
              <p>No projects found.</p>
            </div>
          )}

        </div>
      </section>
    </main>
  )
}

export default Projects
