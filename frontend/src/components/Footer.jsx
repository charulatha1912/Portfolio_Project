// components/Footer.jsx - Site footer
// Simple footer with copyright and social links.

import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">

        <p className="footer-copy">
          © {year} Sarah Johnson. Built with React &amp; Flask.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/sarahjohnson"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sarahjohnson"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:sarah.johnson.dev@gmail.com">
            Email
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
