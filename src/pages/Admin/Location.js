import React, { Component } from 'react';
import '../Admin/Location.css';
 
  class Location extends Component {
  
   constructor() {
        super();
 
        this.state = {
            Location: ''
        };
      this.onRadioChange = this.onRadioChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onRadioChange = (e) => {
      this.setState({
        location: e.target.value
      });
    }
 
    onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    }
  render() {
    return (
    <div className="container0">
    <div className="App">
      <form onSubmit={this.onSubmit}>
      <strong data-testid="para"></strong>
      <h1>Select Location </h1>
      <ul>
        <li>
        <label>
        <input type="radio" value="Hyderabad" checked={this.state.Location=== "Hyderabad"} onChange={this.onRadioChange} 
       />
        <span className='input'>Hyderabad</span>
        </label>
        </li>

        <li>
        <label>
        <input type="radio" value="Banglore" checked={this.state.Location=== "Banglore"} onChange={this.onRadioChange} 
        />
        <span className='input' >Banglore</span>
        </label>
        </li>

        <li>
        <label>
        <input type="radio" value="Chennai" checked={this.state.Location=== "Chennai"} onChange={this.onRadioChange} />
        <span className='input'>Chennai</span>
        </label>
        </li>

        <li>
        <label>
        <input type="radio" value="Mumbai" checked={this.state.Location=== "Mumbai"} onChange={this.onRadioChange} />
        <span className='input'>Mumbai</span>
        </label>
        </li>
        
 
      <button type="submit" className="btnmargin">Submit</button>
      </ul>
      </form>
    </div>
    </div>
    );
  }
}
export default Location;