import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Properties extends Component {

  constructor(props) {
    super(props);

    this.state = {
      propertiesData: []
    }
  }

  componentDidMount() {
    axios.get('/api/properties').then((response) => {
      const propertiesData = response.data;
      this.setState({propertiesData});
    })
    .catch(error => {
      console.log(error);
    })
  }


  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">

          {this.state.propertiesData.map(prop => {
            return (
            <div key={prop.id} className="col-md-3">
              <div className="card">
                <Link to={`/Property/${prop.id}`}>
                  <div className="card-header">{prop.title}</div>
                </Link>
                <img className="card-img" src={prop.img} />
                <div className="card-body">
                  {prop.desc}
                  <div className="card-text"></div>
                  <br/>
                  <Link to={`/Property/${prop.id}`} className="btn btn-primary">View Details</Link>
                </div>
              </div>
            </div>
            )
          })}

        </div>
      </div>
    );
  }
}

export default Properties
