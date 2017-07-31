import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NasaPicture from './NasaPicture'
import base from './base.js'
import './DisplayInput.css'
class DisplayInput extends Component {
    
    state = {
        date: '',
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/data/${this.state.date}`)
        this.setState({ date: '' })
    }
    handleChange =(ev) => {
        this.setState({date: ev.target.value})
    }
    // handleSubmit = (ev) => {
    //     this.setState({ date: ev.target.value })
    //     ev.preventDefault()
    //     const name = document.getElementById('input').value
    //     this.setState({ date })
    //     const id = Date.now()
    //     this.setState({ id })
    //     document.getElementById('input').value = ''
    //     this.firebaseSync(id)
    // }
    


    
    render() {
        const { picture } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/*value={this.state.date}*/}
                    <input className='input' type='date'  onChange={this.handleChanges} />
                    <button className='go-button' type='submit' >Go</button>
                </form>
                <Route exact path='/data' render={() => <h3 id='idle'>Please enter a date to view</h3>} />
                <Route path='/data/:date' component={NasaPicture} />
            </div>
        )
    }
}
export default DisplayInput