# Lena Imdahl - Portfolio

A minimal, modern portfolio website showcasing design and development work.

## Features

- Clean, responsive design
- Dark mode support
- Fast and lightweight
- Built with React, TypeScript, and Tailwind CSS
- Optimized build pipeline with Vite

## Getting Started

### Requirements

- [Node.js](https://nodejs.org) (>= 20)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server with hot reload:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` with automatic page reloading on file changes.

## Production Build

Create an optimized production build:

```bash
npm run build
```

Or clean and rebuild:

```bash
npm run dist
```

Build output is generated in the `dist/` folder and ready for deployment.

## Docker

A multi-stage Dockerfile is included for containerized deployment with nginx.

### Build the Image

```bash
docker build -t lenaimdahl.de .
```

### Run the Container

```bash
docker run -p 8080:8080 lenaimdahl.de
```

The site will be available at `http://localhost:8080`.

### Push to Registry

```bash
docker tag lenaimdahl.de your-registry/lenaimdahl.de:latest
docker push your-registry/lenaimdahl.de:latest
```

## Structure

- `index.html` - Vite's minimal HTML entry point
- `src/pages/` - React page components
- `src/components/` - Shared React components
- `src/routes/` - React Router routes and paths
- The portfolio is at `/` and the blog is at `/blog`.
- Blog posts are authored in `src/pages/BlogPage.tsx`; there is no CMS or login.
- `src/main.tsx` - React entry point
- `src/index.css` - Tailwind CSS and custom styles
- `src/img/` - Image assets
- `src/fonts/` - Custom font files (Inter)
- `tailwind.config.js` - Tailwind configuration
- `.postcssrc.json` - PostCSS configuration

## Technologies

- **React** - UI library
- **TypeScript** - Static typing
- **Vite** - Development server and bundler
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Inter** - Font family
- **HTML5**

## Deployment

Deploy the contents of the `dist/` folder to your hosting provider.

## Credit

- Based on [Showfolio](https://github.com/apvarun/showfolio-hugo-theme)
