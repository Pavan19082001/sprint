import "./Home.css";
import logo0 from "./images/office.jpeg";
import useCollapse from 'react-collapsed';

import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    return (
    <div className="header">
    <div className="container-fluid p-0">
<div className="container text-center">
    <div className="row">
      <div className="col-md-7 col-sm-12 text-white">
        <h1><i>SEAT BOOKING</i></h1>
        <p>
          <i>Book your seat where ever and when ever required.</i>
        </p>
        
        <Link to="/register" >
          <a className="BookNow"> Book Now</a>
        </Link>
       
      </div>
      <div className="col-md-5 col-sm-12  h-30">
      <img src={logo0} alt="logo" className="logo"/>
       
      </div>
       
      </div>
    </div>
  </div>
  
  
  <br></br>
  </div>
    
    )}
    export default Home;