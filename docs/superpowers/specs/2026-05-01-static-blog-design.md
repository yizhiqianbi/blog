# Static Blog Design

## Goal

Create a minimal personal blog that can be hosted directly from GitHub Pages without a build step.

## Approach

The site will use plain HTML and CSS in the repository root so GitHub Pages can publish from the `main` branch root. The first screen presents the blog name, a short profile line, a writing-focused visual, and a clear link to the latest article list.

## Content

- Blog title: "一支铅笔的博客"
- Intro: short personal writing space for notes, projects, and reflections.
- Article list: three starter entries, including one expanded welcome post.
- Footer: GitHub Pages hosting note.

## Files

- `index.html`: semantic page structure and starter content.
- `styles.css`: responsive layout, typography, colors, image treatment, and interaction states.
- `README.md`: repository purpose and publishing notes.

## Publishing

Create a GitHub repository named `blog` under the authenticated account `yizhiqianbi`. Push the local `main` branch and enable GitHub Pages with source `main` branch, `/` root.

## Verification

Open the local HTML in a browser-compatible way, inspect the static files, and use GitHub CLI/API output to confirm the remote repository and Pages configuration.
