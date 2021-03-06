import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './App.css';

class SiteHeader extends Component {
  render() {
    return (
    <div className="topPanelContainer">
      <div className="topPanel">
          <img className="woahlrus" src={require('../media/woahlrus.gif')}/> 
          <h2 className="title">WoeBoards</h2>
          <h5 className="titleDescription">The place to post your woes!</h5>
        </div>
        <div className ="NavBar">
          <ul>
            <div className="dropdown">
              <button className="dropbtn">Get Happy 
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
              <Link to="/PostMemes">Memes</Link>
              <Link to="/PostAnimals">Animal Pictures</Link>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Get Angry 
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
              <Link to="/index">Vent Squad</Link>
              </div>
            </div>
        </ul>
      </div>
    </div>
    );
  }
}

export default SiteHeader;