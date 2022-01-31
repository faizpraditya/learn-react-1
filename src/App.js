import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Count from './Count';
import ChildComponent from './ChildComponent';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      message : ''
    }
  }

  getMessage = (msg) => {
    // yang pake props itu read only
    this.setState({
      message : msg
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1>{this.state.message}</h1>
        {/* <ChildComponent name={'Mason Mount'} callback={this.getMessage} /> */}
        <Count/>
      </div>
    );
  }
}

export default App;
