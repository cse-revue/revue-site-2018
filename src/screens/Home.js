import React, { Component } from 'react';
import logo from '../img/logo.png';
import meme from '../img/doge.jpg';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="small">
            <img src={logo} alt="logo"/>
          </div>
          <div className="big">
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
        <h1 style={{ textAlign: 'center' }}>Teams</h1>
        <div className="card-container">
          <div className="card">
            <img src={meme} alt="logo"/>
            <div>Cast</div>
          </div>
          <div className="card">
            <img src={meme} alt="logo"/>
            <div>Tech</div>
          </div>
          <div className="card">
            <img src={meme} alt="logo"/>
            <div>Band</div>
          </div>
          <div className="card">
            <img src={meme} alt="logo"/>
            <div>Videos</div>
          </div>
          <div className="card">
            <img src={meme} alt="logo"/>
            <div>Scripts</div>
          </div>
          <div className="card">
            <img src={meme} alt="logo"/>
            <div>Costumes</div>
          </div>
          <div className="card">
            <img src={meme} alt="logo"/>
            <div>Promos</div>
          </div>
          <div className="card">
            <img src={meme} alt="logo"/>
            <div>Front of House</div>
          </div>
          <div className="card">
            <img src={meme} alt="logo"/>
            <div>Design</div>
          </div>
          <div className="card">
            <img src={meme} alt="logo"/>
            <div>Webmin</div>
          </div>
          <div className="card">
            <img src={meme} alt="logo"/>
            <div>Socials</div>
          </div>
          <div className="card">
            <img src={meme} alt="logo"/>
            <div>Wellbeing</div>
          </div>
        </div>
        <div className="row">
          <div className="big">
            <h1>Contact Us!</h1>
            <p>Works and such</p>
            <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
            </ul>
          </div>
          <div className="small">
            <img src="http://via.placeholder.com/350x150" alt="placeholder" />
          </div>
        </div>
      </div>
    );
  }
}
