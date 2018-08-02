import React, { Component } from 'react';
// import logo from '../img/logo.png';
import meme from '../img/doge.jpg';

export default class Home extends Component {
  render() {
    return (
      <div className="card-container">
        <div className="card">
          <img src={meme} alt="logo"/>
          <h2>Cast</h2>
          <p>
            Are you ready to join a cult? Too bad,
            you don&#39;t get a choice.
          </p>
        </div>
        <div className="card">
          <img src={meme} alt="logo"/>
          <h2>Tech</h2>
          <p>
            Pls don&#39;t tie me up again Jath
          </p>
        </div>
        <div className="card">
          <img src={meme} alt="logo"/>
          <h2>Costumes</h2>
          <p>
            Pls help we need more people
          </p>
        </div>
        <div className="card">
          <img src={meme} alt="logo"/>
          <h2>Front of House</h2>
          <p>
            Want a free ticket?
          </p>
        </div>
        <div className="card">
          <img src={meme} alt="logo"/>
          <h2>Webmin</h2>
          <p>
            Literally the best job ever in the world yes
          </p>
        </div>
      </div>
    );
  }
}
