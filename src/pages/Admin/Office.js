import React, { Component } from 'react';
import "./Office.css";

  class Office extends Component {
  
   constructor() {
        super();
 
        this.state = {
            office: ''
        };
      this.onRadioChange = this.onRadioChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onRadioChange = (e) => {
      this.setState({
        office: e.target.value
      });
    }
 
    onSubmit = (e) => {
      e.preventDefault();
      console.log(this.state);
    }
  render() {
    return (
    <div className="container2">
    <div className="App">
      <form onSubmit={this.onSubmit}>
      <strong data-testid="para"></strong>
      <h1>Select Office</h1>
 
      <ul>
        <li>
        <label>
        <input type="radio" value="Office1" checked={this.state.office=== "Office1"} onChange={this.onRadioChange} />
        <span className='input'>Office1</span>
        </label>
        </li>

        <li>
        <label>
        <input type="radio" value="Office2" checked={this.state.office=== "Office2"} onChange={this.onRadioChange} />
        <span className='input'>Office2</span>
        </label>
        </li>
        

        <li>
        <label>
        <input type="radio" value="Office3" checked={this.state.office=== "Office3"} onChange={this.onRadioChange} />
        <span className='input'>Office3</span>
        </label>
        </li>
        <br></br>
      <button type="submit" data-testid="btnVerify">Submit</button>
      </ul>
      </form>
    </div>
    </div>
    );
  }
}
export default Office;