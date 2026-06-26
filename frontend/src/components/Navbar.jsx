// components/Navbar.jsx - Site navigation bar
// Displays the logo/name and navigation links.
// Highlights the active route using React Router's NavLink.

import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  // Controls mobile menu open/close state
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="container navbar-inner">

        {/* Logo / Name - links to homepage */}
        <NavLink to="/" className="navbar-logo" onClick={closeMenu}>
          Sarah Johnson
        </NavLink>

        {/* Hamburger button - only visible on mobile */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation links */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li>
            <NavLink
              to="/"
              end                          // "end" means only match exact "/"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/internships"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Internships
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
