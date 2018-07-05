import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavLink from './screens/NavLink';
import Home from './screens/Home';
import About from './screens/About';
import logo from './img/logo.png';
import './scss/style.css';
import promo from './video/promo.mp4';

class App extends Component {
  // constructor() {
  //   this.state = {
  //     activeItem: '/',
  //   };
  // }

  checkIfHome(match, location) {
    console.log(location.pathname);
    // return location.pathname === '/';
    console.log(match);
    return false;
  }

  render() {
    return (
      <div>
        <div className="banner">
          <div className="video-container">
            <div className="video-filter"></div>
            <video playsInline loop muted autoPlay className="video">
              <source src={promo} type="video/mp4"/>
            </video>
          </div>  
          <div className="header-container">
            <div className="header">
              <div className="nav-item">SAMPLE TEXT</div>
              <div className="nav-item">SAMPLE TEXT</div>
              <div className="nav-button">Buy Tickets</div>
            </div>
          </div> {/* /navbar-container */}
          <div className="banner-message">
            <img className="logo" src={logo} alt="logo" />
            CSE REVUE
          </div>

        </div>
        <Router>
          <div>
            <div className="navbar-container">
              <div className="navbar">
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/test">Thing</NavLink>
                  <NavLink to="/asdf">Thing</NavLink>
              </div>
            </div>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
