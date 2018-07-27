import React, { Component } from 'react';
import logo from '../img/logo.png';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="small">
            <img src={logo} alt="logo"/>
          </div>
          <div class="big">
            <h1>What is CSE Revue?</h1>
            <p>
              The Computer Science and Engineering (CSE) Revue is a live
              comedy sketch show held during September at the University
              of New South Wales (UNSW). Produced and directed by members
              of the society, the show serves to highlight the technical
              and creative talents of UNSW students, as well as an The
              Computer Science and Engineering (CSE) Revue is a live comedy
              sketch show held during September at the University of New
              South Wales (UNSW). Produced and directed by members of the
              society, the show serves to highlight the technical and creative
              talents of UNSW students, as well as an opportunity for students
              to further develop their university experience.opportunity for
              students to further develop their university experience.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="big">
            <h1>Contact Us!</h1>
            <p>Works and such</p>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
          <div class="small">
            <img src="http://via.placeholder.com/350x150" alt="placeholder" />
          </div>
        </div>
      </div>
    );
  }
}
