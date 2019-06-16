import React from 'react'
import ReactDOM from 'react-dom'
import './scss/index.scss'

let HelloWorld = () => {
  return (
    <div>
      <h1 className="display-4">Hello, World!</h1>
    </div>
  );
}

ReactDOM.render(<HelloWorld />, document.getElementById('root'))