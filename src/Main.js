import React from 'react'
import DisplayInput from './DisplayInput'


const Main = (props) => {
    const mainProps = {
        name: props.name,
        id: props.id
    }
    return (
        <div>
        <Display name={props.name}/>
        </div>
    )


}
