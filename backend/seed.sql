-- =============================================
-- seed.sql - Database Schema and Sample Data
-- Run this file on your Neon PostgreSQL database
-- to create tables and insert initial data.
-- =============================================


-- ==============================
-- CREATE TABLES
-- ==============================

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,              -- Auto-incrementing unique ID
    title VARCHAR(200) NOT NULL,        -- Project name
    description TEXT NOT NULL,          -- What the project does
    technologies TEXT NOT NULL,         -- Tech stack used
    duration VARCHAR(50),               -- How long it took
    github_url TEXT,                    -- Link to GitHub repo
    demo_url TEXT                       -- Link to live demo
);

-- Internships table
CREATE TABLE IF NOT EXISTS internships (
    id SERIAL PRIMARY KEY,              -- Auto-incrementing unique ID
    company_name VARCHAR(200) NOT NULL, -- Company where internship was done
    role VARCHAR(150) NOT NULL,         -- Job title / role
    duration VARCHAR(50),               -- How long the internship lasted
    description TEXT,                   -- What was done during internship
    technologies TEXT                   -- Tools and technologies used
);


-- ==============================
-- INSERT SAMPLE DATA - PROJECTS
-- ==============================

INSERT INTO projects (title, description, technologies, duration, github_url, demo_url) VALUES
(
    'Inventory Management System',
    'Full-stack inventory tracking platform that allows businesses to manage stock levels, track products, and generate reports. Features include real-time updates, search and filter, and role-based access.',
    'React, Flask, PostgreSQL',
    '2 Months',
    'https://github.com/sarahjohnson/inventory-management',
    'https://inventory-demo.vercel.app'
),
(
    'Task Management App',
    'Kanban-style productivity application for organizing personal and team tasks. Supports drag-and-drop columns, task assignment, priority labels, and due date tracking.',
    'React, Flask',
    '1 Month',
    'https://github.com/sarahjohnson/task-manager',
    'https://task-app-demo.vercel.app'
),
(
    'E-Commerce Backend',
    'RESTful API for an online shopping platform with endpoints for products, orders, users, and payments. Includes authentication with JWT, product search, and order management.',
    'Flask, PostgreSQL',
    '2 Months',
    'https://github.com/sarahjohnson/ecommerce-api',
    'https://ecommerce-api-demo.render.com'
),
(
    'Employee Portal',
    'Internal company dashboard for managing employee records, attendance, leave requests, and department information. Includes admin panel with data visualization charts.',
    'React, PostgreSQL',
    '1 Month',
    'https://github.com/sarahjohnson/employee-portal',
    'https://employee-portal-demo.vercel.app'
),
(
    'Dockerized Blog Platform',
    'Containerized blogging system where users can create, edit, and publish articles. Features markdown support, image uploads, comments, and tag-based filtering. Fully Dockerized for easy deployment.',
    'React, Flask, Docker',
    '2 Months',
    'https://github.com/sarahjohnson/blog-platform',
    'https://blog-platform-demo.vercel.app'
);


-- ==============================
-- INSERT SAMPLE DATA - INTERNSHIPS
-- ==============================

INSERT INTO internships (company_name, role, duration, description, technologies) VALUES
(
    'TechNova Solutions',
    'Frontend Developer Intern',
    '6 Months',
    'Developed responsive user interfaces for client-facing web applications. Collaborated closely with the backend team to integrate REST APIs. Participated in daily standups, code reviews, and sprint planning under an Agile workflow.',
    'React, JavaScript, CSS'
),
(
    'CloudByte Technologies',
    'Full Stack Developer Intern',
    '6 Months',
    'Built and maintained REST APIs using Flask and integrated frontend applications with backend services. Worked with PostgreSQL databases, wrote SQL queries, and contributed to deployment pipelines on cloud infrastructure.',
    'React, Flask, PostgreSQL'
);
