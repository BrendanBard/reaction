import React, {Component} from 'react'
import { Route } from 'react-router-dom'
import NasaPicture from './NasaPicture'
class DisplayInput extends Component{
    
        
        state = {
            date: '',
        }
         
    
    handleChanges = (ev) => {
        this.setState({date: ev.target.value})
    }
    
    
    handleSubmit = (ev) =>{
        ev.preventDefault()
         this.props.history.push(`/Nasa/${this.state.date}`)
        this.setState({date: ''})
    }
    
    render (){
        const {picture} = this.state
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
        <input type='date' value={this.state.date} onChange={this.handleChanges}/>
        </form>
         <Route exact path ='/data' render={() => <h3>Please enter a date to view</h3>} />
         <Route path='/Nasa/:date' component={NasaPicture}/>
        </div>
        )
    }
}
export default DisplayInput