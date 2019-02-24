import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './header/Header'
import Footer from './footer/Footer'
import Properties from './properties/Properties'
import PropertyDetail from './propertydetail/PropertyDetail'
import AddProperty from './addproperty/AddProperty'


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Header of our application */}
          <Header />

          {/* React Application Router */}
          <Switch>
            <Route exact path='/' component={Properties} />
            <Route path='/Property/Add' component={AddProperty} />
            <Route path='/Property/:id' component={PropertyDetail} />
          </Switch>

          {/* Footer of our application */}
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
