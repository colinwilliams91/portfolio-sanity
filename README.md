## Note to Self 6/13/23

added `vercel.json` to override servlerless (AWS Lambda) region to `cle1` per Vercel outtage issues. See `Documents/OP SPARK/PROJECTS` for screenshot of warning. Default region set to `IAD1` (iad1 ? us-east-1 ?). Remove `vercel.json` to return to default?

## Getting Started

Run the development server:

```bash
npm run dev
```

localhost:3000/admin - to manage studio datasets

Open [http://localhost:3000](http://localhost:3000) in the browser.

## Techs Used

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

- NextJS - react framework, routing, data fetching and integrations
- Vercel - continuous deployment
- GROQ - query runtime language with AI (for managing API data access/communication)
- Sanity.io - cloud based content management system (for datasets)
- TailwindCSS - in-line front end styling
- Framer - fun animations
- React Icons - simple UI icons
- JSFXR - Sound synthesis and curation (coming soon...)

## Deployed on Vercel

Seemless Integration and CD with Vercel with Next.js: [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[Next.js deployment documentation](https://nextjs.org/docs/deployment).
