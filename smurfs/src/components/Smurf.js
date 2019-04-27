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
        <img src='https://i.pinimg.com/originals/f8/2d/d8/f82dd8c5e63dc95d934ad2f5f5a044af.png' alt='smurf'/>
        <p>{props.smurf.name} Smurf</p>
        <p>{props.smurf.age} years old</p>
        <p>{props.smurf.height} cm tall</p>
        <button onClick={ () => props.banish(smurf) }>Banish from the Village</button>
    </figure>
    
    )
}

export default connect(null,{banish})(Smurf);
