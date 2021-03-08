import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
function App() {
  return (
    <div className="App">
      <Router>
        <nav className="nav-wrapper">
          <div className="brand-logo center"> Welcome to Vacationpedia ! </div>
          <ul className="left hide-on-med-and-down">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/cart">Cart</Link></li>
          </ul>
        </nav>
        <Route exact path="/" component={Home}></Route>
        <Route path="/cart" component={Cart}></Route>     
      </Router>
    </div>
  );
}

export default App;
