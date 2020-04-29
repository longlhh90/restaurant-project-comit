import React, { useContext } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import MenuContainer from './containers/Menu/MenuContainer';
import ContactContainer from './containers/Contact/ContactContainer';
import BookingContainer from './containers/Booking/BookingContainer';
import OrderContainer from './containers/Order/OrderContainer';
import Dishes from './components/AdminCP/DishManager/Dishes';
import Login from './containers/Auth/Login/Login';
import Logout from './containers/Auth/Logout/Logout';
import { AuthContext } from './context/auth-context';

const App = () => {

  const authContext = useContext(AuthContext);

  let content =
    <div>
      <Layout>
        <Switch>
          <Route path='/self-made-burger' component={BurgerBuilder} />
          <Route path='/contact' component={ContactContainer} />
          <Route path='/booking-online' component={BookingContainer} />
          <Route path='/admin' component={Login} />
          <Route path='/order' component={OrderContainer} />
          <Route path='/' exact component={MenuContainer} />
          <Redirect to='/' />
        </Switch>
      </Layout>
    </div>;
  if (authContext.isAuth) {
    content =
      <div>
        <Layout>
          <Switch>
            <Route path='/dishes' component={Dishes} />
            <Route path='/logout' component={Logout} />
            <Redirect to='/' />
          </Switch>
        </Layout>
      </div>;
  }
  return content;
}

export default App;
