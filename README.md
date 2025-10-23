# Akash Mishra - Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing my projects, skills, and experience in Computer Science and Software Development.

## 🌟 Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Dark/Light Theme**: Toggle between dark and light modes
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Sections**:
  - Hero section with animated typing effect
  - About me with profile summary
  - Skills with progress indicators
  - Projects showcase
  - Experience timeline
  - Certifications
  - Beyond Coding interests
  - Contact footer

## 🎨 Color Scheme

### Light Theme
- Background: #F9FAFB
- Primary: #2563EB (Blue)
- Accent: #7C3AED (Purple)
- Text: #0F172A

### Dark Theme
- Background: #0F172A
- Primary: #60A5FA (Soft Blue)
- Accent: #8B5CF6 (Light Purple)
- Text: #F8FAFC

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Akashmishra1421/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables
- **Fonts**: Inter (headings), Roboto (body text)
- **Icons**: Custom SVG icons
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── BeyondCoding.jsx
│   │   ├── BeyondCoding.css
│   │   ├── Certifications.jsx
│   │   ├── Certifications.css
│   │   ├── Contact.jsx
│   │   ├── Contact.css
│   │   ├── Experience.jsx
│   │   ├── Experience.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── ParticlesBackground.jsx
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Skills.jsx
│   │   └── Skills.css
│   ├── App.jsx
│   ├── App.css
│   ├── theme-colors.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update name, roles, and description

2. **About Section** (`src/components/About.jsx`):
   - Update profile summary and stats

3. **Skills Section** (`src/components/Skills.jsx`):
   - Update skill categories and proficiency levels

4. **Projects Section** (`src/components/Projects.jsx`):
   - Add/remove projects with descriptions and links

5. **Experience Section** (`src/components/Experience.jsx`):
   - Update work experience and education

6. **Contact Section** (`src/components/Contact.jsx`):
   - Update social links and contact information

### Change Colors

Edit CSS variables in `src/App.css`:
```css
:root {
  --primary: #2563EB;
  --accent: #7C3AED;
  /* ... other variables */
}
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Deploy:
```bash
npm run deploy
```

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 481px - 968px
- Desktop: > 968px

## ✨ Performance

- Lighthouse Score: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Optimized images and assets
- Code splitting with Vite

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Akash Mishra**
- GitHub: [@Akashmishra1421](https://github.com/Akashmishra1421)
- LinkedIn: [Akash Mishra](https://www.linkedin.com/in/akash-mishra-am)
- Email: akashmishra1421@gmail.com

## 🙏 Acknowledgments

- Font: Google Fonts (Inter, Roboto)
- Icons: Custom SVG designs
- Inspiration: Modern portfolio designs

---

⭐ If you like this portfolio, please give it a star on GitHub!
