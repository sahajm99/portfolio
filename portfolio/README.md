# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Stack**: Built with React 19 and Vite for fast development and optimized builds
- **Responsive Design**: Fully responsive layout that works on all devices
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Smooth Scrolling**: Smooth navigation between sections
- **Component-Based**: Well-organized component structure for easy maintenance
- **Clean UI**: Modern, professional design with placeholder content

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header with mobile menu
│   │   ├── Hero.jsx        # Landing section with introduction
│   │   ├── About.jsx       # About section
│   │   ├── Projects.jsx    # Projects showcase
│   │   └── Contact.jsx     # Contact form and social links
│   ├── pages/
│   │   └── Home.jsx        # Home page (optional routing)
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # App entry point
│   └── index.css           # Global styles with Tailwind
├── index.html
├── package.json
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── vite.config.js          # Vite configuration
```

## 🛠️ Setup Instructions

### Prerequisites

Make sure you have Node.js installed (version 18 or higher recommended). You can check your Node.js version by running:

```bash
node --version
```

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The app will be available at `http://localhost:5173` (or another port if 5173 is in use)

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder. You can preview the production build with:

```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update the tagline and description

2. **About Section** (`src/components/About.jsx`):
   - Replace placeholder text with your own story
   - Update statistics (years of experience, projects, etc.)

3. **Projects Section** (`src/components/Projects.jsx`):
   - Replace placeholder projects with your actual projects
   - Update project images, descriptions, and tech stacks
   - Add links to live projects or GitHub repositories

4. **Contact Section** (`src/components/Contact.jsx`):
   - Update social media links (GitHub, LinkedIn)
   - Change the email address
   - Connect the form to a backend service or email service

5. **Header** (`src/components/Header.jsx`):
   - Update the portfolio title/logo

### Styling

The project uses Tailwind CSS. You can customize:

- **Colors**: Edit `tailwind.config.js` to add custom colors
- **Components**: Modify component files to change styling
- **Global Styles**: Update `src/index.css` for global styles

### Adding Routing (Optional)

If you want to add multiple pages with React Router:

1. The project already has `react-router-dom` installed
2. Update `src/main.jsx` to use `BrowserRouter`
3. Create additional pages in `src/pages/`
4. Set up routes in `src/App.jsx`

Example:
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

// In main.jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</BrowserRouter>
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛠️ Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing (installed, optional)
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📝 Notes

- The contact form currently shows an alert on submission. You'll need to connect it to a backend service or email API.
- Project images use placeholder URLs. Replace them with your actual project images.
- Social media links point to placeholder URLs. Update them with your actual profiles.

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize it for your own use!

## 📄 License

This project is open source and available under the MIT License.

---

Happy coding! 🎉
