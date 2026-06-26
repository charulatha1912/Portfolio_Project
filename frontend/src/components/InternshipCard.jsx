// components/InternshipCard.jsx - Displays a single internship
// Receives internship data as props and renders a styled card.

import './InternshipCard.css'

/**
 * InternshipCard component
 * Props:
 *   - internship: { id, company_name, role, duration, description, technologies }
 */
function InternshipCard({ internship }) {
  // Split "React, JavaScript, CSS" → ["React", "JavaScript", "CSS"]
  const techList = internship.technologies.split(',').map(t => t.trim())

  return (
    <div className="internship-card card">

      {/* Company & Role Header */}
      <div className="internship-header">
        <div>
          <h3 className="internship-role">{internship.role}</h3>
          <p className="internship-company">{internship.company_name}</p>
        </div>
        <span className="internship-duration">{internship.duration}</span>
      </div>

      {/* Description */}
      <p className="internship-description">{internship.description}</p>

      {/* Technology tags */}
      <div className="internship-tags">
        {techList.map((tech, index) => (
          <span key={index} className="tag">{tech}</span>
        ))}
      </div>

    </div>
  )
}

export default InternshipCard
