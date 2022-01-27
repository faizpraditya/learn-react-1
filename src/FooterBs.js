import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import imgig from './ig.svg'
import imgtw from './tw.svg'
import imgfb from './fb.svg'
import imggo from './go.svg'
import "./MyStyle.css";

class FooterBs extends Component {
    render(){
        return(
            <div className="bg-dark footer py-3 opacity-75">
              <div className="copyright">
                <small>Copyright &copy; 2022</small>
              </div>
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
        )
    }
}

export default FooterBs;