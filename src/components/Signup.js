import React from "react";
import {FaFacebook, FaTwitter,FaGithub} from "react-icons/fa";
import "./Style.css";

const Hero = () =>{
    return(
        <div className="hero">
            <div className="container">
                <div className="col-2">
                    <div className="form-layout shadow-2">
                        <div className="form-container">
                            <p className="sign-in">Sign Up Form</p>
                            <p className="sign-with">Sign Up with :</p><br/>
                            <div className="social">
                                <a href="https://web.facebook.com/"><span><FaFacebook size={20} /></span></a>
                                <a href="www.twitter.com"><span><FaTwitter size={20} /></span></a>
                                <a href="https://github.com/"><span><FaGithub size={20} /></span></a>
                            </div>
                            <p className="opt">Or</p>
                            <form action="">
                                <input type="text" placeholder="Name" required="name" />
                                <input type="email" placeholder="Email" required="email"/>
                                <input type="password" placeholder="Password" required="password"/>
                                <input type="password" placeholder="Confirm Password" required="password"/>
                                <button >Create Your Account</button>
                            </form>
                        </div>
                        <div className="form-footer">
                            <p>
                                By signing up, you agree to our
                                <span className="primary-color">Terms, Data policy</span>
                                and <span className="primary-color">Cookies policy</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero