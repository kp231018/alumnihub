import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Donate from './pages/Donate'
import Login from './pages/login'
import Register from './pages/register'
import Events from './pages/events'
import './styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  )
}

export default App
