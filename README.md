# Sarah Johnson — Full Stack Portfolio

A beginner-friendly, full-stack portfolio application built with:

| Layer    | Technology          |
|----------|---------------------|
| Frontend | React + Vite        |
| Backend  | Flask (Python)      |
| Database | PostgreSQL (Neon)   |
| Deploy   | Vercel + Render     |

---

## Project Structure

```
portfolio/
├── frontend/               ← React + Vite app
│   ├── src/
│   │   ├── components/     ← Navbar, Footer, ProjectCard, InternshipCard
│   │   ├── pages/          ← Home, Projects, Internships, Contact
│   │   ├── services/       ← api.js (Axios API calls)
│   │   ├── App.jsx         ← Router setup
│   │   └── main.jsx        ← React entry point
│   ├── .env.example
│   └── vercel.json
│
└── backend/                ← Flask API
    ├── routes/             ← project_routes.py, internship_routes.py
    ├── models/             ← project.py, internship.py
    ├── app.py              ← Flask app entry point
    ├── config.py           ← Environment variable config
    ├── database.py         ← DB connection helper
    ├── seed.sql            ← DB schema + sample data
    ├── requirements.txt
    └── .env.example
```

---

## Local Development Setup

### Prerequisites
- Node.js 18+
- Python 3.10+
- A PostgreSQL database (local or Neon free tier)

---

### Step 1 — Set up the Database

1. Create a PostgreSQL database (or use [Neon](https://neon.tech) for a free cloud DB).
2. Copy your connection string — it looks like:
   ```
   postgresql://user:password@hostname/dbname
   ```
3. Open the **Neon SQL editor** (or any PostgreSQL client) and run `backend/seed.sql`.
   This creates the `projects` and `internships` tables and inserts sample data.

---

### Step 2 — Run the Backend

```bash
cd backend

# Create a virtual environment
python -m venv venv
source venv/bin/activate      # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Set up environment variables
cp .env.example .env
# Edit .env and fill in your DATABASE_URL and FRONTEND_URL

# Start the Flask server
python app.py
```

The backend runs on: **http://localhost:5000**

Test it: open http://localhost:5000/api/projects in your browser.

---

### Step 3 — Run the Frontend

```bash
cd frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env — set VITE_API_URL=http://localhost:5000

# Start the dev server
npm run dev
```

The frontend runs on: **http://localhost:5173**

---

## API Endpoints

| Method | Endpoint          | Description              |
|--------|-------------------|--------------------------|
| GET    | `/`               | Health check             |
| GET    | `/api/projects`   | Returns all projects     |
| GET    | `/api/internships`| Returns all internships  |

---

## Deployment

### Frontend → Vercel

1. Push the `frontend/` folder to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo.
3. Set root directory to `frontend`.
4. Add environment variable: `VITE_API_URL=https://your-backend.onrender.com`
5. Deploy.
---

### Backend → Render

1. Push the `backend/` folder to GitHub.
2. Go to [render.com](https://render.com) → New Web Service.
3. Set build command: `pip install -r requirements.txt`
4. Set start command: `gunicorn app:app`
5. Add environment variables:
   - `DATABASE_URL` → your Neon connection string
   - `FRONTEND_URL` → your Vercel app URL

---

### Database → Neon

1. Sign up at [neon.tech](https://neon.tech) (free tier available).
2. Create a new project and database.
3. Copy the connection string.
4. Run `seed.sql` using the Neon SQL editor.

---
