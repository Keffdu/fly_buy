import React from 'react'
import { Link } from 'react-router-dom';

function AircraftCard({ aircraft}) {

  return (
      <div className='plane_info'>
          <div >
              <h1 className='plane_name'>{aircraft.manufacturer} {aircraft.model}</h1>
              <img className='plane_image' src={aircraft.image} />
          </div>
          <div className='plane_info_container'>
            <div className='planes'>
              <h1 className='plane_details'>Flight Hours: {aircraft.hours}</h1>
              <h1 className='plane_details'>Rate: ${aircraft.hourly_rate}/hour</h1>
              <p className='plane_description'>{aircraft.description}</p>
            </div>
            <div className='plane_button'>
                <Link to={`/flight_lesson/plane/${aircraft.id}`}><button >Book Plane</button></Link>
            </div>
          </div>
      </div>
  )
}

export default AircraftCard;