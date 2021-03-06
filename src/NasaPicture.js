import React, { Component } from 'react'
import base from './base.js'
import './NasaPicture.css'

class NasaPicture extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:'',
            picture: {},
        }
        
        this.fetchNasaPicture(props)
        
    }
    

    fetchNasaPicture(props) {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=04lUIaBxRPWv48DH9pXNWNvYKZuLpESlZESvxM8G`)
            .then(data => data.json())
            .then(picture => this.setState({ picture }))
    }
    componentWillReceiveProps(nextProps) {
        const locationChanged = nextProps.locations !== this.props.location
        if (locationChanged) {
            this.fetchNasaPicture(nextProps)
        }
    }
    componentWillMount=()=>{
        
        this.setState({id: Date.now()})
        if(Date.now() >= (Date.now() + 28800000))
        this.firebaseSync()
    }

    firebaseSync = () => {
        this.bindingRef = base.syncState(
            `${Date.now()}/${this.state.id}`,
            {
                context: this,
                state: 'picture' ,
            },
        )
    }
    render() {
        const { picture } = this.state
        
        return (
            <div className='nasa-picture'>
                <h2> {picture.title}</h2>
                <img alt='nuts to you' className='image' src={picture.hdurl} />
                <h3> {picture.date}</h3>
                <h4> {picture.explanation}</h4>
            </div>
        )
    }
}

export default NasaPicture