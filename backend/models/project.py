"""
models/project.py - Project data model
Defines the structure and database operations for projects.
"""

from database import get_db_connection


class Project:
    """
    Represents a portfolio project.
    Maps to the 'projects' table in PostgreSQL.
    """

    def __init__(self, id, title, description, technologies, duration, github_url, demo_url):
        self.id = id
        self.title = title
        self.description = description
        self.technologies = technologies
        self.duration = duration
        self.github_url = github_url
        self.demo_url = demo_url

    def to_dict(self):
        """Convert project object to a dictionary (for JSON response)."""
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "technologies": self.technologies,
            "duration": self.duration,
            "github_url": self.github_url,
            "demo_url": self.demo_url,
        }

    @staticmethod
    def get_all():
        """
        Fetch all projects from the database.
        Returns a list of Project objects.
        """
        conn = get_db_connection()
        cursor = conn.cursor()

        # SQL query to get all projects ordered by id
        cursor.execute("SELECT id, title, description, technologies, duration, github_url, demo_url FROM projects ORDER BY id;")
        rows = cursor.fetchall()

        cursor.close()
        conn.close()

        # Convert each database row into a Project object
        projects = []
        for row in rows:
            project = Project(
                id=row[0],
                title=row[1],
                description=row[2],
                technologies=row[3],
                duration=row[4],
                github_url=row[5],
                demo_url=row[6],
            )
            projects.append(project)

        return projects
