// pages/Internships.jsx - Internships listing page
// Fetches internship data from the Flask backend API.
// Same pattern as Projects.jsx - useEffect + useState.

import { useState, useEffect } from 'react'
import InternshipCard from '../components/InternshipCard'
import { getInternships } from '../services/api'
import './Internships.css'

function Internships() {
  const [internships, setInternships] = useState([])
  const [loading, setLoading]         = useState(true)
  const [error, setError]             = useState(null)

  // Fetch internships from the backend when the component mounts
  useEffect(() => {
    const fetchInternships = async () => {
      try {
        setLoading(true)
        const data = await getInternships()  // GET /api/internships
        setInternships(data)
      } catch (err) {
        console.error('Failed to fetch internships:', err)
        setError('Could not load internships. Please check that the backend is running.')
      } finally {
        setLoading(false)
      }
    }

    fetchInternships()
  }, [])


  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Internships</h1>
          <p>Professional experience gained through internships.</p>
        </div>
      </section>

      <section className="internships-section">
        <div className="container">

          {loading && (
            <div className="loading-state">
              <p>Loading internships...</p>
            </div>
          )}

          {error && !loading && (
            <div className="error-state">
              <p>{error}</p>
            </div>
          )}

          {!loading && !error && (
            <div className="internships-list">
              {internships.map((internship) => (
                <InternshipCard key={internship.id} internship={internship} />
              ))}
            </div>
          )}

          {!loading && !error && internships.length === 0 && (
            <div className="loading-state">
              <p>No internships found.</p>
            </div>
          )}

        </div>
      </section>
    </main>
  )
}

export default Internships
