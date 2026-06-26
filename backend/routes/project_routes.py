"""
routes/project_routes.py - API routes for projects
Defines the /api/projects endpoint.
"""

from flask import Blueprint, jsonify
from models.project import Project

# Create a Blueprint for project-related routes
# Blueprints allow us to organize routes into separate files
project_bp = Blueprint("projects", __name__)


@project_bp.route("/api/projects", methods=["GET"])
def get_projects():
    """
    GET /api/projects
    Returns a list of all portfolio projects as JSON.

    Response format:
    [
        {
            "id": 1,
            "title": "Inventory Management System",
            "description": "...",
            "technologies": "React, Flask, PostgreSQL",
            "duration": "2 Months",
            "github_url": "https://github.com/...",
            "demo_url": "https://..."
        },
        ...
    ]
    """
    try:
        # Fetch all projects from the database
        projects = Project.get_all()

        # Convert each project object to a dictionary, then return as JSON
        return jsonify([project.to_dict() for project in projects]), 200

    except Exception as e:
        # If something goes wrong, return a 500 error with the message
        print(f"[ERROR] Failed to fetch projects: {e}")
        return jsonify({"error": "Failed to fetch projects"}), 500
