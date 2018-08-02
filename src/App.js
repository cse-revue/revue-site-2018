import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavLink from './screens/NavLink';
import Home from './screens/Home';
import Teams from './screens/Teams';
import ContactExec from './screens/ContactExec';
import logo from './img/logo.png';
import './scss/style.css';
import promo from './video/promo.mp4';

class App extends Component {
  scrollToNavbar() {
    const node = ReactDOM.findDOMNode(this.refs.navbar);
    window.scrollTo(0, node.offsetTop);
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
            </div>
          </div> {/* /navbar-container */}
          <div className="banner-message">
            <img className="logo" src={logo} alt="logo" />
          </div>

        </div>
        <Router>
          <div>
            <div className="navbar-container">
              <div className="navbar" ref="navbar">
                <NavLink onClick={() => this.scrollToNavbar()} to="/">Home</NavLink>
                <NavLink onClick={() => this.scrollToNavbar()} to="/teams">Teams</NavLink>
                <NavLink onClick={() => this.scrollToNavbar()} to="/contact">Contact Exec</NavLink>
                <NavLink onClick={() => this.scrollToNavbar()} to="/sponsors">Sponsors</NavLink>
                <NavLink onClick={() => this.scrollToNavbar()} to="/rbs-or-something">Buy Tickets</NavLink>
              </div>
            </div>
            <div className="content">
              <Route exact path="/" component={Home} />
              <Route exact path="/teams" component={Teams} />
              <Route exact path="/contact" component={ContactExec} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
