import React, { Component } from 'react';
import wisetech from '../img/wisetech.PNG';
import arc from '../img/Arc-Clubs-Logo-Black-Transparent.png';
import coffeeOnCampus from '../img/CoffeeOnCampus.jpg';
import cseSchool from '../img/cse-school.png';
import faastprint from '../img/faastprint.png';
import remnant1 from '../img/remnant1.png';
import remnant2 from '../img/remnant2.png';
import remnant3 from '../img/remnant3.png';

export default class Sponsors extends Component {
  render() {
    return (
      <div>
        <div className="row sponsors-page">
          <img src={cseSchool} alt="UNSW School of CSE"/>
          <img src={arc} alt="Arc"/>
        </div>
      </div>
    );
  }
}
