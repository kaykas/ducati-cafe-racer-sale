# 2017 Ducati Scrambler Café Racer - Sale Website

Modern, minimalist microsite for selling a 2017 Ducati Scrambler Café Racer with under 1,000 miles.

## Features

- 📸 Beautiful photo gallery with lightbox
- 📧 Contact form with email forwarding
- 🔍 SEO optimized with structured data
- 📱 Fully responsive design
- ⚡ Fast loading with Next.js 14 and image optimization

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email Forwarding

1. Sign up for a free Resend account: https://resend.com
2. Get your API key from: https://resend.com/api-keys
3. Create `.env.local` file:

```bash
cp .env.local.example .env.local
```

4. Add your Resend API key to `.env.local`:

```
RESEND_API_KEY=re_your_actual_api_key_here
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Deployment to Vercel

### Quick Deploy

1. Push code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variable: RESEND_API_KEY
6. Deploy!

## SEO Optimization

The site includes:

- Comprehensive meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Twitter Card tags
- Semantic HTML structure
- Optimized images with Next.js Image component

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS 4
- Resend (email API)
- Vercel (hosting)

## Motorcycle Specifications

- **Model:** 2017 Ducati Scrambler Café Racer
- **Mileage:** Under 1,000 miles
- **Engine:** 803cc L-Twin
- **Power:** 75hp @ 8,250 rpm
- **Condition:** Pristine, indoor stored
- **Location:** Bay Area, California

## Contact

For inquiries about the motorcycle, use the contact form on the site or email directly.
