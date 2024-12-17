import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavigationBar from './Components/NavigationBar/NavigationBar'
import Home from './Components/1Home/Home'
import About from './Components/2About/About'
import Projects from './Components/3Projects/Projects'
import Resume from './Components/4Resume/Resume'
import './App.css'
import React from 'react'


const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  )
}

export default App
