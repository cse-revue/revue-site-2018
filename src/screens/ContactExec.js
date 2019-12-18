import React, { Component } from 'react';
// import logo from '../img/logo.png';
// import meme from '../img/buyinggf.jpeg';

export default class ContactExec extends Component {
  render() {
    return (
      <div className="contact-exec-page">
        <div className="heading">
          <h1>Contact Executives</h1>
          <p>Email: <a href="mailto:exec@cserevue.org.au">exec@cserevue.org.au</a></p>
        </div>
        <div className="exec-tiles">
          <div>
            <h2>Directors</h2>

            <p>Karl Cheng</p>
            <p>Nicole de Vera</p>
            <p>Timothy Wu</p>

            <p>Email: <a href="mailto:directors@cserevue.org.au">directors@cserevue.org.au</a></p>
          </div>
          <div>
            <h2>Producers</h2>

            <p>Arnold Kam</p>
            <p>Jeremy Lim</p>

            <p>Email: <a href="mailto:producers@cserevue.org.au">producers@cserevue.org.au</a></p>
          </div>
          <div>
            <h2>Treasurer</h2>

            <p>Patience Loh</p>

            <p>Email: <a href="mailto:treasurer@cserevue.org.au">treasurer@cserevue.org.au</a></p>
          </div>
          <div>
            <h2>Secretary</h2>

            <p>Timothy Handley</p>

            <p>Email: <a href="mailto:secretary@cserevue.org.au">secretary@cserevue.org.au</a></p>
          </div>
          <div>
            <h2>Arc Delegate</h2>

            <p>Roy Wallace-Cant</p>

            <p>Email: <a href="mailto:arc@cserevue.org.au">arc@cserevue.org.au</a></p>
          </div>
        </div>
      </div>
    );
  }
}
