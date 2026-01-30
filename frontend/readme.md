# AlumniHub Frontend

React + Vite frontend application for AlumniHub.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

## 📁 Structure

```
frontend/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── common/       # Shared UI components
│   │   ├── Admin/        # Admin components
│   │   └── Donate/       # Donation components
│   ├── pages/            # Route pages
│   │   ├── Home.jsx
│   │   ├── events.jsx
│   │   ├── login.jsx
│   │   ├── register.jsx
│   │   ├── Donate.jsx
│   │   ├── AlumniDashboard.jsx
│   │   └── StudentDashboard.jsx
│   ├── context/          # React Context
│   ├── services/         # API services
│   ├── layout/           # Layout components
│   ├── styles/           # CSS files
│   └── assets/           # Static assets
├── public/               # Public static files
└── index.html            # Entry HTML
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Build tool
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS
- **Axios** - HTTP client
- **React Query** - Server state management
- **Framer Motion** - Animation library

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## 🎨 Styling

This project uses **Tailwind CSS** for styling. Configuration is in `tailwind.config.js`.

Custom CSS files are in the `src/styles/` directory for component-specific styles.

## 🔌 API Integration

API calls are managed in `src/services/api.js`. Update the base URL to match your backend:

```javascript
const API_BASE_URL = 'http://localhost:5000/api';
```

## 🧭 Routing

Routes are defined using React Router. Main routes:

- `/` - Home page
- `/login` - Login page
- `/register` - Registration page
- `/events` - Events listing
- `/donate` - Donation page
- `/dashboard/alumni` - Alumni dashboard
- `/dashboard/student` - Student dashboard
- `/admin/*` - Admin routes

## 🔑 Authentication

Authentication is managed through React Context (`src/context/authcontext.js`). The context provides:

- Login/logout functionality
- Current user information
- Protected route handling

## 🚧 Development Tips

1. Hot Module Replacement (HMR) is enabled - changes reflect instantly
2. ESLint is configured - check for warnings during development
3. Use the browser DevTools with React DevTools extension
4. Check console for API errors and warnings

## 📱 Responsive Design

The application is fully responsive and tested on:
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

## 🐛 Common Issues

**Port already in use:**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

**Build errors:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📝 Environment Variables

Create `.env` file in frontend root if needed:

```env
VITE_API_URL=http://localhost:5000
```

Access in code: `import.meta.env.VITE_API_URL`
