// import React from "react";
// urutan import berpengaruh
// import css yang terakhir akan mengoverride css yang awal
import { Component } from "react";
import imghp from './teshp.svg'
import imgig from './ig.svg'
import imgtw from './tw.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import "./MyStyle.css";

// App.js adalah sebuah komponen di react
// class
// function

// class App extends React.Component {

// }

// export default class App extends Component {
class App extends Component {
  getButtonName() {
    return "Kepencet"
  }
  
  buttonClick = "Click Me"
  render(){
    // const buttonClick = "Click Me"
    // const mystyle = {
    //   color : "white",
    //   backgroundColor : "DodgerBlue",
    //   padding : "10px",
    //   fontFamily : "Arial"
    // }
    return(
      <>
        {/* <h1 style={{color: "red"}}>Hello styled</h1>
        <h1 style={mystyle}>Hello styled</h1> */}
        {/* <h1 style={this.mystyle}>Hello styled</h1> */}
        {/* <h1 className="myStyle">Hello styled</h1> */}
        {/* <p style={{backgroundColor:"lightblue"}}>I'm Lightblue</p> */}
        {/* <button>{this.getButtonName()}</button> */}
        {/* <button>{buttonClick}</button> */}
        {/* <button>{this.buttonClick}</button> */}
        <div>
          <div className="header">
            <div className="textHeader">
              <h1>Enigmacamp x SMM</h1>
            </div>
            <div className="menu">
              <button className="button">
                  <span>SMM</span>
              </button>
              <button className="button">
                  <span>Enigma</span>
              </button>
              <button className="button">
                  <span>List Profile</span>
              </button>
              <button className="button">
                  <span>Form</span>
              </button>
              <button className="btn btn-info">tes</button>
            </div>
          </div>
          <div className="contentA">
            <div className="img">
              <img src={imghp} alt="Homepage Image" />
            </div>
            <div className="text-content">
              <div className="text">{this.textContent}</div>
            </div>
          </div>
          <div className="contentB">
            <div className="text-content">
              <div className="text">{this.textContent}</div>
            </div>
            <div className="img">
              <img src={imghp} alt="Homepage Image" />
            </div>
          </div>
          <div className="contentA">
            <div className="img">
              <img src={imghp} alt="Homepage Image" />
            </div>
            <div className="text-content">
              <div className="text">{this.textContent}</div>
            </div>
          </div>
          <div className="footer">
            <div className="copyright">Copyright &copy; 2022 </div>
            <div className="contact">
              <a href="#">
                <img src={imgig} alt="instagram" />
              </a>
            </div>
            <div className="contact">
              <a href="#">
                <img src={imgtw} alt="twitter" />
              </a>
            </div>

          </div>
        </div>
      </>
    );
  }
  textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt ex in! Tempore enim atque iure. Voluptatibus earum quidem, iusto accusantium maiores hic voluptas porro, accusamus, nihil amet rerum rem!"
  // mystyle = {
  //   color : "white",
  //   backgroundColor : "DodgerBlue",
  //   padding : "10px",
  //   fontFamily : "Arial"
  // }
}

export default App;