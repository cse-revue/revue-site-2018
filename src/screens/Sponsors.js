import React, { Component } from 'react';
import wisetech from '../img/wisetech.PNG';
import arc from '../img/Arc-Clubs-Logo-Black-Transparent.png';
import coffeeOnCampus from '../img/CoffeeOnCampus.jpg';

export default class Sponsors extends Component {
  render() {
    return (
      <div className="row sponsors-page">
        <img src={wisetech} alt="WiseTech"/>
        <img src={arc} alt="Arc"/>
        <img src={coffeeOnCampus} alt="Coffee on Campus"/>
      </div>
    );
  }
}
