import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import MenuContainer from './containers/Menu/MenuContainer';
import ContactContainer from './containers/Contact/ContactContainer';
import BookingContainer from './containers/Booking/BookingContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path='/' exact component={MenuContainer} />
          <Route path='/self-made-burger' component={BurgerBuilder} />
          <Route path='/contact' component={ContactContainer}/>
          <Route path='/booking-online' component={BookingContainer}/>
        </Layout>
      </div>
    );
  }
}

export default App;
