import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom' 
import base, {auth} from './base.js'

class App extends Component {
  constructor(){
    super()
    this.state ={
      name: '',
      id: ''
    }
  }
  handleSubmit = (ev) =>{
   ev.preventDefault() 
   const name = document.getElementById('input').value
    this.setState({ name })
    const id = Date.now()
    this.setState({id})

    
  }
  
  componenetDidMount= () =>{
    
  }
  firebaseSync = () =>{
    base.syncState(
      `${this.state.id}`,
      {
      context: this,
      state: 'name'
    }
    )
    
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Let's party</h2>
        </div>
        <form className="user-input"  onSubmit={this.handleSubmit}>
        <input type='text' id='input' className='name'/>
        <button className='submit-button' type='submit' >Submit</button>
        <button onClick={this.firebaseSync} >Send</button>
        </form>
        
      </div>
    );
  }
}

export default App;
