# Static Blog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and publish a plain static personal blog on GitHub Pages.

**Architecture:** The site is a root-published static page with no build pipeline. `index.html` contains semantic content and `styles.css` contains all layout, responsive behavior, and visual treatment.

**Tech Stack:** HTML5, CSS3, GitHub Pages, GitHub CLI.

---

### Task 1: Static Site Files

**Files:**
- Create: `index.html`
- Create: `styles.css`
- Create: `README.md`

- [ ] **Step 1: Create `index.html`**

Add a semantic single-page blog with header, hero, article list, welcome post, and footer. Use an external writing-desk image as the primary visual asset.

- [ ] **Step 2: Create `styles.css`**

Add responsive CSS for desktop and mobile, with a restrained editorial palette, readable typography, hover states, and no build dependencies.

- [ ] **Step 3: Create `README.md`**

Document the repository purpose, where to edit content, and the GitHub Pages URL.

### Task 2: Verification

**Files:**
- Read: `index.html`
- Read: `styles.css`
- Read: `README.md`

- [ ] **Step 1: Check file presence**

Run: `rg --files -uu -g '!node_modules' -g '!.git'`

Expected: includes `index.html`, `styles.css`, `README.md`, and docs files.

- [ ] **Step 2: Inspect content references**

Run: `rg "styles.css|一支铅笔的博客|article|images.unsplash.com" index.html styles.css README.md`

Expected: stylesheet is linked, blog title appears, article content exists, and the image URL is present.

### Task 3: Publish

**Files:**
- Stage: `index.html`
- Stage: `styles.css`
- Stage: `README.md`
- Stage: `docs/superpowers/specs/2026-05-01-static-blog-design.md`
- Stage: `docs/superpowers/plans/2026-05-01-static-blog.md`

- [ ] **Step 1: Commit**

Run: `git add ... && git commit -m "Create static blog"`

Expected: commit succeeds on `main`.

- [ ] **Step 2: Create repository**

Run: `gh repo create blog --public --source=. --remote=origin --push`

Expected: GitHub repository `yizhiqianbi/blog` is created and branch `main` is pushed.

- [ ] **Step 3: Enable Pages**

Run: `gh api -X POST repos/yizhiqianbi/blog/pages -f source.branch=main -f source.path=/`

Expected: GitHub Pages is configured for `main` branch root.

- [ ] **Step 4: Verify Pages**

Run: `gh api repos/yizhiqianbi/blog/pages`

Expected: output includes a `html_url` similar to `https://yizhiqianbi.github.io/blog/`.
