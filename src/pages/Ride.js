import React from 'react'
import "../styles/Ride.css";
import logo from '../assets/img/ride2.png'

function Ride() {
  return (
    <div>
      <img src={logo} alt='Ride logo'/>
      <h1>Too Drunk To Drive?</h1>
      <h3>Crimson Cab</h3>
      <p>
          Hours of Operation: Every Day -- 6:00 P.M. - 2:00 A.M.
          <br></br>
          Call 575-524-8294!
      </p>
    </div>
  )
}

export default Ride;