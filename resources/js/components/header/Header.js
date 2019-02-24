import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">Booking App</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={`/`}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Properties`}>Properties</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/Property/Add`}>Add Property</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header
