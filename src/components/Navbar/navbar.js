import "./navbar.css";

import { Link } from "react-router-dom";
import logo from "../Navbar/images/office.jpeg";

function Navbar() {
  return (
    <header>
    <div className="navbar-container">
      <div className="navbar"> 
      <ul className="pages-list">
      
        <Link to="/" >
            <img src={logo} alt="logo" className="logo"/>
          </Link>
          <h3 className="heading">Online Seat Booking System</h3>
          <Link to="/">
           <a  className="plist" > Home</a>
          </Link>
          <Link to="/signin" >
          <a  className="plist" > Signin</a>  
          </Link>
          <Link to="/register">
          <a className="plist" >  Register</a>  
          </Link>
          <Link to="/about">
            <a  className="plist"> About</a>
          </Link>
          <Link to="/Adminlogin">
            <a className="plist">Admin</a>
          </Link>
        </ul>
      </div>
    </div>
    
    </header>
    
  );
}

export default Navbar;