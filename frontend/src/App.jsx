import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Donate from './pages/Donate'
import Login from './pages/login'
import Register from './pages/register'
import Events from './pages/events'
import AlumniDashboard from './pages/AlumniDashboard'
import StudentDashboard from './pages/StudentDashboard'
import Profile from './pages/Profile'
import JobsList from './features/jobs/pages/JobsList'
import JobDetails from './features/jobs/pages/JobDetails'
import './styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/StudentDashboard" element={<StudentDashboard/>} />
        <Route path="/AlumniDashboard" element={<AlumniDashboard />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </Router>
  )
}

export default App
