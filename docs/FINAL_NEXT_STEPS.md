# Final Next Steps

## 1. Upload to GitHub

```bash
git init
git add .
git commit -m "Haswell Security V6.1 Enterprise Release"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

## 2. Test Frontend

```bash
cd apps/frontend
npm install
npm run build
npm run start
```

## 3. Test CMS

```bash
cd apps/cms
npm install
npm run develop
```

## 4. Replace Placeholder Information

- WhatsApp number
- sales@haswellsecurity.com
- Logo
- Product images
- Product specifications
- Catalog PDFs
- Certifications

## 5. Configure Production

- Cloudflare DNS
- SSL
- SMTP
- Strapi API token
- PostgreSQL password
- Google Analytics
- Google Search Console

## 6. Launch

```bash
cp .env.production.example .env.production
bash scripts/deploy.sh
```
