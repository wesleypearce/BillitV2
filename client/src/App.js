import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BillCreate from './components/Bill/BillCreate'
import BillList from './components/Bill/BillList'

const App = () => {
  return (
    <div className="container">
      <Navbar />

      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/bills" component={BillList} />
        <Route path="/bills/new" component={BillCreate} />
      </Router>
    </div>
  )
}

export default App