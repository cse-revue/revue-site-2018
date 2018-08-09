import React, { Component } from 'react';
// import logo from '../img/logo.png';
// import meme from '../img/buyinggf.jpeg';

export default class ContactExec extends Component {
  render() {
    return (
      <div className="contact-exec-page">
        <div className="row column left">
          <h1>Contact Executives</h1>
          <p>Email: <a href="mailto:exec@cserevue.org.au">exec@cserevue.org.au</a></p>
        </div>
        <div className="row column left">
          <h2>Directors</h2>
          <ul>
            <li>Ryan Klugman</li>
            <li>Arunav Neil Sarkar</li>
            <li>Jathurson</li>
          </ul>
          <p>Email: <a href="mailto:directors@cserevue.org.au">directors@cserevue.org.au</a></p>
        </div>
        <div className="row column left">
          <h2>Producers</h2>
          <ul>
            <li>Andrew Ha</li>
            <li>Samantha Chhoeu</li>
            <li>Kira Xiang Chen</li>
          </ul>
          <p>Email: <a href="mailto:producers@cserevue.org.au">producers@cserevue.org.au</a></p>
        </div>
        <div className="row column left">
          <h2>Treasurer</h2>
          <ul>
            <li>Yuvraj Singh</li>
          </ul>
          <p>Email: <a href="mailto:exec@cserevue.org.au">exec@cserevue.org.au</a></p>
        </div>
      </div>
    );
  }
}
