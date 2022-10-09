import React, {useState}  from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "./Navbar.css"

const Navbar = () =>{
    const [click, setClick] = useState(false)

    const handleClick = () => setClick (!click)
    return(
        <div>
            <div className="navbar">
                <div className="logo">
                   <p className="logo">AJAY</p>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item f5 link dim black underline"><a href="/">Sign Up</a></li>
                    <li className="nav-item f5 link dim black underline"><a href="/Signin">Sign In</a></li>
                </ul>
                <div className="hamburger" onClick={(handleClick)}>
                    {click ? (<FaTimes size={30} style={{color: "#ffffff"}}/>) : (<FaBars size={30} style={{color: "#ffffff"}}/>) }
                    
                </div>

            </div>
        </div>
    )
}
export default Navbar;