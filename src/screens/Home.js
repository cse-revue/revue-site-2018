import React, { Component } from 'react';
import logo from '../img/logo-black-transparent.png';
import cast from '../img/cast.jpg';
import tech from '../img/tech.jpg';
import band from '../img/band.jpg';
import costumes from '../img/costumes.jpg';
import promos from '../img/promos.jpg';
import scripts from '../img/scripts.jpg';
import socials from '../img/socials.jpg';
import webmin from '../img/webmin.jpg';
import wellbeing from '../img/wellbeing.jpg';
import design from '../img/design.png';
import videos from '../img/videos.png';
import foh from '../img/foh.jpg';
import fundraising from '../img/fundraising.jpg';
// import meme from '../img/doge.jpg';
// import choreos from '../img/choreos.jpg';
// import vocals from '../img/vocals.jpg';
// import vos from '../img/vos.jpg';
// import pubs from '../img/pubs.PNG';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="row align-top">
          <div className="small">
            <img src={logo} alt="logo"/>
          </div>
          <div className="big">
            <h1>What is CSE Revue?</h1>
            <p>
              The Computer Science and Engineering (CSE) Revue is a live comedy
              sketch show held during September at the University of New
              South Wales (UNSW). Produced and directed by members of the
              society, the show serves to highlight the technical and creative
              talents of UNSW students, as well as an opportunity for students
              to further develop their university experience
            </p>
          </div>
        </div>
        <h1 style={{ textAlign: 'center' }}>Teams</h1>
        <div className="card-container">
          <a className="card" href="/teams#cast">
            <img src={cast} alt="Cast"/>
            <div>Cast</div>
          </a>
          <a className="card" href="/teams#tech">
            <img src={tech} alt="Tech"/>
            <div>Tech</div>
          </a>
          <a className="card" href="/teams#band">
            <img src={band} alt="Band"/>
            <div>Band</div>
          </a>
          <a className="card" href="/teams#videos">
            <img src={videos} alt="Videos"/>
            <div>Videos</div>
          </a>
          <a className="card" href="/teams#scripts">
            <img src={scripts} alt="Scripts"/>
            <div>Scripts</div>
          </a>
          <a className="card" href="/teams#costumes">
            <img src={costumes} alt="Costumes"/>
            <div>Costumes</div>
          </a>
          <a className="card" href="/teams#promos">
            <img src={promos} alt="Promos"/>
            <div>Promos</div>
          </a>
          <a className="card" href="/teams#foh">
            <img src={foh} alt="Front of House"/>
            <div>Front of House</div>
          </a>
          <a className="card" href="/teams#design">
            <img src={design} alt="Design"/>
            <div>Design</div>
          </a>
          <a className="card" href="/teams#webmin">
            <img src={webmin} alt="Webmin"/>
            <div>Webmin</div>
          </a>
          <a className="card" href="/teams#socials">
            <img src={socials} alt="Socials"/>
            <div>Socials</div>
          </a>
          <a className="card" href="/teams#wellbeing">
            <img src={wellbeing} alt="Wellbeing"/>
            <div>Wellbeing</div>
          </a>
          <a className="card" href="/teams#fundraising">
            <img src={fundraising} alt="Fundraising"/>
            <div>Fundraising</div>
          </a>
        </div>
      </div>
    );
  }
}
