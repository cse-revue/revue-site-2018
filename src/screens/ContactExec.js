import React, { Component } from 'react';
// import logo from '../img/logo.png';
// import meme from '../img/buyinggf.jpeg';

export default class ContactExec extends Component {
  render() {
    return (
      <div className="contact-exec-page">
        <div className="heading">
          <h1>Contact Executives</h1>
          <p>Email: exec AT cserevue.org.au</p>
        </div>
        <div className="exec-tiles">
          <div>
            <h2>Directors</h2>

            <p>Lachlan Blair</p>

            <p>Email: directors AT cserevue.org.au</p>
          </div>
          <div>
            <h2>Producers</h2>

            <p>Jack Li</p>
            <p>Jasmin Arnall</p>

            <p>Email: producers AT cserevue.org.au</p>
          </div>
          <div>
            <h2>Treasurer</h2>

            <p>Winnie Tan</p>

            <p>Email: treasurer AT cserevue.org.au</p>
          </div>
          <div>
            <h2>Secretary</h2>

            <p>Clare Chen</p>

            <p>Email: secretary AT cserevue.org.au</p>
          </div>
          <div>
            <h2>Arc Delegate</h2>

            <p>Sabina Wang</p>

            <p>Email: arc AT cserevue.org.au</p>
          </div>
        </div>
      </div>
    );
  }
}
