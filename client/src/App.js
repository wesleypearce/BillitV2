import React, { Component } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import BillViewer from './components/BillViewer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BillViewer />
      </div>
    )
  }
}

export default App
