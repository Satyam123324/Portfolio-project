# ✏️ How to update your portfolio

Everything is easy to change. Two things to know:

1. **All the words** (name, about, skills, projects, links) live in ONE file:
   `client/src/data/portfolio.js`
2. **Photos and your resume** are just files you drop into:
   `client/public/`

If `npm run dev` is running, the site updates the moment you save. If not, run
`cd client` then `npm run dev`, and open http://localhost:3000.

---

## 📸 Change your profile picture

1. Get your new photo ready as a **square-ish image** named `sat.png`.
2. Put it in `client/public/images/` (replace the existing `sat.png`).
3. Save. Done — the hero photo updates.

> Want to keep a different filename? Then open `client/src/data/portfolio.js`
> and change the `avatar` line to match, e.g. `avatar: '/images/my-photo.jpg'`.

---

## 📄 Update your resume

1. Save your resume as a PDF named `resume.pdf`.
2. Put it in `client/public/` (so the path is `client/public/resume.pdf`).
3. Save. The **Résumé** button in the hero now downloads your file.

> Different name? Change `resumeUrl: '/resume.pdf'` in `portfolio.js` to match.

---

## 📝 Change any text

Open `client/src/data/portfolio.js`. It's split into clearly labelled sections.
Just edit the text between the quotes `'...'` and save.

- **1. Basic info** — your name, the rotating job titles, tagline, location, email.
- **2. Social links** — your GitHub / LinkedIn / email URLs.
- **3. About** — your bio paragraphs and the three little stats.
- **4. Skills** — each skill's name, `level` (0–100 bar), and category.
- **5. Education** — your degrees (use `status: 'Pursuing'` for the current one).
- **6. Projects** — title, description, tech tags, and GitHub/demo links.

### Add a new item to a list
Copy one existing block (from `{` to `},`), paste it right below, and change the
values. For example, to add a skill:

```js
{ name: 'TypeScript', level: 70, icon: null, group: 'Frontend' },
```

### Change a link
Replace the `'#'` or URL with your real link:

```js
github: 'https://github.com/Satyam123324/my-project',
demo: 'https://my-project.vercel.app',
```

---

## ✅ After editing

- Watch the browser — changes appear instantly while `npm run dev` runs.
- When you're happy, save/commit and push to GitHub, then redeploy (see `README.md`).

That's it. You never need to touch the design code — just this one data file and
the `public` folder.
