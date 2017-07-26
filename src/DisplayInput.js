import React, {Component} from 'react'
import app from './App.js'

class DisplayInput extends Component{
    constructor(props){
        super(props)
        this.state = {
            pastes: {}
        }
         this.fetchPaste(props)
    }
    fetchPaste = (props) =>{
        fetch('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=9JCA1A3V5HI4VZJ1')
        .then(data => data.json())
        .then(pastes => this.setState({pastes}))
    }
    render (){
        return(
        <div>
            <ul>{this.pastes}</ul>
        </div>
        )
    }
}
export default DisplayInput