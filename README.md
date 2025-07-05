# GrowthProAI – Full Stack Intern Assignment

A **Mini Local Business Dashboard** that simulates how small businesses might view their Google‑style ratings, review counts, and AI‑generated SEO headlines — one of GrowthProAI’s core use‑cases.

---

## 🚀 Tech Stack

| Layer        | Technology                                            |
| ------------ | ----------------------------------------------------- |
| **Frontend** | React 18, Vite 7, Tailwind CSS 3                      |
| **Backend**  | Node 18, Express 4                                    |
| **State**    | React Context API                                     |
| **Styling**  | Tailwind utility classes + custom keyframe animations |

---

## 📂 Project Structure

```txt
growthproai-dashboard/
├── growthproai-backend/     # Node + Express API
│   ├── server.js            # two REST endpoints
│   ├── headlines.js         # static headline templates
│   └── package.json
│
└── growthproai-frontend/    # Vite + React client
    ├── index.html
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── src/
    │   ├── index.css        # Tailwind imports + custom animations
    │   ├── main.jsx         # entry point
    │   ├── App.jsx          # root component
    │   ├── context/
    │   │   └── BusinessContext.jsx
    │   └── components/
    │       ├── BusinessForm.jsx
    │       ├── DisplayCard.jsx
    │       └── Spinner.jsx
    └── package.json
```

---

## ⚙️ Local Setup

### 1 · Backend

```bash
cd growthproai-backend
npm install
npm run dev        # http://localhost:5000
```

### 2 · Frontend

```bash
cd growthproai-frontend
npm install
npm run dev        # http://localhost:5173
```

Open your browser at **[http://localhost:5173](http://localhost:5173)** and start testing.

---

## 🔑 Core Features

* **Input Form** – enter *Business Name* & *Location*
* **Simulated Google Data** – random rating (3–5★) & review count
* **AI‑Style Headline** – generated from static templates
* **🔄 Regenerate Button** – fetches a fresh headline without reloading page
* **Loading Spinner** – visible during API calls
* **Responsive UI** – mobile‑first layout with subtle fade/slide animations
* **Backend Logging** – console logs every request for easy debugging

---

## 🌍 Optional Deployments

| Part     | Platform | Status |  URL                                                                   |
| -------- | -------- | ------ | ---------------------------------------------------------------------- |
| Frontend | Vercel   | *live* | [https://your-frontend.vercel.app](https://your-frontend.vercel.app)   |
| Backend  | Render   | *live* | [https://your-backend.onrender.com](https://your-backend.onrender.com) |

> Replace the placeholders above after deploying (see quick‐start docs on Vercel / Render).

---

## 🧑‍💻 Scripts Reference

| Command           | Location                |  Purpose                        |
| ----------------- | ----------------------- | ------------------------------- |
| `npm run dev`     |  `growthproai-backend`  | run Express server with Nodemon |
| `npm start`       |  `growthproai-backend`  | production start command        |
| `npm run dev`     |  `growthproai-frontend` | Vite dev server                 |
| `npm run build`   |  `growthproai-frontend` | production build to `dist/`     |
| `npm run preview` |  `growthproai-frontend` | preview built static site       |

---

 

## ✉️ Submission Details

1. **GitHub Repo** – you’re looking at it!
2. **(Optional) Deploy Links** – see *Optional Deployments* table above.
3. **nithinmendi123@gmail.com** – `Submission: Full Stack Intern Assignment – <Your Nithin Mendi>`

🙏 Thank you for reviewing my submission.

— **\Mendi Nithin>**
