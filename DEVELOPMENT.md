# Development Guide

## Quick Start

The project is fully set up and ready to run!

### Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Branch Structure

This repository uses a two-branch workflow:

- **`main`** - Production branch (contains only built files for GitHub Pages)
- **`dev`** - Development branch (contains all source code)

## Development Workflow

### Working on Features

1. **Switch to dev branch:**
   ```bash
   git checkout dev
   ```

2. **Make your changes** in the source files (src/, components/, etc.)

3. **Test locally:**
   ```bash
   npm run dev
   ```

4. **Commit and push to dev:**
   ```bash
   git add .
   git commit -m "Description of your changes"
   git push origin dev
   ```

### Deploying to Production

When you're ready to deploy your changes to the live site:

**Option 1: Using gh-pages (Recommended)**
```bash
npm run deploy
```

This will automatically:
- Build your project
- Deploy the `dist` folder to GitHub Pages
- Update the live site at https://mahmudsuleman.github.io

**Option 2: Manual deployment to main branch**
```bash
# Build the project
npm run build

# Switch to main branch
git checkout main

# Copy built files
cp -r dist/* .

# Commit and push
git add .
git commit -m "Deploy: [description]"
git push origin main

# Switch back to dev
git checkout dev
```

## Project Status

✅ All components created and integrated
✅ Dark mode functionality implemented
✅ Responsive design with Tailwind CSS
✅ Framer Motion animations configured
✅ All sections populated with content
✅ Scroll-to-top button with animations
✅ Social media links integrated
✅ GitHub Pages deployment configured

## Components Overview

- **Navigation**: Fixed header with smooth scroll links and dark mode toggle
- **Hero**: Landing section with animated entrance and profile image
- **About**: Personal statement with stats and highlights
- **Skills**: Categorized technical skills with icons
- **Experience**: Timeline of work history
- **Projects**: Grid of featured projects
- **Education**: Academic background
- **Contact**: Contact information and modern form with social links
- **ScrollToTop**: Animated scroll-to-top button

## Customization Tips

### Update Colors
Edit `tailwind.config.js` to change the color scheme.

### Add Content
Each component file in `src/components/` contains the data arrays that you can modify.

### Update Profile Picture
Replace `/public/profile.jpg` with your photo (or update the path in `Hero.jsx`).

### Update Social Media Links
Edit the URLs in:
- `src/components/Contact.jsx` (contact section)
- `src/App.jsx` (footer)

### Modify Animations
Framer Motion variants are defined in each component. Adjust timing and effects as needed.

## Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── src/
│   ├── components/
│   │   ├── Hero.jsx            # Landing with profile image
│   │   ├── About.jsx           # Personal info
│   │   ├── Skills.jsx          # Technical skills
│   │   ├── Experience.jsx      # Work history
│   │   ├── Projects.jsx        # Portfolio projects
│   │   ├── Education.jsx       # Academic background
│   │   ├── Contact.jsx         # Contact form & info
│   │   ├── Navigation.jsx      # Header navigation
│   │   └── ScrollToTop.jsx     # Scroll button
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
│   └── profile.jpg             # Profile picture
├── dist/                       # Build output (gitignored)
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Deployment

### GitHub Pages Setup

1. **Repository Settings:**
   - Go to: https://github.com/MahmudSuleman/MahmudSuleman.github.io/settings/pages
   - Source: **Deploy from a branch**
   - Branch: **main** / **/ (root)**
   - Save

2. **Deploy Command:**
   ```bash
   npm run deploy
   ```

3. **Live Site:**
   - https://mahmudsuleman.github.io

### Deployment Options

**Using gh-pages package (Current setup):**
- Automatically deploys to GitHub Pages
- Handles branch management
- Simple one-command deployment

**Using GitHub Actions:**
- Automated deployment on push to main
- Workflow file included in `.github/workflows/deploy.yml`
- Enable in repository settings

## Performance

Current setup is optimized for:
- Fast loading with Vite
- Code splitting
- Tree shaking
- Minimal bundle size
- Optimized images and assets

Run `npm run build` to see bundle analysis.

## Troubleshooting

### Build Errors
- Ensure all dependencies are installed: `npm install`
- Clear cache: `rm -rf node_modules dist && npm install`
- Check Node version: `node -v` (should be v18+)

### Deployment Issues
- Verify you're on the correct branch
- Check GitHub Pages settings
- Wait 2-3 minutes for changes to propagate
- Clear browser cache

### Development Server Issues
- Port 5173 already in use: Kill the process or use a different port
- Hot reload not working: Restart the dev server

## Next Steps

1. ✅ Replace placeholder content with actual data
2. ✅ Add profile picture to `/public/profile.jpg`
3. ✅ Update social media links
4. ⏳ Add project screenshots/images
5. ⏳ Implement contact form backend (optional)
6. ⏳ Add analytics (Google Analytics, etc.)
7. ⏳ Optimize images and assets
8. ✅ Deploy to GitHub Pages

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v3
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Font**: Google Fonts (Poppins)
- **Deployment**: GitHub Pages

## Support

For issues or questions:
- Check the [Vite documentation](https://vitejs.dev/)
- Review [React documentation](https://react.dev/)
- Consult [Tailwind CSS docs](https://tailwindcss.com/)
- Visit [Framer Motion docs](https://www.framer.com/motion/)