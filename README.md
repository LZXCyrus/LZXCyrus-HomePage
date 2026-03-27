
# LZXCyrus-HomePage
[English](README.md) | [中文](README_zh.md)

A modern personal homepage designed in a minimalist humanistic style, featuring smooth dynamic backgrounds, fully responsive layout, and seamless page transitions. Built with Vite + React + Tailwind CSS + Framer Motion.

## Features

- 🌐 **Bilingual Support (Chinese & English)** - Real-time global language switching
- 🎨 **Minimalist Humanistic Design** - Warm cream base, terracotta accents, and generous white space
- ✨ **Smooth Animations** - Fluid transitions for page navigation and button interactions
- 🌊 **Dynamic Backgrounds** - Unique soft dynamic effects for each page
- 📱 **Responsive Design** - Optimized for all screen sizes
- 🚀 **Easy Deployment** - Direct deployment support for GitHub Pages

## Page Structure

1. **Home** - Hero section, project previews, skill showcase
2. **Projects List** - Full project gallery with tech stack tags
3. **Project Details** - In-depth information for individual projects
4. **About** - Personal introduction, skills, and experience timeline
5. **Blog** - Article list with external link support

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Internationalization**: i18next + react-i18next
- **Routing**: React Router v6

## Quick Start

### Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Or using npm
npm install

# Or using yarn
yarn install
```

### Development Mode

```bash
pnpm dev
```

Open http://localhost:5173 in your browser.

### Build for Production

```bash
pnpm build
```

The build output will be generated in the `dist` directory.

### Preview Production Build

```bash
pnpm preview
```

## Deploy to GitHub Pages

### Method 1: Using GitHub Actions (Recommended)

1. Fork this repository to your GitHub account
2. Enable GitHub Pages in repository settings:
   - Settings → Pages → Source → GitHub Actions
3. Push code to the `main` branch; Actions will automatically build and deploy

### Method 2: Manual Deployment

1. Build the project:

```bash
pnpm build
```

2. Install the gh-pages package:

```bash
pnpm add -D gh-pages
```

3. Add a deploy script to `package.json`:

```json
"scripts": {
  "deploy": "gh-pages -d dist"
}
```

4. Run the deploy command:

```bash
pnpm deploy
```

### Method 3: Using the dist Folder

1. Run `pnpm build`
2. Push the contents of the `dist` folder to the `gh-pages` branch
3. Or download the `dist` folder and host it on your local server

## Custom Configuration

### 1. Update Personal Information
Edit content in the following files:

- `src/i18n/index.ts` - Translation text
- `src/data/projects.ts` - Project data
- `src/data/blogPosts.ts` - Blog post data
- `src/pages/AboutPage.tsx` - About page content

### 2. Change Profile Avatar
Locate the avatar section in `src/pages/AboutPage.tsx` and replace the placeholder image with your actual avatar:

```tsx
<img
  src="/images/avatar.jpg"
  alt="Profile"
  className="w-72 h-72 rounded-2xl object-cover border-4 border-white shadow-xl"
/>
```

Place your avatar image in the `public/images/` directory.

### 3. Modify Color Theme
Edit the Anthropic color scheme in `tailwind.config.js`:

```js
colors: {
  anthropic: {
    cream: '#FAF7F2',      // Warm cream background
    terracotta: '#B4644B', // Terracotta accent
    taupe: '#8B7D6B',      // Taupe secondary color
    charcoal: '#2D2926',   // Dark gray text
    sage: '#9CAF88',       // Sage green accent
  },
}
```

### 4. Add Real Project Links
Update the `liveUrl` and `githubUrl` fields in `src/data/projects.ts` with your actual project URLs.

### 5. Add Real Blog Posts
Update the `readMoreUrl` field in `src/data/blogPosts.ts` with your article links.

## Project Structure

```
anthropic-portfolio/
├── public/
│   └── images/          # Static image assets
├── src/
│   ├── components/      # React components
│   │   ├── AnimatedBackground.tsx  # Dynamic background component
│   │   ├── Footer.tsx            # Footer component
│   │   ├── LanguageToggle.tsx    # Language switch component
│   │   └── Navbar.tsx            # Navbar component
│   ├── data/            # Static data
│   │   ├── blogPosts.ts # Blog post data
│   │   └── projects.ts  # Project data
│   ├── i18n/            # Internationalization config
│   │   └── index.ts     # i18n setup and translations
│   ├── pages/           # Page components
│   │   ├── AboutPage.tsx       # About page
│   │   ├── BlogPage.tsx        # Blog page
│   │   ├── HomePage.tsx        # Home page
│   │   ├── ProjectDetailPage.tsx # Project detail page
│   │   └── ProjectsPage.tsx    # Projects list page
│   ├── App.tsx          # Main app component
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry file
├── index.html           # HTML entry
├── package.json         # Project config
├── tailwind.config.js   # Tailwind config
├── tsconfig.json        # TypeScript config
└── vite.config.ts       # Vite config
```

## Design Guidelines

### Color Palette

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Cream | #FAF7F2 | Main background |
| Terracotta | #B4644B | Accents, buttons, links |
| Taupe | #8B7D6B | Secondary text, borders |
| Charcoal | #2D2926 | Primary text |
| Sage | #9CAF88 | Accents, charts |

### Typography

- **Serif Font**: Cormorant Garamond - Headings, large display text
- **Sans-serif Font**: Inter - Body text, UI elements

### Animation Principles

- Page transitions: Fade in + slide up, 400ms ease-out
- Button interactions: Scale 1.05, 300ms
- Scroll animations: Fade in when entering viewport

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - Feel free to use and modify!
