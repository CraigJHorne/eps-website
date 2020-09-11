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
        <Route path="/shop/leeds">
          <Header />
          <Navigation />
          <Category 
          team="Leeds"/>
          <Footer />
        </Route>
        <Route path="/shop/doncaster">
          <Header />
          <Navigation />
          <Category 
          team="Doncaster"/>
          <Footer />
        </Route>
        <Route path="/shop/gloucester">
          <Header />
          <Navigation />
          <Category 
          team="Gloucester"/>
          <Footer />
        </Route>
        <Route path="/checkout">
          <Header />
          <Navigation />
          <Checkout />
          <Footer />
        </Route>
        <Route path="/shop/generic">
          <Header />
          <Navigation />
          <Category 
          team="Generic"/>
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
        <Route path="/shop/product/:id" component={Product}>
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
