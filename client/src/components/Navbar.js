import React from 'react'
import GoogleAuth from './GoogleAuth'

class Navbar extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
          <a className="navbar-brand text-white" href="#">
            Billit
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link text-white" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="float-right">
            <ul className="navbar-nav">
              <li className="nav-item">
                <GoogleAuth />
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar