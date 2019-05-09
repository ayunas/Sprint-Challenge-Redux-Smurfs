import React, { Component } from 'react';
import './App.scss';
import {connect} from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import SmurfVillage from './SmurfVillage';
import {getSmurfs} from '../actions';
import AddSmurf from './AddSmurf';

class App extends Component {

  render() {
    return (
      <div className="App">
       <Header/>
       <AddSmurf/>
       <SmurfVillage/>
       <Footer/>       
      </div>
    );
  }

  componentDidMount() {
    this.props.getSmurfs('https://smurfs-redux.herokuapp.com/smurfs')
  }
}



export default connect(null,{getSmurfs})(App);
