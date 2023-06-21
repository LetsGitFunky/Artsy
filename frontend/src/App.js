import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/NavIndex';
import ProductIndex from './components/ProductIndex/ProductIndex';
import ProductShow from './components/ProductShow/ProductShow';


function App() {
  return (
    <>
    <Navigation/>
    <Switch>
        <Route path="/products/:productId">
          <ProductShow />
        </Route>
        <Route path="/">
          <ProductIndex />
        </Route>
        {/* Add more routes as needed */}
      </Switch>
    </>
  );
}

export default App;
