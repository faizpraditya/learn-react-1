// import React from "react";
// urutan import berpengaruh
// import css yang terakhir akan mengoverride css yang awal
import { Component } from "react";
import LoginScreen from "./Login";
import MyNavbar from "./MyNavbar";
import BsNavbar from "./BsNavbar";
import Footer from "./Footer";
import imghp from './teshp.svg'
import imgig from './ig.svg'
import imgtw from './tw.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import "./MyStyle.css";
import FooterBs from "./FooterBs";
class App extends Component {
  getButtonName() {
    return "Kepencet"
  }
  
  buttonClick = "Click Me"
  render(){
    return(
      <>
        <div className="bg-image">
          <BsNavbar/>
          {/* <MyNavbar/> */}
          <LoginScreen/>
          {/* <Footer/> */}
          <FooterBs/>
        </div>
      </>
    );
  }
}

export default App;