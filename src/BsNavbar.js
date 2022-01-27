import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
// import Button from 'react-bootstrap/Button';
// import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

class MyNavbar extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 opacity-75 fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Enigmacamp x SMM</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <button className="button bg-dark">
                                    <span>SMM</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Features</a> */}
                                <button className="button bg-dark">
                                    <span>Enigma</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Pricing</a> */}
                                <button className="button bg-dark">
                                    <span>List Profile</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link disabled">Disabled</a> */}
                                <button className="button bg-dark">
                                    <span>Login</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        )
    }
}

export default MyNavbar;