# Satyam Aggarwal — Portfolio (MERN)

A modern, full-stack developer portfolio with a **sleek dark + gradient** design.
Built with the **MERN stack**: a **React (Vite)** frontend and a **Node/Express + MongoDB**
backend that powers a working contact form (messages are saved to the database).

**Sections:** Hero · About + Education timeline (BCA 2020–2025, MCA 2025–2027) · Skills · Projects · Contact.

```
Portfolio Project/
├── client/            # React + Vite frontend
│   ├── public/images/ # avatar + skill icons
│   └── src/
│       ├── components/ # Navbar, Hero, About, Skills, Projects, Contact, Footer…
│       ├── data/portfolio.js  # ← edit your content here
│       ├── App.jsx
│       └── index.css   # the theme
├── server/            # Express + MongoDB backend
│   ├── models/Message.js
│   ├── routes/contact.js
│   ├── server.js
│   └── .env.example
└── README.md
```

---

## ✏️ Update your content

Almost everything lives in **`client/src/data/portfolio.js`** — your name, roles,
tagline, socials, skills, education, and projects. Edit that one file to make it yours.

- **Résumé:** drop your PDF at `client/public/resume.pdf` (the Hero button downloads it).
- **Avatar / icons:** replace files in `client/public/images/`.
- **LinkedIn/GitHub links:** update the `socials` array in `portfolio.js`.
- **Projects:** replace the sample projects with your real ones (title, description, tags, GitHub + live links).

---

## 🖥️ Run it locally

You need [Node.js](https://nodejs.org) (v18+). MongoDB is optional for the UI, but
required if you want the contact form to actually save messages
(install MongoDB locally or use a free [MongoDB Atlas](https://www.mongodb.com/atlas) cluster).

### 1. Frontend

```bash
cd client
npm install
npm run dev
```

Open the URL Vite prints (http://localhost:3000).

### 2. Backend (for the contact form)

```bash
cd server
npm install
cp .env.example .env      # then edit .env with your MongoDB URI
npm run dev
```

The server runs on http://localhost:5000. In dev, Vite proxies `/api` to it
automatically, so the contact form just works.

---

## 🌐 Deploy

Because this is full-stack, the frontend and backend are hosted separately.

### Frontend → GitHub Pages / Vercel / Netlify

**Vercel or Netlify (easiest):** import the repo, set the project root to `client/`,
build command `npm run build`, output directory `dist`.

**GitHub Pages:**
1. In `client/vite.config.js`, set `base: '/Portfolio-project/'` (your repo name).
2. `cd client && npm run build` — this creates `client/dist`.
3. Publish `client/dist` (e.g. via the `gh-pages` package or a GitHub Action).

After deploying, set the frontend env var **`VITE_API_URL`** to your backend URL
(see below) so the contact form points at the live server.

### Backend → Render (free tier)

1. Push this repo to GitHub.
2. On [Render](https://render.com), create a **New Web Service** from the repo.
3. Root directory: `server`  ·  Build: `npm install`  ·  Start: `npm start`.
4. Add environment variables:
   - `MONGO_URI` → your MongoDB Atlas connection string
   - `CLIENT_ORIGIN` → your deployed frontend URL (e.g. `https://satyam123324.github.io`)
5. Copy the Render URL (e.g. `https://portfolio-api.onrender.com`) into the
   frontend's `VITE_API_URL`, then rebuild/redeploy the frontend.

### Database → MongoDB Atlas

Create a free cluster, add a database user, allow network access, and copy the
connection string into `MONGO_URI`.

---

## 🔌 API

| Method | Route           | Purpose                                   |
|--------|-----------------|-------------------------------------------|
| POST   | `/api/contact`  | Save a contact message `{name,email,message}` |
| GET    | `/api/contact`  | List recent messages (protect in production) |

The contact endpoint is rate-limited (20 requests / 15 min) to reduce spam.

---

## 🛠️ Tech

React 18 · Vite 5 · Node · Express 4 · MongoDB · Mongoose 8 · vanilla CSS (no framework).
