# Haswell Security V6 Final Release Guide

## Included

- Next.js 15 frontend
- Strapi CMS schemas
- Product center
- Solutions center
- OEM/ODM center
- RFQ route
- Blog system
- OEM landing pages
- Sitemap and robots
- Docker / Nginx / GitHub Actions
- Import CSV samples

## Local Frontend Test

```bash
cd apps/frontend
npm install
npm run build
npm run start
```

## CMS Test

```bash
cd apps/cms
npm install
npm run develop
```

## Production Deploy

```bash
cp .env.production.example .env.production
bash scripts/deploy.sh
```
