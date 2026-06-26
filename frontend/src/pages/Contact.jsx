// pages/Contact.jsx - Contact page
// Displays contact info and a form with frontend validation.
// No backend storage — shows a success toast on submit.

import { useState } from 'react'
import './Contact.css'

// Initial empty form state
const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function Contact() {
  const [form, setForm]       = useState(INITIAL_FORM)
  const [errors, setErrors]   = useState({})
  const [submitted, setSubmitted] = useState(false)

  // Update form field value as user types
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))

    // Clear the error for this field as user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Frontend validation — checks all required fields
  const validate = () => {
    const newErrors = {}

    if (!form.name.trim())
      newErrors.name = 'Name is required.'

    if (!form.email.trim())
      newErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email address.'

    if (!form.subject.trim())
      newErrors.subject = 'Subject is required.'

    if (!form.message.trim())
      newErrors.message = 'Message is required.'
    else if (form.message.trim().length < 10)
      newErrors.message = 'Message must be at least 10 characters.'

    return newErrors
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // All valid — show success state and reset form
    setSubmitted(true)
    setForm(INITIAL_FORM)
    setErrors({})

    // Hide the success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000)
  }


  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Contact</h1>
          <p>Get in touch — I'd love to hear from you.</p>
        </div>
      </section>

      <section className="contact-section">
        <div className="container contact-layout">

          {/* ---- Left: Contact Info ---- */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-intro">
              Open to new opportunities, collaborations, or just a conversation
              about tech. Feel free to reach out.
            </p>

            <div className="contact-details">

              <div className="contact-detail-item">
                <span className="detail-label">Email</span>
                <a href="mailto:sarah.johnson.dev@gmail.com" className="detail-value">
                  sarah.johnson.dev@gmail.com
                </a>
              </div>

              <div className="contact-detail-item">
                <span className="detail-label">Phone</span>
                <a href="tel:+919876543210" className="detail-value">
                  +91 98765 43210
                </a>
              </div>

              <div className="contact-detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">Bangalore, India</span>
              </div>

              <div className="contact-detail-item">
                <span className="detail-label">LinkedIn</span>
                <a
                  href="https://linkedin.com/in/sarahjohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-value"
                >
                  linkedin.com/in/sarahjohnson
                </a>
              </div>

              <div className="contact-detail-item">
                <span className="detail-label">GitHub</span>
                <a
                  href="https://github.com/sarahjohnson"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-value"
                >
                  github.com/sarahjohnson
                </a>
              </div>

            </div>
          </div>


          {/* ---- Right: Contact Form ---- */}
          <div className="contact-form-wrapper">

            {/* Success Toast */}
            {submitted && (
              <div className="toast-success" role="alert">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form" noValidate>

              {/* Name */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <span className="error-msg">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={errors.email ? 'input-error' : ''}
                />
                {errors.email && <span className="error-msg">{errors.email}</span>}
              </div>

              {/* Subject */}
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={errors.subject ? 'input-error' : ''}
                />
                {errors.subject && <span className="error-msg">{errors.subject}</span>}
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  className={errors.message ? 'input-error' : ''}
                />
                {errors.message && <span className="error-msg">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>
    </main>
  )
}

export default Contact
