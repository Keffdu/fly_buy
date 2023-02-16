import React from 'react'
import { Link } from 'react-router-dom'


function AirportCard({ airports }) {

    const airportCard = airports.map((airport) => {
        return (
            <div className='airport_card' key={airport.id}>
                <h1 className='airport_title'>{airport.name}</h1>
                <img className='airport_image' src={airport.image} />
                <div className='airport_details_cont'>
                    <p className='airport_details'>{airport.address}</p>
                    <p className='airport_details'>{airport.email}</p>
                    <p className='airport_details'>{airport.phone_number}</p>
                </div>
                <div className='airport_button'>
                    <Link to={`/airports/${airport.id}`}><button>View Airport</button></Link>
                </div>
            </div>
        )
    })


  return (
    <>
        {airportCard}
    </>
  )
}

export default AirportCard