# jtporter.dev

Personal site and resume for JT Porter, built with [Astro](https://astro.build).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Editing content

Almost everything lives in **`src/data/profile.ts`**: bio, experience, skills, education, and the /now page.
The homepage and `/resume` both read from it, so updating a job updates both.

- Case studies: `src/pages/work/*.md`
- Search for `TODO` to find copy that still needs real details.
- Printable CV: open `/resume` and use the browser's "Save as PDF".

## Deploying

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.
In the repo settings, set **Pages → Source** to **GitHub Actions**. `public/CNAME` holds the custom domain.
