import "./Admin.css";
import logo from "./images/officeicon.png";
import logo1 from "./images/office.png";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";

function Admin() {
    return (
    <>
      <div className="box">
            <h1>Welcome Admin</h1>
      </div>
      <div className="innerLine">
          <p><b>To see the List of User accounts in online seat booking system</b></p>
          <div className="ja">
          <Link to="/displaytable">
          <Button variant="dark" >User data</Button>{' '}
          </Link>
          </div>
      </div>
    <div className="pic"  >
     <Link to="/Location" >
    <img src={logo} alt="logo"/> <a className="color"><b>Location</b></a>
  </Link>
  
  </div>
  
<div className="pic" >
  <Link to="/Office" >
    <img src={logo1} alt="logo"/><a className="color"><b>Office</b></a>
  </Link>    
      </div>

</>
          
  );
}

export default Admin;