# NUXAR - Perfume E-Commerce Platform

A modern, high-end e-commerce platform for perfumes with dramatic animations, 3D effects, and a premium dark-themed interface. Built with React, TypeScript, and cutting-edge web technologies.

## ✨ Features

- 🎨 **Premium Dark Theme** - Sophisticated black and red color scheme with glassmorphism effects
- 🎭 **Advanced Animations** - GSAP-powered scroll animations, 3D transforms, and parallax effects
- 🛍️ **Product Catalog** - Interactive perfume catalog with detailed product information
- 🎯 **Custom Cursor** - Interactive custom cursor for desktop users
- ✨ **Particle Effects** - Canvas-based floating particle field for visual appeal
- 📱 **Fully Responsive** - Optimized for all devices with mobile-first approach
- 🎬 **Cinematic Experience** - Noise texture overlay and chromatic aberration effects
- ♿ **Accessibility** - Reduced motion support for better user experience
- 🔄 **Smooth Transitions** - Typewriter, blur-reveal, clip-path, and elastic animations

- 🤖 **AI Chatbot** - Integrated virtual assistant powered by Google Gemini for perfume consultations
- 🛑 **Rate Limiting** - API protection using Upstash Redis to prevent abuse
- 🛡️ **Bot Protection** - Cloudflare Turnstile integration for secure contact form submission
- 🎨 **Premium Dark Theme** - Sophisticated black and red color scheme with glassmorphism effects
- 🎭 **Advanced Animations** - GSAP-powered scroll animations, 3D transforms, and parallax effects
- 🛍️ **Hybrid Blog System** - Smart fetching from Supabase with static fallback for reliability
- 📱 **Fully Responsive** - Optimized for all devices with mobile-first approach
- 🎬 **Cinematic Experience** - Noise texture overlay and chromatic aberration effects

## 🚀 Tech Stack

### Frontend Core
- **[React 19.2.0](https://react.dev/)** - Modern UI library with latest features
- **[TypeScript 5.9.3](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Vite 7.2.4](https://vite.dev/)** - Next-generation frontend tooling

### AI & Intelligence
- **[Google Generative AI](https://ai.google.dev/)** - Gemini Pro model for conversational intelligence
- **[Vercel AI SDK](https://sdk.vercel.ai/)** - Streaming AI responses for real-time interaction

### Security & Infrastructure
- **[Upstash Redis](https://upstash.com/)** - Serverless database for rate limiting
- **[@upstash/ratelimit](https://github.com/upstash/ratelimit)** - Token bucket rate limiting for API protection
- **[Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/)** - Privacy-friendly bot protection (CAPTCHA alternative)

### Styling & UI
- **[Tailwind CSS 3.4.19](https://tailwindcss.com/)** - Utility-first CSS framework
- **[tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate)** - Animation utilities
- **[tw-animate-css](https://www.npmjs.com/package/tw-animate-css)** - Additional CSS animations
- **[class-variance-authority](https://cva.style/docs)** - Component variant management
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge Tailwind classes

### Animation & 3D
- **[GSAP 3.14.2](https://gsap.com/)** - Professional-grade animation library
- **[@gsap/react](https://gsap.com/react/)** - React integration for GSAP
- **[Three.js 0.182.0](https://threejs.org/)** - 3D graphics library
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers for react-three-fiber

### UI Components (Radix UI)
- **[@radix-ui/react-accordion](https://www.radix-ui.com/primitives/docs/components/accordion)** - Accessible accordion component
- **[@radix-ui/react-alert-dialog](https://www.radix-ui.com/primitives/docs/components/alert-dialog)** - Modal dialogs
- **[@radix-ui/react-avatar](https://www.radix-ui.com/primitives/docs/components/avatar)** - Avatar component
- **[@radix-ui/react-checkbox](https://www.radix-ui.com/primitives/docs/components/checkbox)** - Checkbox inputs
- **[@radix-ui/react-dialog](https://www.radix-ui.com/primitives/docs/components/dialog)** - Dialog modals
- **[@radix-ui/react-dropdown-menu](https://www.radix-ui.com/primitives/docs/components/dropdown-menu)** - Dropdown menus
- **[@radix-ui/react-label](https://www.radix-ui.com/primitives/docs/components/label)** - Form labels
- **[@radix-ui/react-navigation-menu](https://www.radix-ui.com/primitives/docs/components/navigation-menu)** - Navigation menus
- **[@radix-ui/react-popover](https://www.radix-ui.com/primitives/docs/components/popover)** - Popover components
- **[@radix-ui/react-progress](https://www.radix-ui.com/primitives/docs/components/progress)** - Progress indicators
- **[@radix-ui/react-scroll-area](https://www.radix-ui.com/primitives/docs/components/scroll-area)** - Custom scrollbars
- **[@radix-ui/react-select](https://www.radix-ui.com/primitives/docs/components/select)** - Select dropdowns
- **[@radix-ui/react-separator](https://www.radix-ui.com/primitives/docs/components/separator)** - Visual separators
- **[@radix-ui/react-slider](https://www.radix-ui.com/primitives/docs/components/slider)** - Range sliders
- **[@radix-ui/react-switch](https://www.radix-ui.com/primitives/docs/components/switch)** - Toggle switches
- **[@radix-ui/react-tabs](https://www.radix-ui.com/primitives/docs/components/tabs)** - Tab navigation
- **[@radix-ui/react-tooltip](https://www.radix-ui.com/primitives/docs/components/tooltip)** - Tooltips
- And more Radix UI primitives...

### Forms & Validation
- **[react-hook-form 7.70.0](https://react-hook-form.com/)** - Performant form library
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Validation resolvers
- **[Zod 4.3.5](https://zod.dev/)** - TypeScript-first schema validation
- **[input-otp](https://input-otp.rodz.dev/)** - OTP input component

### UI Utilities
- **[Lucide React 0.562.0](https://lucide.dev/)** - Beautiful icon library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[cmdk](https://cmdk.paco.me/)** - Command menu component
- **[vaul](https://vaul.emilkowal.ski/)** - Drawer component
- **[embla-carousel-react](https://www.embla-carousel.com/)** - Carousel component
- **[react-resizable-panels](https://github.com/bvaughn/react-resizable-panels)** - Resizable panel layouts

### Data & Utilities
- **[date-fns 4.1.0](https://date-fns.org/)** - Modern date utility library
- **[react-day-picker](https://react-day-picker.js.org/)** - Date picker component
- **[recharts](https://recharts.org/)** - Charting library

### Backend & Database
- **[@supabase/supabase-js 2.95.3](https://supabase.com/)** - Backend as a Service (BaaS)

### Development Tools
- **[ESLint 9.39.1](https://eslint.org/)** - JavaScript linter
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** - Vite React plugin
- **[PostCSS 8.5.6](https://postcss.org/)** - CSS transformation tool
- **[Autoprefixer 10.4.23](https://github.com/postcss/autoprefixer)** - CSS vendor prefixing
- **[kimi-plugin-inspect-react](https://www.npmjs.com/package/kimi-plugin-inspect-react)** - React inspection plugin

## 📁 Project Structure

```
NUXAR/
├── public/                 # Static assets
│   └── images/            # Product images and media
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── CustomCursor.tsx
│   │   ├── Navigation.tsx
│   │   └── ParticleField.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Works.tsx
│   │   ├── Services.tsx
│   │   ├── KatalogAroma.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── data/              # Static data and configurations
│   ├── config.ts          # Site configuration
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables
├── .env.example           # Environment variables template
├── components.json        # shadcn/ui configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Supabase account (for backend services)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd NUXAR
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up Supabase database**
   - Import the `supabase-perfumes.sql` file into your Supabase project
   - This will create the necessary tables and schema

5. **Start development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Design System

### Color Palette
- **Background**: Black (#000000)
- **Foreground**: White (#ffffff)
- **Accent/Highlight**: Red (#dc2626)
- **Dark Gray**: #141414
- **Light Gray**: #f1f1f1
- **Deep Black**: #0a0a0a

### Typography
- **Font Family**: Geist (Google Fonts)
- **Display XXL**: 168px
- **Display XL**: 126px
- **H1**: 71.66px
- **H2**: 59.72px
- **H3**: 49.77px
- **Body Large**: 20px
- **Body**: 16px
- **Body Small**: 14px

### Animation Easings
- **Dramatic**: `cubic-bezier(0.87, 0, 0.13, 1)`
- **Elastic**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)`
- **Smooth**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Expo Out**: `cubic-bezier(0.16, 1, 0.3, 1)`

## 🌐 Deployment

This project is configured for deployment on Vercel:

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy

The `vercel.json` file contains the necessary configuration for routing and deployment.

## 📝 Configuration

All site content can be configured in `src/config.ts`. This includes:
- Navigation menu items
- Hero section content
- Product catalog
- Services and pricing
- Testimonials and FAQ
- Contact information
- Footer links

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Icons by [Lucide](https://lucide.dev/)
- Animations powered by [GSAP](https://gsap.com/)
- Backend by [Supabase](https://supabase.com/)

---

**Made with ❤️ for premium perfume enthusiasts**
