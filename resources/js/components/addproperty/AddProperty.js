
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AddProperty extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      short_desc: '',
      desc: '',
      price: 0,
      img: '',
      responseMsg: ''
    }

    this.eventFieldChange = this.eventFieldChange.bind(this);
    this.eventAddProperty = this.eventAddProperty.bind(this);
  }


  //-- on field change event, to update values in state
  eventFieldChange(p_field) {
    this.setState({
      [p_field.target.name]: p_field.target.value
    })
  }


  //-- on form submit event
  eventAddProperty(e) {
    e.preventDefault();

    if(!this.validateInputs()){
      console.log('retiurning');
      return;
    }

    const _property = {
      title: this.state.title,
      short_desc: this.state.short_desc,
      desc: this.state.desc,
      price: this.state.price,
      img: '/images/properties/property1.jpg', //this.state.img
    }

    axios.post(`/api/addproperty`, _property)
      .then((response) => {
        this.setState({responseMsg: response.data});
      })
      .catch(error => {
        console.log(error);
      })
  }


  validateInputs() {
    if (this.state.title == '') {
      this.setState({responseMsg: 'Invalid input'});
    }
    else if (this.state.short_desc == '') {
      this.setState({responseMsg: 'Invalid input'});
    }
    else if (this.state.desc == '') {
      this.setState({responseMsg: 'Invalid input'});
    }
    else if (this.state.price == '0') {
      this.setState({responseMsg: 'Invalid input'});
    }
    
    return true;
  }


  render() {
    return (
        <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="card">
              <h5 className="card-header">Add Property</h5>
              <div className="card-body">
                <form onSubmit={this.eventAddProperty}>
                  <div>
                    <strong className="enter-text">Title</strong>
                    <div className="input-group mb-3">
                      <input type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        values={this.state.title}
                        onChange={this.eventFieldChange}
                      />
                    </div>
                  </div>

                  <div>
                    <strong className="enter-text">Short Description</strong>
                    <div className="input-group mb-3">
                      <input type="text"
                        id="short_desc"
                        name="short_desc"
                        className="form-control"
                        values={this.state.short_desc}
                        onChange={this.eventFieldChange}
                      />
                    </div>
                  </div>

                  <div>
                    <strong className="enter-text">Description</strong>
                    <div className="input-group mb-3">
                      <textarea
                        id="desc"
                        name="desc"
                        className="form-control"
                        values={this.state.desc}
                        onChange={this.eventFieldChange}
                      />
                    </div>
                  </div>

                  <div>
                    <strong className="enter-text">Price</strong>
                    <div className="input-group mb-3">
                      <input type="number"
                        id="price"
                        name="price"
                        className="form-control"
                        values={this.state.price}
                        onChange={this.eventFieldChange}
                      />
                    </div>
                  </div>

                  <strong id="responseMsg" className="response-msg-text">{this.state.responseMsg}</strong>
                  <br />
                  <br />
                  <button type="submit" className="btn btn-secondary">Save Property</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AddProperty
