import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Donate from './pages/Donate'
import Login from './pages/login'
import Register from './pages/register'
import Events from './pages/events'
import AlumniDashboard from './pages/AlumniDashboard'
import StudentDashboard from './pages/StudentDashboard'
import { JobsListPage, JobDetailsPage } from './modules/jobs'
import './styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StudentDashboard" element={<StudentDashboard/>} />
        <Route path="/AlumniDashboard" element={<AlumniDashboard />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        {/* Jobs Module Routes */}
        <Route path="/jobs" element={<JobsListPage />} />
        <Route path="/jobs/:id" element={<JobDetailsPage />} />
      </Routes>
    </Router>
  )
}

export default App
