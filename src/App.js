import logo from './logo.svg';
import './App.css';
import BodyComponent from './BodyComponent';
import { Component } from 'react';

class App extends Component {
  name = "Faiz"
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.name}
          </p>
        </header>
        <p>{this.name}</p>
        {/* props */}
        <BodyComponent nameFromParent = {this.name} address = "Semarang" />
        <BodyComponent nameFromParent = "Mason" address = "London" />
        <BodyComponent nameFromParent = "Mount" address = "Edinburgh"/>
      </div>
    );
  }
}

export default App;
