// services/api.js - Centralized API communication layer
// All backend API calls go through this file.
// Axios handles HTTP requests and response parsing.

import axios from 'axios'

// Base URL of your Flask backend
// In development: http://localhost:5000
// In production: set VITE_API_URL in your Vercel environment variables
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

/**
 * Fetch all projects from the backend.
 * Calls: GET /api/projects
 * Returns: Array of project objects
 */
export const getProjects = async () => {
  const response = await api.get('/api/projects')
  return response.data
}

/**
 * Fetch all internships from the backend.
 * Calls: GET /api/internships
 * Returns: Array of internship objects
 */
export const getInternships = async () => {
  const response = await api.get('/api/internships')
  return response.data
}

export default api
