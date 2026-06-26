"""
routes/internship_routes.py - API routes for internships
Defines the /api/internships endpoint.
"""

from flask import Blueprint, jsonify
from models.internship import Internship

# Create a Blueprint for internship-related routes
internship_bp = Blueprint("internships", __name__)


@internship_bp.route("/api/internships", methods=["GET"])
def get_internships():
    """
    GET /api/internships
    Returns a list of all internship records as JSON.

    Response format:
    [
        {
            "id": 1,
            "company_name": "TechNova Solutions",
            "role": "Frontend Developer Intern",
            "duration": "6 Months",
            "description": "...",
            "technologies": "React, JavaScript, CSS"
        },
        ...
    ]
    """
    try:
        # Fetch all internships from the database
        internships = Internship.get_all()

        # Convert each internship object to a dictionary, then return as JSON
        return jsonify([internship.to_dict() for internship in internships]), 200

    except Exception as e:
        # If something goes wrong, return a 500 error with the message
        print(f"[ERROR] Failed to fetch internships: {e}")
        return jsonify({"error": "Failed to fetch internships"}), 500
