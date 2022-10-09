import React from "react";
import {FaFacebook, FaTwitter,FaGithub} from "react-icons/fa";
import "./Style.css";

const Signin = () => {
    return(
        <div className="hero">
            <div className="container">
                <div className="col-2">
                    <div className="form-layout shadow-2">
                        <div className="form-container">
                            <p className="sign-in">Sign In Form</p>
                            <p className="sign-with">Sign In with :</p><br/>
                            <div className="social">
                                <a href="https://web.facebook.com/"><span><FaFacebook size={20} /></span></a>
                                <a href="www.twitter.com"><span><FaTwitter size={20} /></span></a>
                                <a href="https://github.com/"><span><FaGithub size={20} /></span></a>
                            </div>
                            <p className="opt">Or</p>
                            <form action="">
                                <input type="email" placeholder="Email" required="email"/>
                                <input type="password" placeholder="Password" required="password"/>
                                <button className="log">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Signin