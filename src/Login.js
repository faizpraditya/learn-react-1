import { Component } from "react";
import loginImg from './login5.svg'
import imgig from './ig.svg'
import imgtw from './tw.svg'
import imgfb from './fb.svg'
import imggo from './go.svg'
import "bootstrap/dist/css/bootstrap.min.css"
import "./MyStyle.css";


class LoginScreen extends Component {
    getButtonName() {
      return "Kepencet"
    }
    
    buttonClick = "Click Me"
    render(){
      return(
            <div className="container pt-5">
                <div className="row d-flex align-items-center mt-2 mb-4">
                    <div className="col-md-6">
                        <img src={loginImg} className="img-fluid" />
                    </div>
                    <div className="col-md-6 contents">
                        {/* row untuk login */}
                        <div className="row justify-content-end">
                            {/* setting panjang form */}
                            <div className="col-md-8">
                                <div className="mb-4">
                                    <h3>Login</h3>
                                    <p className="mb-4">{this.textLogin}</p>
                                </div>
                                <form action="#">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" id="username" />
                                    <label htmlFor="password" className="mt-3">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                    <div className="d-flex mt-2 mb-4">
                                      <label className="mb-0">
                                        <input type="checkbox" />
                                        <span className="caption"> Remember me </span>
                                      </label>
                                      <span className="ms-auto"><a href="#">Forgot Password</a></span>
                                    </div>
                                    <div className="row">
                                      <div className="col-md-12">
                                      <input type="submit" value="Log In" className="btn btn-block btn-dark" />
                                      </div>
                                      <div className="col-md-12 d-flex justify-content-center">
                                        <span className="text-left my-2">— or login with —</span>
                                      </div>
                                      <div className="col-md-12 d-flex justify-content-center">
                                        <a href="#" className="social-icon">
                                            <img src={imgfb} alt="facebook" />
                                        </a>
                                        <a href="#" className="social-icon">
                                          <img src={imgtw} alt="twitter" />
                                        </a>
                                        <a href="#" className="social-icon">
                                          <img src={imggo} alt="google" />
                                        </a>
                                      </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      );
    }
    textLogin = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
    textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil incidunt ex in! Tempore enim atque iure. Voluptatibus earum quidem, iusto accusantium maiores hic voluptas porro, accusamus, nihil amet rerum rem!"
  }
  
  export default LoginScreen;