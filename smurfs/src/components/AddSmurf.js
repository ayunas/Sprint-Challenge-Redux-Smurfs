
import React, { Component } from 'react'

class AddSmurf extends Component {
    constructor(props) {
        super(props);

        this.state = {
            smurf : {},
            name: '',
            age: '',
            height: ''
        }
    }

    smurfy = (e) => {
        this.setState({
            smurf : {
                [e.target.name] : e.target.value
            }
        })
    }

    smurfify = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


  render() {
    return (
      <form onSubmit={this.smurfy}>
        <input name='name' type='text' value={this.state.name} onChange={this.smurfify}placeholder="Smurf's Name" />
        <input name='age' type='text' value={this.state.age} onChange={this.smurfify}placeholder="Smurf's Age" />
        <input name='height' type='text' value={this.state.height} onChange={this.smurfify}placeholder= "Smurf's Height" />
        <button onClick={ () => this.props.addSmurf('smurf') }>Add Smurf</button>
      </form>
    )
  }
}

export default AddSmurf;
