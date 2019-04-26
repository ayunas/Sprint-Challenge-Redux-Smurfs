import React from 'react';
import './App.scss';



const Smurf = (props) => {

    return (

    <figure className='smurf'>
        <img src='#' alt='smurf'/>
        <p>{props.smurf.name}</p>
        <p>{props.smurf.age}</p>
        <p>{props.smurf.height}</p>
    </figure>
    
    )
}

export default Smurf;