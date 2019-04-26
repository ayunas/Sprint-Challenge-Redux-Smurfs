import React from 'react';
import {connect} from 'react-redux';

import {banish} from '../actions';




const Smurf = (props) => {
    const smurf = {
        name: props.smurf.name,
        age : props.smurf.age,
        height: props.smurf.height,
        id: props.smurf.id
    }

    return (

    <figure className='smurf'>
        <img src='#' alt='smurf'/>
        <p>{props.smurf.name}</p>
        <p>{props.smurf.age}</p>
        <p>{props.smurf.height}</p>
        <button onClick={ () => props.banish(smurf) }>Banish from the Village</button>
    </figure>
    
    )
}

export default connect(null,{banish})(Smurf);
