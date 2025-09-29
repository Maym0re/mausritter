# Mausritter Campaign Toolkit

Interactive web toolkit for running Mausritter campaigns: hex map builder, character management, time & travel tracker, markers, images overlay and demo access without registration.

Live demo / production: https://mausritter.vercel.app/

## Contents
- Overview
- Key Features
- Tech Stack
- Getting Started
- Environment Variables
- Available Scripts
- i18n
- Deployment
- License

## Overview
This application helps GMs and players manage a Mausritter campaign in the browser. It focuses on fast map interaction, lightweight persistence and an accessible demo mode. The UI is optimized for desktop / tablet (mobile WIP).

## Key Features
- Hex Map Builder (add, edit, label, reveal, random generation helpers)
- Drag & drop / paste images onto the map (clipboard image pasting supported)
- Markers system with pointer icons and z-order
- Character manager & character generator (rules-inspired random generation)
- Time & Travel tracker (round / turn / watch, weather events)
- Context menu for quick actions (e.g., paste image)
- Demo campaign (no auth) for instant trial
- Dice roller with log & multiple color themes
- GM / Player role separation (visibility & editing constraints)
- Persistent notes (player + GM master notes)
- Clipboard image storage size limits and marker count limits with toasts

## Tech Stack
- Framework: Next.js (App Router)
- Language: TypeScript
- UI: React + Tailwind CSS + custom components
- Canvas / Rendering: Konva (react-konva)
- Hex math: honeycomb-grid
- Auth: NextAuth (GitHub / Google + credentials)
- ORM / DB: Prisma + (likely PostgreSQL/SQLite depending on deployment)
- i18n: simple key-based module (src/i18n)
- Build / Deploy: Vercel
- Package manager: pnpm

## Getting Started
Install dependencies:
```bash
pnpm install
```
Run development server:
```bash
pnpm dev
```
Open http://localhost:3000

Generate Prisma client (after editing schema):
```bash
pnpm prisma generate
```
Run initial seed (optional demo data):
```bash
pnpm ts-node prisma/seed.ts
```

## Available Scripts
- pnpm dev – start dev server
- pnpm build – production build
- pnpm start – run built app
- pnpm lint – lint sources
- pnpm prisma generate – regenerate Prisma client
- pnpm prisma migrate dev – create/apply migrations

## i18n
Currently English keys; structure allows extension. To add another language create a file similar to en.ts and update i18n/index.ts export logic.

Refer to prisma/schema.prisma for authoritative definitions.

## Deployment
Deployed via Vercel (build: next build). Ensure DATABASE_URL and NEXTAUTH secrets configured in project settings. For production OAuth, set provider callback URLs to your Vercel domain.


## License
Insert chosen license (e.g., MIT) here. If using Mausritter IP, respect original game licensing; this toolkit is fan-made and unaffiliated.

---
Feel free to open issues for bugs, feature suggestions or performance regressions.
