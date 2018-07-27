import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavLink from './screens/NavLink';
import Home from './screens/Home';
import Teams from './screens/Teams';
import logo from './img/logo.png';
import './scss/style.css';
import promo from './video/promo.mp4';

class App extends Component {
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
            </div>
          </div> {/* /navbar-container */}
          <div className="banner-message">
            <img className="logo" src={logo} alt="logo" />
          </div>

        </div>
        <Router>
          <div>
            <div className="navbar-container">
              <div className="navbar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/teams">Teams</NavLink>
                <NavLink to="/contact">Contact Exec</NavLink>
                <NavLink to="/sponsors">Sponsors</NavLink>
                <NavLink to="/rbs-or-something">Buy Tickets</NavLink>
              </div>
            </div>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route exact path="/teams" component={Teams} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
