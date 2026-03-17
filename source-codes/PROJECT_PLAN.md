# Portfolio Website Project Plan

## Project Overview
Modern, clean portfolio website for Mahmud Sheikh Wunnam Suleman - Computer Scientist & Software Engineer

## Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: JavaScript
- **Styling**: TailwindCSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx              # Landing section with name and title
│   │   ├── About.jsx             # Personal statement and bio
│   │   ├── Skills.jsx            # Technical skills categorized
│   │   ├── Experience.jsx        # Work history timeline
│   │   ├── Projects.jsx          # Key projects showcase
│   │   ├── Education.jsx         # Academic background
│   │   ├── Contact.jsx           # Contact information and form
│   │   └── Navigation.jsx        # Header/navbar with smooth scroll
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles and Tailwind imports
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Website Sections

### 1. Hero Section
- Full-screen landing with animated entrance
- Name: Mahmud Sheikh Wunnam Suleman
- Title: Computer Scientist & Software Engineer
- Tagline highlighting expertise
- CTA buttons (View Work, Contact)
- Animated scroll indicator

### 2. About Section
- Personal statement from CV
- Key highlights:
  - Location: Accra, Ghana
  - Languages: English, Twi, Dagbani
  - Current: MPhil in Computer Science (University of Ghana)
- Professional photo placeholder
- Quick stats (years of experience, projects completed, etc.)

### 3. Skills Section
Categorized technical skills with visual representation:

**Web Development**
- HTML, CSS (Bootstrap, Tailwind)
- JavaScript (jQuery, Vue, React, Node, Express, DevExtreme)
- PHP (Laravel, Livewire)
- ASP.Net Core (DevExpress, MVC)

**Mobile App Development**
- Native Android (Java, Kotlin)
- Cross-platform (Flutter, React Native)

**Databases**
- Relational: MySQL, SQLite, SQL Server, Oracle, Postgres
- Document: Firebase, MongoDB

**Operating Systems**
- Windows, Windows Server, Linux, MacOS

### 4. Experience Section
Timeline format with expandable details:

1. **Lakeside University College** (May 2022 - Present)
   - Application Support Engineer and IT Officer
   - Lecturing

2. **Ghana Forestry Commission - Tamale** (Sep 2020 - Aug 2021)
   - Zonal ICT Unit
   - Web and Mobile Application Development
   - Payment API System Integration
   - Core Developer for Mobile POS Device applications
   - Database Design and Management
   - Business Intelligence Reports

3. **Ghana Revenue Authority - Tamale** (May 2019 - Jul 2019)
   - TIN Management

### 5. Projects Section
Grid/card layout showcasing key projects:

1. **Lakeside University College ERP**
   - Enterprise Resource Management System
   - Scholarship application website
   - May 2022 - Present

2. **Savannah College of Education System**
   - School website, admission portal, management system
   - Jan 2023 - Jan 2025

3. **Ghana Forestry Commission Systems**
   - Armory Management System
   - Charcoal and Firewood Checkpoint App
   - Nov 2020 - Dec 2021

4. **Market Information System (Tree Aid Ghana)**
   - Farmer and buyer management
   - SMS/Voice SMS integration
   - Feb 2021 - May 2021

5. **Election Violence Reporting System (ISODEC)**
   - Incident reporting portal
   - Apr 2021 - Aug 2021

6. **Henos Voucher System (Pearl Technology)**
   - Voucher distribution and management
   - Mobile and web application
   - Dec 2022 - Feb 2023

7. **Puma Fuel App (Pearl Technology)**
   - Loyalty points system
   - Jun 2023 - Jul 2023

8. **Reflos Sales App (Pearl Technology)**
   - Delivery tracking system
   - Oct 2023 - Dec 2023

### 6. Education Section
- **Master of Philosophy in Computer Science**
  - University of Ghana, Legon
  - 2023 - Present

- **Bachelor of Science in Computer Science**
  - University for Development Studies, Tamale
  - 2016 - 2020

### 7. Contact Section
- Email: mahmudsheikh25@gmail.com
- Phone: +233241812087
- Location: Accra, Ghana
- Contact form (optional)
- Social links (GitHub, LinkedIn, etc.)

## Design System

### Color Scheme
**Light Mode**
- Primary: `#0F172A` (Slate 900)
- Secondary: `#3B82F6` (Blue 500)
- Accent: `#10B981` (Emerald 500)
- Background: `#FFFFFF` (White)
- Surface: `#F8FAFC` (Slate 50)
- Text Primary: `#1E293B` (Slate 800)
- Text Secondary: `#64748B` (Slate 500)

**Dark Mode**
- Primary: `#F8FAFC` (Slate 50)
- Secondary: `#60A5FA` (Blue 400)
- Accent: `#34D399` (Emerald 400)
- Background: `#0F172A` (Slate 900)
- Surface: `#1E293B` (Slate 800)
- Text Primary: `#F1F5F9` (Slate 100)
- Text Secondary: `#94A3B8` (Slate 400)

### Typography
- Headings: System font stack (Inter, SF Pro, Segoe UI)
- Body: System font stack
- Code: Monospace (Fira Code, Consolas)

### Spacing
- Section padding: 80px (desktop), 40px (mobile)
- Component spacing: 24px, 32px, 48px
- Grid gaps: 16px, 24px, 32px

### Breakpoints (Tailwind defaults)
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Animation Strategy

### Framer Motion Animations
1. **Page Load**
   - Hero section: Fade in + slide up
   - Staggered text animation for name/title

2. **Scroll Animations**
   - Sections fade in when entering viewport
   - Stagger children for lists/grids
   - Parallax effects for backgrounds (subtle)

3. **Interactions**
   - Hover effects on cards (scale, shadow)
   - Button hover states
   - Smooth transitions on theme toggle
   - Navigation highlight on scroll

4. **Micro-interactions**
   - Icon animations on hover
   - Skill tag hover effects
   - Form input focus states

### Animation Variants
```javascript
// Example variants to be used
fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

## Features

### Core Features
- ✅ Responsive design (mobile-first)
- ✅ Dark/light mode toggle
- ✅ Smooth scrolling navigation
- ✅ Animated section transitions
- ✅ SEO optimized
- ✅ Fast loading (Vite optimization)

### Optional Enhancements
- 📧 Contact form with email integration
- 📱 Progressive Web App (PWA)
- 🌐 Multi-language support (English primary)
- 📊 Analytics integration
- 💾 Downloadable CV/Resume
- 🎨 Theme customization

## Development Phases

### Phase 1: Setup & Foundation
1. Initialize Vite + React project
2. Install and configure TailwindCSS v4
3. Install Framer Motion and Lucide icons
4. Set up project structure
5. Create basic layout and navigation

### Phase 2: Component Development
1. Build Hero section
2. Build About section
3. Build Skills section
4. Build Experience section
5. Build Projects section
6. Build Education section
7. Build Contact section

### Phase 3: Styling & Animation
1. Implement color scheme and typography
2. Add Framer Motion animations
3. Implement dark mode toggle
4. Responsive design refinement
5. Accessibility improvements

### Phase 4: Polish & Optimization
1. Performance optimization
2. SEO meta tags
3. Testing across devices
4. Final refinements
5. Deployment preparation

## Performance Goals
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: > 90
- Bundle size: < 200KB (gzipped)

## Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment
- Platform: Vercel / Netlify / GitHub Pages
- Domain: TBD
- CI/CD: Automatic deployment on push to main branch

## Success Criteria
- ✅ Fully responsive across all devices
- ✅ Smooth animations without performance issues
- ✅ Accessible (WCAG 2.1 AA compliance)
- ✅ Fast loading times
- ✅ Professional, modern design
- ✅ Easy to update content
- ✅ SEO optimized

## Next Steps
1. Review and approve project plan
2. Set up development environment
3. Begin Phase 1 implementation
4. Iterate based on feedback
