import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  
  render(){
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <ClickCounter/><br/>
          <HoverCounter/>
        </div>
      </>
    )
  }
}


export default App;
