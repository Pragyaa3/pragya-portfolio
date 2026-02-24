# Pragya Hurmade — AI-Powered Portfolio

> Full-Stack & Blockchain Developer portfolio with an AI chat assistant that answers questions about my resume, skills, projects, and experience in real-time.

![Portfolio Preview](https://approaches-explicitly-had-includes.trycloudflare.com)

---

## ✨ Features

- **AI Chat Widget** — Floating chat powered by OpenRouter (free LLMs) that answers recruiter questions about my resume
- **Particle Canvas Hero** — Animated particle network with floating elements
- **Custom Cursor** — Smooth cursor with follower effect
- **Scroll Animations** — Fade-in reveals on every section
- **Experience Timeline** — All internships with details
- **Achievements Section** — Hackathon wins and recognitions
- **Featured Projects** — VerdictXR, Unified Inbox, CertifyHub, Microservices E-commerce, MediSync
- **Experience Timeline** with 4 internships/roles
- **Chat History Logging** — All conversations saved to SQLite database
- **Multi-Model Fallback** — Automatically switches to next free model if rate limited

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + TypeScript + Vite |
| Styling | Tailwind CSS v3 |
| Backend | Python 3 + FastAPI |
| Database | SQLite (via Python stdlib) |
| Chat Engine | OpenRouter API (free LLMs) |
| Fonts | Syne + DM Sans + JetBrains Mono |

---

## 📁 Project Structure

```
pragya-portfolio/
├── frontend/                  # React + TypeScript
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Achievements.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── ChatWidget.tsx
│   │   ├── hooks/
│   │   │   └── useChat.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   └── index.css
│   └── package.json
│
└── backend/                   # Python FastAPI
    ├── main.py
    ├── routes/chat.py
    ├── services/openrouter.py
    ├── models/schemas.py
    ├── db/database.py
    ├── data/resume.py
    └── requirements.txt
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Python 3.10+
- An [OpenRouter](https://openrouter.ai) API key (free)

### 1. Clone the repo
```bash
git clone https://github.com/Pragyaa3/pragya-portfolio.git
cd pragya-portfolio
```

### 2. Setup Frontend
```bash
cd frontend
npm install
npm run dev
```
Frontend runs at `http://localhost:5173`

### 3. Setup Backend
```bash
cd backend

# Create and activate virtual environment
python -m venv venv
venv\Scripts\activate        # Windows
source venv/bin/activate     # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Create .env file
echo OPENROUTER_API_KEY=your_key_here > .env

# Run server
uvicorn main:app --reload --port 8000
```
Backend runs at `http://localhost:8000`

### 4. Get OpenRouter API Key
1. Go to [openrouter.ai](https://openrouter.ai)
2. Sign up → Keys → Create Key
3. Paste it in `backend/.env`

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/api/chat` | Send message to AI assistant |

### Chat Request Body
```json
{
  "message": "What are Pragya's top skills?",
  "history": []
}
```

### Chat Response
```json
{
  "reply": "Pragya's top skills include...",
  "success": true
}
```

---

## 🌐 Public Access (Cloudflare Tunnel)

To expose locally running app publicly:

```bash
# Install cloudflared
# Windows: download from https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/

cloudflared tunnel --url http://localhost:5173
```

This gives a public URL like `https://random-name.trycloudflare.com`

---

## 🤖 How the AI Chat Works

1. User sends a message via the chat widget
2. Frontend POSTs to `/api/chat` with message + conversation history
3. FastAPI backend builds a prompt with the full resume context
4. OpenRouter routes the request to a free LLM (tries multiple models with fallback)
5. Response is returned to frontend and saved to SQLite
6. Chat history persists across the session

---

## 📦 Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENROUTER_API_KEY` | Your OpenRouter API key (required) |

---

## 👩‍💻 Author

**Pragya Hurmade**
- GitHub: [@Pragyaa3](https://github.com/Pragyaa3)
- LinkedIn: [pragyahurmade03](https://linkedin.com/in/pragyahurmade03)
- Email: pragyahurmade2226@gmail.com
