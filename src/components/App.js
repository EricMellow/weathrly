import Background from './Background';
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
 
render(){
  return (
      <div className ='App'>
        <Background />
      </div>
  )
}
}

export default App;

