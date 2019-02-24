import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {
    return (
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Property booking <b>React</b> & <b>Laravel</b> application
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer
