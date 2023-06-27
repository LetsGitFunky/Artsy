import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/NavIndex';
import ProductIndex from './components/ProductIndex/ProductIndex';
import ProductShow from './components/ProductShow/ProductShow';
import UserProfile from './components/UserProfile/UserProfile';


function App() {
  return (
    <>
    <Navigation/>
      <Switch>
        <Route path="/products/:productId">
          <ProductShow />
        </Route>
        <Route path="/user/:userId">
          <UserProfile />
        </Route>
        <Route path="/">
          <ProductIndex />
        </Route>
      </Switch>
      {/* <Footer/> */}
    </>
  );
}

export default App;
