import React, { Component } from 'react';
import './App.scss';

import Header from './Header';
import Footer from './Footer';
import SmurfVillage from './SmurfVillage';

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
}

export default App;
