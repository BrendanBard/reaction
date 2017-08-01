import React, { Component } from 'react'
import base from './base.js'

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
        this.firebaseSync()
    }

    firebaseSync = () => {
        this.bindingRef = base.syncState(
            `${Date.now()}/${this.state.id}`,
            {
                context: this,
                state: 'picture.title' ,
                
            },
            
            
        )

    }
    render() {
        const { picture } = this.state
        
        return (
            <div className='nasa-picture'>
                <h2> {picture.title}</h2>
                <img className='image' src={picture.hdurl} />
                <h3> {picture.date}</h3>
                <h3> {picture.explanation}</h3>
            </div>
        )
    }
}

export default NasaPicture