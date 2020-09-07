import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Home from './Screens/Home';
import Checkout from './Screens/Checkout';
import Category from './Screens/Category';
import Product from './Screens/Product';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
       <Switch>
        <Route path="/shop/leedsrhinos">
          <Header />
          <Navigation />
          <Category 
          team="Leeds Rhinos"/>
          <Footer />
        </Route>
        <Route path="/shop/doncasterrovers">
          <Header />
          <Navigation />
          <Category 
          team="Doncaster Rovers"/>
          <Footer />
        </Route>
        <Route path="/shop/gloucesterrugby">
          <Header />
          <Navigation />
          <Category 
          team="Gloucester Rugby"/>
          <Footer />
        </Route>
        <Route path="/checkout">
          <Header />
          <Navigation />
          <Checkout />
          <Footer />
        </Route>
        <Route path="/shop/oxen">
          <Header />
          <Navigation />
          <Category 
          team="Oxen"/>
          <Footer />
        </Route>
        <Route path="/shop/sale">
          <Header />
          <Navigation />
          <Category 
          team="Sale"/>
          <Footer />
        </Route>
        <Route path="/login">
          <Header />
          <Navigation />
          Login
          <Footer />
        </Route>
        <Route path="/shop/product/">
          <Header />
          <Navigation />
          <Product />
          <Footer />
        </Route>
        <Route path="/">
          <Header />
          <Navigation />
          <Home />
          <Footer />
        </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
