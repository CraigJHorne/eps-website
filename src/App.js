import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Navigation from './Navigation';
import Home from './Home';

function App() {
  return (
    <Router>
      <div className="app">
       <Switch>
        <Route path="/checkout">
          <Header />
          <Navigation />
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <Header />
          <Navigation />
          <h1>Login</h1>
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
