import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch, NavLink,Link} from 'react-router-dom' 
import base, {auth} from './base.js'
import DisplayInput from './DisplayInput.js'


class App extends Component {
  constructor(){
    super()
    this.state ={
      name: '',
      id: '',
      symbol:''
    }
  }
  handleSubmit = (ev) =>{
   ev.preventDefault() 
   const name = document.getElementById('input').value
    this.setState({ name })
    const id = Date.now()
    this.setState({id})
    document.getElementById('input').value = ''
    this.firebaseSync(id)
    const pastInput = {...this.state}
    
  }
  
 

  firebaseSync = (id) =>{
    base.syncState(
      id.toString(),
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
          <h2>Party on, Wayne</h2>
        </div>
        
        <div className='container'>
        <form className="user-input"  onSubmit={this.handleSubmit}>
        <input type='text' id='input' className='name'/>
        <Link to='/data'><button className='submit-button' type='submit' >Submit</button></Link> 
        </form>
        <DisplayInput symbol={this.state.symbol} />
        </div>
       <div>
         
         <Switch>
        <Route path='/data' component={DisplayInput}/>
        </Switch>
      </div>


        
        
      </div>
    );
  }
}

export default App;
