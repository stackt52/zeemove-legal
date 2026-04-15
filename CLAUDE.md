# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js App Router** project — a single-page Privacy Notice website for ZeeMove (a Zambian ride-hailing, delivery, and fintech platform).

**Key files:**
- `src/app/page.tsx` — Home page, renders the `Content` component
- `src/app/content.tsx` — The entire site content as a single client component (`"use client"`). Contains the privacy notice text, interactive sidebar navigation, and data processing tables.
- `src/app/layout.tsx` — Root layout with metadata and Geist font
- `src/app/globals.css` — Global styles with Tailwind CSS v4 imports

The app is essentially one large React component (`content.tsx`) with:
- A sticky sidebar with smooth-scroll navigation links
- Scroll detection to highlight the active section
- Data processing tables for General services and ZeeMove Pay
- Documented under the **Zambian Data Protection Act 2021**

## Deployment

Deployed to **Firebase Hosting** via two GitHub Actions workflows:
- PRs → preview channel deployment
- Merges to `main` → live channel deployment

Firebase project: `zeemove-legal`
Build uses `FIREBASE_CLI_EXPERIMENTS: webframeworks`

## Tech Stack

- Next.js 16 + React 19 (App Router)
- Tailwind CSS v4
- Lucide React (icons)
- TypeScript (strict mode, path alias `@/*` → `./src/*`)
