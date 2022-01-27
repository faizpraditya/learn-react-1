import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "./MyStyle.css";

class MyNavbar extends Component {
    render(){
        return(
            <div className="container-fluid header py-2 opacity-75 fixed-top">
              <div className="row">
                <div className="col-md-6 textHeader">
                  <h3>Enigmacamp x SMM</h3>
                </div>
                <div className="col-md-6 menu">
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
                    <span>Login</span>
                  </button>
                </div>
              </div>
            </div>
        )
    }
}

export default MyNavbar;