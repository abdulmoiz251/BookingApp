import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class PropertyDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
      propertyData: []
    }
  }

  componentDidMount() {
    const propertyId = this.props.match.params.id

    axios.get(`/api/properties/${propertyId}`).then((response) => {
      const propertyData = response.data;
      this.setState({propertyData});
    })
    .catch(error => {
      console.log(error);
    })
  }


  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-8 card">
            <h1 className="mt-4">{this.state.propertyData.title}</h1>
            <img className="img-fluid rounded" src={this.state.propertyData.img} />
            <hr />
            <p className="lead">{this.state.propertyData.desc}</p>
          </div>

          <div className="col-md-4">
            <div className="card">
              <h5 className="card-header">Book Property</h5>
              <div className="card-body">
                <form role="form" method="post" action="#" id="booking-submission">
                  <input type="hidden" name="userId" value="12" />
                  <input type="hidden" name="apartmentId" value="34" />
                  <input type="hidden" name="apartmentPrice" value="{{ $price }}" />

                  <div>
                    <strong className="enter-text">From Date</strong>
                    <div className="input-group mb-3">
                      <input type="date" name="fromDate" id="fromDate" className="form-control" />
                    </div>
                  </div>

                  <div>
                    <strong className="enter-text">To Date</strong>
                    <div className="input-group mb-3">
                      <input type="date" name="toDate" id="toDate" className="form-control" />
                    </div>
                  </div>

                  <div>
                    <strong className="enter-text">Price</strong>
                    <div className="input-group mb-3">
                      <span>$100</span>
                    </div>
                  </div>
                  <strong id="responseMsg" className="response-msg-text"></strong>
                  <button type="submit" className="btn btn-secondary">Book Property</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default PropertyDetail
