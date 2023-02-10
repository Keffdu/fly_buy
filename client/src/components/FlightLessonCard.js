import React from 'react'
import { UserContext } from '../context/user'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function FlightLessonCard({ flightLesson }) {

    const { user , setUser } = useContext(UserContext)

    // console.log(flightLesson)

function cancelFlight() {
        fetch(`/flight_lessons/${flightLesson.id}`, {
        method: "DELETE",
    }).then((r) => {
        if (r.ok) {
            let updatedFlightLessons = user.flight_lessons.filter((lesson) => flightLesson.id !== lesson.id)
            setUser({...user, flight_lessons: updatedFlightLessons})
        } else {
            r.json().then((err) => (console.log(err.errors)))
        }
    })
}


  return (
    <div className='lesson_container'>
        <div className='lesson_details'>
            <h1>Date: {flightLesson.date}</h1>
        </div>
        <div className='lesson_details'>
            <h1>Location: {flightLesson.airport}</h1>
        </div>
        <div className='lesson_details'>
            <h1>Instructor: {flightLesson.fl_instructor}</h1>
        </div>
        <div className='lesson_details'>
            <h1>Airplane: {flightLesson.fl_aircraft}</h1>
        </div>
        <div className='lesson_details'>
            <h1>Start Time: {flightLesson.start_time}</h1>
        </div>
        <div className='lesson_details'>
            <h1>End Time: {flightLesson.end_time}</h1>
        </div>
        <div className='lesson_buttons'>
            <button onClick={cancelFlight} className='lesson_button'>Cancel Flight</button>
            <Link to={`/flight_lesson/edit/${flightLesson.id}`}><button className='lesson_button'>Edit Flight</button></Link>
        </div>
        <div className='completed_button_div'>
            <button className='completed_button'>Complete Flight</button>
        </div>
    </div>
  )
}

export default FlightLessonCard