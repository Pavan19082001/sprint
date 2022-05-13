import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./DisplayTable.css";

function DisplayTable() {
  let [data, setdata] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8081/getallusers")
    .then(res => {
      
      setdata(res.data)})
  },[])
  return (
    <div className="App container py-5">
    
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">EmailId</th>
            <th scope="col">Password</th>
          </tr>
        </thead>
        <tbody>
         
          {data && (data.map((item, index) => 
            <tr>
              <th scope="row">{ index+1 }</th>
              <td>{ item.firstName }</td>
              <td>{ item.lastName }</td>
              <td>{ item.emailId }</td>
              <td>{ item.password }</td>
            </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default DisplayTable;