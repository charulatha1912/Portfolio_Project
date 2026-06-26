"""
config.py - Application configuration
Loads environment variables for database and app settings.
"""

import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()


class Config:
    """Base configuration class."""

    # Database URL from environment variable
    # Format: postgresql://user:password@host:port/dbname
    DATABASE_URL = os.getenv("DATABASE_URL", "")

    # Frontend URL for CORS (Cross-Origin Resource Sharing)
    FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")

    # Flask debug mode (disable in production)
    DEBUG = os.getenv("FLASK_DEBUG", "False").lower() == "true"
