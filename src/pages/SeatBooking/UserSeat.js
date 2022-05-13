import React, { Component } from 'react';
import '../SeatBooking/UserSeat.css';

class Seatbooking extends Component {
    constructor() {
        super();
          this.state = {
          seat: [
            'F1','F2','F3',
            'M1','M2','M3',
            'B1','B2','B3'
          ],
          seatAvailable: [
            'F1','F2','F3',
            'M1','M2','M3',
            'B1','B2','B3'
          ],
          seatReserved: [],
          seatSelected: []
        }
      }

   onClickData(seat) {
    if(this.state.seatReserved.indexOf(seat) > -1 ) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res !== seat),
        
      })
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res !== seat)
      })
    }
  }
  checktrue(row) {
    if(this.state.seatSelected.indexOf(row) > -1){
      return false
    }else{
      return true
    }
  }

  handleSubmited() {
    this.setState({seatSelected: this.state.seatSelected.concat(this.state.seatReserved)})
    this.setState({
      seatReserved: []
    })
  }

  render() {
    return (
      <div>
          <br></br>
          <br></br>
        <h1 className='top'>Reserve your Seats</h1>
        <DrawGrid
          seat={ this.state.seat }
          available={ this.state.seatAvailable }
          reserved={ this.state.seatReserved }
          selected={ this.state.seatSelected }
          onClickData={ this.onClickData.bind(this)}
          checktrue={ this.checktrue.bind(this)}
          handleSubmited={ this.handleSubmited.bind(this)}
        />
      </div>
    )
  }
}

class DrawGrid extends Component {
  render() {
    return (
      <div className="container1">
        <h2><br></br></h2>
        <table className="grid">
          <tbody>
            <tr>
            { this.props.seat.map( row =>
              <td
              className={this.props.selected.indexOf(row) > -1? 'reserved': (this.props.reserved.indexOf(row) > -1? 'selected':'available')}
              key={row} onClick={this.props.checktrue(row) ? e => this.onClickSeat(row) : null} >{row} </td>) }
            </tr>
          </tbody>
          
      
        </table>
        <div className='b1'>
        <button type="button" className="btnmargin" onClick={() => this.props.handleSubmited()}>Confirm Booking</button>
        <br></br>
        <br></br>
    <br></br>
    <br></br>
    <br></br>
    </div>
       
      </div>
      )
    }

    onClickSeat(seat) {
      this.props.onClickData(seat);
    }
    
  }




  export default Seatbooking;