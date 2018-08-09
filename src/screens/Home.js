import React, { Component } from 'react';
import logo from '../img/logo.png';
import meme from '../img/doge.jpg';
import cast from '../img/cast.jpg';
import tech from '../img/tech.jpg';
import band from '../img/band.jpg';
import choreos from '../img/choreos.jpg';
import costumes from '../img/costumes.jpg';
import promos from '../img/promos.jpg';
import scripts from '../img/scripts.jpg';
import socials from '../img/socials.jpg';
import vocals from '../img/vocals.jpg';
import vos from '../img/vos.jpg';
import webmin from '../img/webmin.jpg';
import wellbeing from '../img/wellbeing.jpg';
import pubs from '../img/pubs.PNG';
import design from '../img/design.PNG';
import videos from '../img/videos.png';
import foh from '../img/foh.jpg';

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
            <img src={cast} alt="Cast"/>
            <div>Cast</div>
          </div>
          <div className="card">
            <img src={tech} alt="Tech"/>
            <div>Tech</div>
          </div>
          <div className="card">
            <img src={band} alt="Band"/>
            <div>Band</div>
          </div>
          <div className="card">
            <img src={videos} alt="Videos"/>
            <div>Videos</div>
          </div>
          <div className="card">
            <img src={scripts} alt="Scripts"/>
            <div>Scripts</div>
          </div>
          <div className="card">
            <img src={costumes} alt="Costumes"/>
            <div>Costumes</div>
          </div>
          <div className="card">
            <img src={promos} alt="Promos"/>
            <div>Promos</div>
          </div>
          <div className="card">
            <img src={foh} alt="Front of House"/>
            <div>Front of House</div>
          </div>
          <div className="card">
            <img src={design} alt="Design"/>
            <div>Design</div>
          </div>
          <div className="card">
            <img src={webmin} alt="Webmin"/>
            <div>Webmin</div>
          </div>
          <div className="card">
            <img src={socials} alt="Socials"/>
            <div>Socials</div>
          </div>
          <div className="card">
            <img src={wellbeing} alt="Wellbeing"/>
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
