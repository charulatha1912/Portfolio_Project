// pages/Home.jsx - Portfolio homepage
// Contains: Hero, About, Skills, Soft Skills, and Statistics sections.

import { Link } from 'react-router-dom'
import './Home.css'

// --- Data defined locally (no API needed for static content) ---

const technicalSkills = {
  Frontend:  ['React', 'JavaScript', 'HTML', 'CSS', 'Vite'],
  Backend:   ['Flask', 'Python', 'REST APIs'],
  Database:  ['PostgreSQL', 'MySQL'],
  DevOps:    ['Docker', 'Git', 'GitHub'],
  Cloud:     ['AWS Basics', 'Render', 'Vercel'],
}

const softSkills = [
  'Communication',
  'Teamwork',
  'Problem Solving',
  'Time Management',
  'Leadership',
]

const stats = [
  { label: 'Projects Completed', value: '5' },
  { label: 'Internships',        value: '2' },
  { label: 'Technologies Learned', value: '15+' },
  { label: 'GitHub Repositories', value: '20+' },
]


function Home() {
  return (
    <main>

      {/* ========================
          HERO SECTION
          ======================== */}
      <section className="hero-section">
        <div className="container hero-wrapper">
          <div className="hero-content">
            <p className="hero-eyebrow">Full Stack Developer</p>
            <h1 className="hero-name">Sarah Johnson</h1>
            <p className="hero-tagline">
              Building scalable web applications using React, Flask,
              PostgreSQL and Cloud technologies.
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>

              <a
                href="/resume.pdf"
                download
                className="btn btn-outline"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="/sarah.jpg"
              alt="Sarah Johnson"
              className="hero-photo"
            />
          </div>
        </div>
      </section>


      {/* ========================
          ABOUT SECTION
          ======================== */}
      <section className="about-section">
        <div className="container">
          <div className="section-header">
            <h2>About</h2>
            <span className="section-divider"></span>
          </div>

          <div className="about-grid">
            {/* Summary text */}
            <div className="about-text">
              <p>
                Passionate Full Stack Developer with experience building modern web
                applications using React, Flask, PostgreSQL, Docker, and Cloud technologies.
                Skilled in frontend development, backend APIs, database design, and
                deployment workflows.
              </p>
            </div>

            {/* Info tiles */}
            <div className="about-details">
              <div className="about-item">
                <span className="about-label">Experience</span>
                <span className="about-value">1 Year</span>
              </div>
              <div className="about-item">
                <span className="about-label">Education</span>
                <span className="about-value">B.Tech in Computer Science</span>
              </div>
              <div className="about-item">
                <span className="about-label">Location</span>
                <span className="about-value">Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ========================
          TECHNICAL SKILLS
          ======================== */}
      <section className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2>Technical Skills</h2>
            <span className="section-divider"></span>
          </div>

          <div className="skills-grid">
            {/* Render each skill category */}
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="skill-group">
                <h4 className="skill-category">{category}</h4>
                <div className="skill-tags">
                  {skills.map((skill) => (
                    <span key={skill} className="tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================
          SOFT SKILLS
          ======================== */}
      <section className="soft-skills-section">
        <div className="container">
          <div className="section-header">
            <h2>Soft Skills</h2>
            <span className="section-divider"></span>
          </div>

          <div className="soft-skills-list">
            {softSkills.map((skill) => (
              <div key={skill} className="soft-skill-item">
                <span className="soft-skill-dot"></span>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================
          STATISTICS
          ======================== */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home
