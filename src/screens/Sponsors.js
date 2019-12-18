import React, { Component } from 'react';
import wisetech from '../img/wisetech.PNG';
import arc from '../img/Arc-Clubs-Logo-Black-Transparent.png';
import coffeeOnCampus from '../img/CoffeeOnCampus.jpg';
import cseSchool from '../img/cse-school.png';
import faastprint from '../img/faastprint.png';

export default class Sponsors extends Component {
  render() {
    return (
      <div className="row sponsors-page">
        <img src={cseSchool} alt="UNSW School of CSE"/>
        <img src={faastprint} alt="Faastprint"/>
      </div>
    );
  }
}
