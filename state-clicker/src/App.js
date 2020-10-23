import React, { Component } from 'react';
import Clicker from './clicker'
import './App.css';

//class App extends Component() {
/*render(){
  return(
    <div className = "App">
      
    </div>
    
  )
}
}
export default App;
*/
class App extends Component{
  render(){
    return (
      <div className="App">
        <Clicker></Clicker>
      </div>
    )
  }
}
export default App
//}