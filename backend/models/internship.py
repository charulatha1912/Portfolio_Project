"""
models/internship.py - Internship data model
Defines the structure and database operations for internships.
"""

from database import get_db_connection


class Internship:
    """
    Represents a work internship.
    Maps to the 'internships' table in PostgreSQL.
    """

    def __init__(self, id, company_name, role, duration, description, technologies):
        self.id = id
        self.company_name = company_name
        self.role = role
        self.duration = duration
        self.description = description
        self.technologies = technologies

    def to_dict(self):
        """Convert internship object to a dictionary (for JSON response)."""
        return {
            "id": self.id,
            "company_name": self.company_name,
            "role": self.role,
            "duration": self.duration,
            "description": self.description,
            "technologies": self.technologies,
        }

    @staticmethod
    def get_all():
        """
        Fetch all internships from the database.
        Returns a list of Internship objects.
        """
        conn = get_db_connection()
        cursor = conn.cursor()

        # SQL query to get all internships ordered by id
        cursor.execute("SELECT id, company_name, role, duration, description, technologies FROM internships ORDER BY id;")
        rows = cursor.fetchall()

        cursor.close()
        conn.close()

        # Convert each database row into an Internship object
        internships = []
        for row in rows:
            internship = Internship(
                id=row[0],
                company_name=row[1],
                role=row[2],
                duration=row[3],
                description=row[4],
                technologies=row[5],
            )
            internships.append(internship)

        return internships
