# NEXUS EduFin

Interactive B2B2C prototype for education financing. It connects universities, banks, and students around tuition plans and institutional risk — without scoring a student’s personal credit history.

Live: [edufin-ecru.vercel.app](https://edufin-ecru.vercel.app)

## What’s in the prototype

- Landing page (Spanish / English)
- Student, university, and bank portals
- Strategic framework, ecosystem architecture, and ROI simulator
- Client-side routes: `/estudiante`, `/universidad`, `/banco`, `/estrategia`, `/arquitectura`, `/simulador`

## Stack

React 19, TypeScript, Vite, Tailwind CSS

No backend and **no API keys**. The app does not call Gemini or any other AI service. Data in the portals is mock.

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.
