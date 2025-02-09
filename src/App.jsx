import './App.css'
import Dashboard from './components/dashboard/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Home from './components/home/home'
import Auth from './components/auth/auth'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
