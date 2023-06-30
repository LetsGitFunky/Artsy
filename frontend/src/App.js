import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navigation from './components/Navigation/NavIndex';
import ProductIndex from './components/ProductIndex/ProductIndex';
import ProductShow from './components/ProductShow/ProductShow';
import UserProfile from './components/UserProfile/UserProfile';
import CategoryIndex from './components/CategoryIndex/CategoryIndex';
import SearchIndex from './components/Search/SearchIndex';


function App() {
  return (
    <>
    <Navigation/>
      <Switch>
        <Route path="/products/:productId">
          <ProductShow />
        </Route>
        <Route path="/category/:category">
          <CategoryIndex />
        </Route>
        <Route path="/search/:query">
          <SearchIndex />
        </Route>
        <Route path="/user/:userId">
          <UserProfile />
        </Route>
        <Route path="/">
          <ProductIndex />
        </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
