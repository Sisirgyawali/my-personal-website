# My Personal Website

A full personal portfolio website — **frontend, backend, API routes, and a database** —
built with Next.js, TypeScript, Tailwind CSS, and Prisma + PostgreSQL.

It includes pages for **About**, **Studies**, **Hobbies**, **Projects**, a **Guestbook**
(visitors can leave a note that's saved to a real database), and a **Contact** form
(messages are saved to a real database too).

---

## 1. What's inside (architecture overview)

```
Browser (frontend)
   │  React pages styled with Tailwind CSS (app/*.tsx)
   ▼
Next.js server (backend)
   │  API routes: app/api/contact/route.ts, app/api/guestbook/route.ts
   ▼
Prisma ORM (lib/prisma.ts)
   ▼
PostgreSQL database (hosted for free, e.g. on Neon)
```

Everything — frontend pages, backend API, and the database client — lives in
**one Next.js project**, which is exactly how Vercel expects it. You don't
need a separate backend server.

### Project structure

```
.
├── app/
│   ├── layout.tsx          ← shared layout (nav + footer + fonts)
│   ├── page.tsx             ← Home page
│   ├── about/page.tsx       ← About page
│   ├── studies/page.tsx     ← Studies / education page
│   ├── hobbies/page.tsx      ← Hobbies page
│   ├── projects/page.tsx     ← Projects page
│   ├── guestbook/page.tsx    ← Guestbook page (reads/writes DB)
│   ├── contact/page.tsx      ← Contact form page (writes DB)
│   └── api/
│       ├── contact/route.ts   ← backend endpoint for the contact form
│       └── guestbook/route.ts ← backend endpoint for the guestbook
├── components/               ← reusable UI pieces (Nav, Footer, etc.)
├── data/profile.ts            ← ⭐ ALL YOUR PERSONAL INFO GOES HERE
├── lib/prisma.ts               ← database client setup
├── prisma/schema.prisma         ← database table definitions
├── .env.example                  ← template for your database connection
└── package.json
```

---

## 2. What you'll need before starting

1. **Node.js** (version 18 or newer) — download from https://nodejs.org (choose the "LTS" version).
2. **Git** — download from https://git-scm.com
3. A free **GitHub** account — https://github.com/signup
4. A free **Vercel** account — https://vercel.com/signup (sign up using your GitHub account, it's easier)
5. A code editor — [VS Code](https://code.visualstudio.com/) is recommended.

After installing, open a terminal and check everything works:

```bash
node -v
git -v
```

You should see version numbers, not "command not found".

---

## 3. Personalize the website (the important part!)

Open **`data/profile.ts`**. This single file controls almost everything on the
site: your name, bio, education, hobbies, skills, projects, and social links.

Go through it top to bottom and replace every placeholder (`"Your Name"`,
`"Name of your College / University"`, etc.) with your real information.
Each section is commented so you know what it controls. You don't need to
touch any other file to update your content.

---

## 4. Run the website on your computer

Open a terminal **inside the project folder** (where `package.json` is) and run:

```bash
npm install
```

This downloads all the libraries the project needs (Next.js, React, Tailwind, Prisma, etc.).

Now copy the environment file:

```bash
cp .env.example .env
```

You can leave `.env` empty for now — the site will run, but the **Guestbook**
and **Contact form** won't be able to save data until you connect a database
(Step 5 below).

Start the development server:

```bash
npm run dev
```

Open your browser to **http://localhost:3000** — you should see your website!
Any time you save a file, the page refreshes automatically.

---

## 5. Set up a free database (PostgreSQL via Neon)

The Contact form and Guestbook need a real database to store messages and
notes. **Neon** gives you a free PostgreSQL database that works perfectly
with Vercel.

1. Go to **https://neon.tech** and sign up (you can use your GitHub account).
2. Click **Create a project**. Give it any name (e.g. `my-website-db`) and pick a region close to you.
3. Once created, Neon shows you a **connection string** that looks like:
   ```
   postgresql://username:password@ep-something.region.aws.neon.tech/neondb?sslmode=require
   ```
   Click **Copy**.
4. Open the `.env` file in your project and paste it in:
   ```
   DATABASE_URL="postgresql://username:password@ep-something.region.aws.neon.tech/neondb?sslmode=require"
   ```
5. Now create the database tables (Message + GuestbookEntry) defined in
   `prisma/schema.prisma` by running:
   ```bash
   npx prisma db push
   ```
   You should see "Your database is now in sync with your Prisma schema."

6. Restart your dev server (`npm run dev`) and try the **Guestbook** and
   **Contact** pages — they should now save successfully.

> **Tip:** To view the data you've collected, run `npx prisma studio` —
> it opens a browser-based table editor for your database. Neon's website
> also has a built-in SQL editor under your project's "Tables" tab.

> **Alternatives to Neon:** Vercel Postgres and Supabase both also offer free
> PostgreSQL databases and work the same way — just put their connection
> string into `DATABASE_URL`.

---

## 6. Put your project on GitHub

GitHub stores your code online and is what Vercel will deploy from.

1. Go to **https://github.com/new**.
2. Give your repository a name, e.g. `my-personal-website`.
3. Leave it **Public** or **Private** (your choice) and **do not** check
   "Add a README" or ".gitignore" (we already have those).
4. Click **Create repository**. Keep this page open — GitHub will show you
   commands like the ones below.

Now back in your terminal, inside the project folder:

```bash
git init
git add .
git commit -m "Initial commit: my personal website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/my-personal-website.git
git push -u origin main
```

Replace `YOUR-USERNAME` and the repo name with your own. After this, refresh
your GitHub repository page — your code should all be there.

> **Important:** Your `.env` file (with your database password) is listed in
> `.gitignore`, so it will **not** be uploaded to GitHub. That's correct and
> intentional — never commit real passwords or connection strings.

---

## 7. Deploy to Vercel

1. Go to **https://vercel.com/new**.
2. Click **"Import Git Repository"** and choose the `my-personal-website`
   repo you just pushed (you may need to click "Adjust GitHub App
   Permissions" the first time to give Vercel access).
3. Vercel will auto-detect this as a **Next.js** project — you don't need to
   change the build settings.
4. Before clicking Deploy, open the **Environment Variables** section and add:
   - **Name:** `DATABASE_URL`
   - **Value:** the same Neon connection string you put in your `.env` file
5. Click **Deploy**.

Vercel will install dependencies, run `prisma generate`, build the site, and
give you a live URL like `https://my-personal-website.vercel.app`. Open it —
your site is now live on the internet! 🎉

Test the **Guestbook** and **Contact** pages on the live site to confirm they
can reach your database.

---

## 8. Making future updates

Whenever you want to change something (edit `data/profile.ts`, add a new
page, tweak styling):

```bash
git add .
git commit -m "Describe what you changed"
git push
```

Every push to the `main` branch automatically triggers a new deployment on
Vercel — your live site updates within a minute or two, with zero extra
steps.

---

## 9. (Optional) Add your own domain name

1. Buy a domain from any registrar (Namecheap, GoDaddy, Google Domains, etc.).
2. In your Vercel project, go to **Settings → Domains** and add your domain.
3. Vercel will show you DNS records to add at your registrar. Add them, wait
   a few minutes, and your site will be live at your custom domain with free
   HTTPS.

---

## 10. Troubleshooting

**"The database isn't connected yet" error on Contact/Guestbook:**
Make sure `DATABASE_URL` is set — both in your local `.env` file *and* in
Vercel's Environment Variables (Settings → Environment Variables), then
redeploy.

**Build fails on Vercel mentioning Prisma:**
Make sure you ran `npx prisma db push` at least once so your database schema
matches `prisma/schema.prisma`. The build itself runs `prisma generate`
automatically (already set up in `package.json`).

**Changes to `data/profile.ts` aren't showing up:**
Make sure you saved the file and that `npm run dev` is still running. On the
live site, make sure you committed and pushed your changes (Step 8).

**I want to reset the Guestbook/Contact tables:**
Run `npx prisma studio`, open the table, and delete rows manually — or run
`npx prisma db push --force-reset` (⚠️ this deletes ALL data in those tables).

---

## 11. Useful commands reference

| Command | What it does |
|---|---|
| `npm run dev` | Run the site locally at http://localhost:3000 |
| `npm run build` | Build the production version (also run automatically by Vercel) |
| `npm run start` | Run the production build locally |
| `npx prisma db push` | Sync your database tables with `prisma/schema.prisma` |
| `npx prisma studio` | Open a visual database browser |
| `git add . && git commit -m "..." && git push` | Save and deploy your changes |

Enjoy your new website!
