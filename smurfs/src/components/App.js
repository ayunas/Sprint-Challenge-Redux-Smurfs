import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';
import {connect} from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import SmurfVillage from './SmurfVillage';
import {addSmurf} from '../actions';



/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {

  render() {
    return (
      <div className="App">
       <Header/>
       <SmurfVillage/>
       <Footer/>       
      </div>
    );
  }

  componentDidMount() {
    this.props.addSmurf('http://localhost:3333/smurfs')
  }
}

export default connect(null,{addSmurf})(App);
