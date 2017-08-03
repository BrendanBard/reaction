import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, NavLink, Link } from 'react-router-dom'
import base, { auth } from './base.js'
import DisplayInput from './DisplayInput.js'


class App extends Component {



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Party on, Wayne</h2>
        </div>
        <body>
          <div className='container'>
            <form className="user-input" onSubmit={this.handleSubmit}>
              <NavLink to='/data'><button className='submit-button' type='submit' >Submit</button></NavLink>
            </form>
            <br></br>
          </div>
          <div>

            <Switch>
              <Route path='/data' component={DisplayInput} />
            </Switch>
          </div>
        </body>



      </div>
    );
  }
}

export default App;
