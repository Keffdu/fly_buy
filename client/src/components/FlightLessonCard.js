import React from 'react'

function FlightLessonCard({ flight }) {


    console.log(flight)

    function cancelFlight() {
        fetch(`/flights/${flight.id}`)
        
    }

  return (
    <div className='lesson_container'>
        <div className='lesson_details'>
            <h1>Date: {flight.date}</h1>
        </div>
        <div className='lesson_details'>
            <h1>Location: {flight.airport}</h1>
        </div>
        <div className='lesson_details'>
            <h1>Instructor: {flight.fl_instructor}</h1>
        </div>
        <div className='lesson_details'>
            <h1>Airplane: {flight.fl_aircraft}</h1>
        </div>
        <div className='lesson_details'>
            <h1>Start Time: {flight.start_time}</h1>
        </div>
        <div className='lesson_details'>
            <h1>End Time: {flight.end_time}</h1>
        </div>
        <div className='lesson_buttons'>
            <button onClick={cancelFlight} className='lesson_button'>Cancel Flight</button>
            <button className='lesson_button'>Edit Flight</button>
        </div>
    </div>
  )
}

export default FlightLessonCard