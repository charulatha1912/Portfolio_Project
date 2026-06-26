"""
database.py - Database connection helper
Provides a reusable function to connect to PostgreSQL.
"""

import psycopg2
from config import Config


def get_db_connection():
    """
    Creates and returns a new PostgreSQL database connection.
    Uses the DATABASE_URL from environment variables.

    Returns:
        psycopg2 connection object

    Usage:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM projects;")
        ...
        cursor.close()
        conn.close()
    """
    try:
        conn = psycopg2.connect(Config.DATABASE_URL)
        return conn
    except psycopg2.OperationalError as e:
        print(f"[ERROR] Could not connect to the database: {e}")
        raise
