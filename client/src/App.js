import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
  return (
    <div className="container">
      <Navbar />

      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  )
}

export default App