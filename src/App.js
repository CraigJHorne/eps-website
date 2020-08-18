import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Home from './Screens/Home';
import CategoryLayout from './Components/CategoryLayout';
import ProductLayout from './Components/ProductLayout';

function App() {
  return (
    <Router>
      <div className="app">
       <Switch>
        <Route path="/checkout">
          <Header />
          <Navigation />
          <ProductLayout 
           productName="Leeds Rhinos 2020 Kids Performance Polo 4"
           productPrice="29.99"
           productBlurb="Official Leeds Rhinos 2020 Training Range."
           productImageOne="/images/Product1.jpg"
           productImageTwo="/images/Product2.jpg"
           productImageThree="/images/Product1.jpg"
           productImageFour="/images/Product1.jpg"
          />
        </Route>
        <Route path="/login">
          <Header />
          <Navigation />
          <CategoryLayout />
        </Route>
        <Route path="/">
          <Header />
          <Navigation />
          <Home />
        </Route>
       </Switch>
      </div>
    </Router>
  );
}

export default App;
