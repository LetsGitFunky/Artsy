import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/NavIndex';
import ProductIndex from './components/ProductIndex/ProductIndex';
import ProductShow from './components/ProductShow/ProductShow';
import UserProfile from './components/UserProfile/UserProfile.js';


function App() {
  return (
    <>
    <Navigation/>
    <Switch>
        <Route path="/products/:productId">
          <ProductShow />
        </Route>
        <Route path="/user/:userId"> {/* new Route for UserProfile */}
          <UserProfile />
        </Route>
        <Route path="/">
          <ProductIndex />
        </Route>
        {/* Add more routes as needed */}
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
