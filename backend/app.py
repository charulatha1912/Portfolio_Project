"""
app.py - Main Flask application entry point
Sets up the Flask app, CORS, and registers route blueprints.
"""

from flask import Flask
from flask_cors import CORS
from config import Config

# Import route blueprints
from routes.project_routes import project_bp
from routes.internship_routes import internship_bp

# --- App Initialization ---
app = Flask(__name__)
app.config.from_object(Config)

# --- CORS Setup ---
# Allow requests from the React frontend (running on a different port or domain)
# During development: http://localhost:5173
# In production: your Vercel URL (set via FRONTEND_URL env variable)
CORS(app, origins=[Config.FRONTEND_URL])

# --- Register Blueprints ---
# Each blueprint contains related routes (projects, internships)
app.register_blueprint(project_bp)
app.register_blueprint(internship_bp)


# --- Health Check Route ---
@app.route("/")
def health_check():
    """
    Simple health check endpoint.
    Visit http://localhost:5000/ to confirm the server is running.
    """
    return {"message": "Sarah Johnson Portfolio API is running!", "status": "ok"}


# --- Run the App ---
if __name__ == "__main__":
    # debug=True enables auto-reload during development
    # Set FLASK_DEBUG=False in production
    app.run(debug=Config.DEBUG, port=5000)
