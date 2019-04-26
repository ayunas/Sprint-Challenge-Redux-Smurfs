import React from 'react';
import {connect} from 'react-redux';
import Smurf from './Smurf';


class SmurfVillage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <div>
                <div>This is Smurf Village</div>
                {this.props.smurfs.map( (smurf,i) => <Smurf key={i} smurf={smurf} /> )}
            </div>
            // {props.smurfs.map( (smurf,i) => {
            //     return (
            //         <p><strong>{smurf.name}</strong></p>
            //         <p>{smurf.age}</p>
            //         <p>{smurf.height}</p>
            //     );
            // })}
        )
    }
}

function mapStateToProps(state) {
    return {
      smurfs : state.smurfs
    }
  }

export default connect(mapStateToProps,null)(SmurfVillage);