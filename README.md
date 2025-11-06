# Bojan Mitić - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This portfolio showcases my skills, experience, projects, and education as a Fullstack Web Developer.

## Features

- **Modern Design**: Clean and professional design with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dark Mode Support**: Automatically adapts to system color scheme preferences
- **SEO Optimized**: Proper meta tags and semantic HTML for better search engine visibility
- **Smooth Navigation**: Seamless scrolling between sections
- **Performance Focused**: Built with Next.js 14 for optimal performance

## Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Detailed information about my background and goals
- **Skills**: Comprehensive list of technical skills organized by category
- **Experience & Education**: Timeline of work experience, education, and certifications
- **Projects**: Showcase of personal and academic projects with detailed descriptions
- **Contact**: Multiple ways to get in touch

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm or yarn package manager

### Installation

1. Clone or navigate to the portfolio directory:
```bash
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Update Personal Information

Edit the file `lib/data.ts` to update:
- Personal information (name, email, phone, etc.)
- Skills and technologies
- Work experience
- Education details
- Projects
- Certifications

### Modify Styling

- Global styles: `app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component-specific styles: Located in each component file

### Add New Sections

Create new components in the `components/` directory and import them in `app/page.tsx`.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page with all sections
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Experience.tsx      # Experience & Education section
│   ├── Projects.tsx        # Projects section
│   └── Contact.tsx         # Contact section
├── lib/
│   └── data.ts             # Portfolio data configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies and scripts
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Deploy to Other Platforms

1. Build the project:
```bash
npm run build
```

2. The optimized files will be in the `.next` directory

3. Deploy using your preferred hosting service (Netlify, AWS, etc.)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

This portfolio is optimized for performance with:
- Server-side rendering (SSR)
- Optimized images and fonts
- Minimal JavaScript bundle size
- Efficient CSS with Tailwind

## License

This project is open source and available for personal use.

## Contact

- **Email**: bojanmitic2504@gmail.com
- **Phone**: +381-61-2770964
- **GitHub**: [github.com/Boxon00](https://github.com/Boxon00)

---

Built with ❤️ using Next.js 14 and Tailwind CSS
