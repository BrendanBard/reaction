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
        const dateInput = document.getElementById('dateInput').value
        this.setState({ date: dateInput })
        this.props.history.push(`/data/${this.state.date}`)
        this.setState({ date: '' })
    }
    handleChange = (ev) => {
        const dateInput = document.getElementById('dateInput')
        this.setState({ date: dateInput })
    }

    render() {
        const { picture } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className='input' type='date' id='dateInput' onChange={this.handleChanges} />
                    <button className='go-button' type='submit' >Go</button>
                </form>
                <Route exact path='/data' render={() => <h3 id='idle'>Please enter a date to view</h3>} />
                <Route path='/data/:date' component={NasaPicture} />
            </div>
        )
    }
}
export default DisplayInput