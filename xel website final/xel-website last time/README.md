# XEL - AI Chatbot Solutions Website

A modern, responsive website for XEL's AI chatbot development services built with Next.js and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd xel-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Deployment

### Netlify Deployment

This site is configured for easy Netlify deployment:

1. **Push to GitHub:**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Connect to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your GitHub repository
   - Build settings are automatically detected from `netlify.toml`

3. **Build Settings:**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: 18

### Manual Build

To build the static site locally:

\`\`\`bash
npm run build
\`\`\`

The static files will be generated in the `out` directory.

## 🛠️ Technologies Used

- **Next.js 14** - React framework with static export
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - Modern UI components
- **Lucide React** - Beautiful icons

## 📂 Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── favicon.ico        # Favicon
├── components/
│   ├── ui/               # Reusable UI components
│   ├── header.tsx        # Navigation header
│   ├── hero.tsx         # Hero section
│   ├── about.tsx        # About section
│   ├── services.tsx     # Services section
│   ├── industries.tsx   # Industries section
│   ├── process.tsx      # Process section
│   ├── pricing.tsx      # Pricing section
│   ├── testimonials.tsx # Testimonials section
│   ├── faq.tsx          # FAQ section
│   ├── contact.tsx      # Contact section
│   ├── footer.tsx       # Footer
│   └── cta-section.tsx  # Call-to-action sections
├── netlify.toml          # Netlify configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies and scripts
\`\`\`

## ✨ Features

- 📱 **Fully Responsive** - Works on all device sizes
- 🎨 **Modern Design** - Clean, professional appearance
- 🚀 **Fast Loading** - Optimized static site generation
- 📧 **Contact Forms** - Multiple contact options
- 🔍 **SEO Optimized** - Proper meta tags and structure
- ♿ **Accessible** - Screen reader friendly
- 📞 **Click-to-Call** - Phone numbers and WhatsApp integration

## 🔧 Customization

### Updating Content
- Edit component files in the `components/` directory
- Update contact information in `components/contact.tsx`
- Modify pricing in `components/pricing.tsx`

### Styling
- Global styles: `app/globals.css`
- Component styles: Tailwind classes in component files
- Colors and themes: Modify CSS variables in `globals.css`

## 📞 Contact Information

- **Email:** contact@xelai.in
- **Phone:** +91 8081139546
- **WhatsApp:** [Chat on WhatsApp](https://wa.me/918081139546)
- **Address:** 199-C Transport Nagar, Prayagraj, Uttar Pradesh

## 📄 License

© 2025 XEL. All rights reserved.
