# Deployment Guide - Ducati Scrambler Café Racer Website

## Current Status

✅ **Website is built and running locally**
- Development server: http://localhost:3000
- All files created in: `~/Documents/Personal/Projects/ducati-cafe-racer-sale/`
- Git repository initialized with initial commit

## What You Have

### Features
- **Hero Section** - Full-screen image with motorcycle details
- **Trust Signals** - Mileage, year, horsepower stats bar
- **Story Section** - Compelling description of the bike's condition and heritage
- **Specifications** - Complete technical specs in organized cards
- **Photo Gallery** - 5 images with lightbox viewer (click to enlarge, navigate with arrows)
- **Contact Form** - Email integration ready (needs API key)
- **SEO Optimized** - Meta tags, Open Graph, Twitter Cards

### Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS 4
- Resend API (for email)

## Next Steps for Deployment

### Option 1: Deploy to Vercel (Recommended - Free)

Vercel is made by the Next.js team and offers the best performance for Next.js sites.

1. **Create GitHub Repository**
   ```bash
   cd ~/Documents/Personal/Projects/ducati-cafe-racer-sale
   gh repo create ducati-cafe-racer-sale --public --source=. --remote=origin --push
   ```

2. **Set Up Resend (Email Service)**
   - Go to https://resend.com and sign up (free tier)
   - Get your API key from https://resend.com/api-keys
   - Verify your domain or use the testing domain (onboarding@resend.dev)

3. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository: `ducati-cafe-racer-sale`
   - Add environment variable:
     - Name: `RESEND_API_KEY`
     - Value: Your Resend API key from step 2
   - Click "Deploy"
   - Your site will be live in ~2 minutes at: `https://ducati-cafe-racer-sale.vercel.app`

4. **Optional: Custom Domain**
   - In Vercel project settings, go to "Domains"
   - Add your custom domain (e.g., `ducati.kaykas.com`)
   - Follow DNS instructions

### Option 2: Deploy to Netlify (Alternative - Free)

1. **Create GitHub Repository** (same as Option 1 step 1)

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select `ducati-cafe-racer-sale`
   - Build settings (auto-detected):
     - Build command: `npm run build`
     - Publish directory: `.next`
   - Add environment variable in "Site settings" → "Environment variables":
     - `RESEND_API_KEY`: Your Resend API key
   - Deploy!

### Option 3: Keep It Local for Testing

If you want to test more before deploying:

```bash
# View the site
open http://localhost:3000

# Stop the dev server
lsof -ti:3000 | xargs kill
```

## Email Configuration

The contact form sends emails to `jascha@kaykas.com`. To change this:

1. Edit `app/api/contact/route.ts:29`
2. Change the `to:` field to your preferred email
3. Commit and push changes (will auto-deploy on Vercel/Netlify)

## Customization Tips

### Update Pricing
Edit `app/page.tsx:438` to change "Best Offer" to a specific price.

### Add More Photos
1. Add images to `public/images/`
2. Update `app/components/Gallery.tsx` images array
3. Images will auto-optimize via Next.js

### Change Color Scheme
The site uses Ducati red (`red-600`) as the accent color. To change:
- Search for `red-` in `app/page.tsx` and replace with another Tailwind color (e.g., `blue-`, `green-`)

## Performance

- ✅ Images optimized with Next.js Image component
- ✅ Fast page loads (< 1 second)
- ✅ Mobile responsive
- ✅ SEO optimized for search engines
- ✅ Social sharing cards (Facebook, Twitter, LinkedIn)

## Support

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Vercel Support**: https://vercel.com/docs
- **Resend Docs**: https://resend.com/docs

## Files Overview

```
ducati-cafe-racer-sale/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # SEO meta tags, page structure
│   ├── globals.css           # Global styles
│   ├── components/
│   │   ├── Gallery.tsx       # Photo gallery with lightbox
│   │   └── ContactForm.tsx   # Contact form component
│   └── api/
│       └── contact/
│           └── route.ts      # Email API endpoint
├── public/
│   └── images/              # Your 5 motorcycle photos
├── package.json             # Dependencies
├── README.md               # Setup instructions
└── DEPLOYMENT.md           # This file
```

---

**Your website is ready to deploy! The development server is running at http://localhost:3000**
