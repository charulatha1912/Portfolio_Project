// main.jsx - React application entry point
// This is where React mounts onto the DOM element with id="root"

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode helps catch bugs by running components twice in development
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
