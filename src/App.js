import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom' 
import base, {auth} from './base'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Let's party</h2>
          <ul className='nav-links'>
            <li>
              <NavLink to='/nope'/>
              </li>
              </ul>
        </div>
        
      </div>
    );
  }
}

export default App;
