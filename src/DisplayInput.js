import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
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
        const dateInput = document.getElementById('dateInput').value
        this.setState({ date: dateInput })
    }

    render() {
        const { picture } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input className='input' type='date' value={this.state.date} id='dateInput' onChange={this.handleChanges} />
                    <NavLink to='/data/``'><button className='go-button' type='submit' >Go</button></NavLink>
                </form>
                <Switch>
                <Route exact path='/data' render={() => <h3 id='idle'>Please enter a date to view</h3>} />
                <Route path='/data/:date' component={NasaPicture} />
                </Switch>
            </div>
        )
    }
}
export default DisplayInput