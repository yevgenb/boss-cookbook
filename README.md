# Tasty Ideas — Recipes (read-only public site)

A tiny, mobile-friendly cookbook site generated from Markdown recipe files.

- **Readers:** anyone with the URL (public)
- **Writers:** just us (Handy), by adding/editing Markdown in this repo
- **No login, no photos** (for now)

## Add a recipe

Create a new file:

- `src/content/recipes/<slug>.md`

Example:

```md
---
title: "My Recipe"
date: 2026-03-15
tags: [dinner, spicy]
source: "Tasty ideas"
status: published
---

## Ingredients

- ...

## Steps

1. ...
```

Notes:
- `status: draft` keeps it out of the site.
- The URL becomes `/recipes/<slug>/`.

## Run locally

```bash
npm install
npm run dev
# open http://localhost:4321
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (no domain yet)

Recommended: **Cloudflare Pages** → you’ll get a free URL like:

- `https://<project>.pages.dev`

High-level steps:
1. Push this repo to GitHub.
2. In Cloudflare Pages: “Create a project” → connect the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`

(We can add a custom domain later in Cloudflare when you buy one.)
