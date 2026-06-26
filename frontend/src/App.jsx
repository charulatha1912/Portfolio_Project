// App.jsx - Root application component
// Sets up React Router with all 4 pages and the shared Navbar + Footer layout.

import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Shared layout components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Page components (one per route)
import Home        from './pages/Home'
import Projects    from './pages/Projects'
import Internships from './pages/Internships'
import Contact     from './pages/Contact'

import './App.css'

function App() {
  return (
    // BrowserRouter enables React Router's URL-based navigation
    <BrowserRouter>
      <div className="app-layout">

        {/* Navbar stays fixed at top on all pages */}
        <Navbar />

        {/* Routes: only the matching <Route> renders */}
        <Routes>
          <Route path="/"            element={<Home />}        />
          <Route path="/projects"    element={<Projects />}    />
          <Route path="/internships" element={<Internships />} />
          <Route path="/contact"     element={<Contact />}     />

          {/* 404 fallback - any unmatched URL shows this */}
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '80px 24px' }}>
              <h2>Page Not Found</h2>
              <p style={{ color: 'var(--secondary)', marginTop: 8 }}>
                The page you're looking for doesn't exist.
              </p>
              <a href="/" style={{ display: 'inline-block', marginTop: 20 }}>
                ← Back to Home
              </a>
            </div>
          } />
        </Routes>

        {/* Footer stays at bottom on all pages */}
        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App
