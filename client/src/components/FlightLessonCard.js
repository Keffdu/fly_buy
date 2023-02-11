import React from 'react'
import { UserContext } from '../context/user'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

function FlightLessonCard({ flightLesson }) {

    const { user , setUser } = useContext(UserContext)
    const [ errors, setErrors ] = useState([])

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

function completeFlight() {
    setErrors([])
        const updatedFlight = {
            completed: true
        }
        // console.log(updatedFlight)
        fetch(`/flight_lessons/${flightLesson.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedFlight),
        }).then((r) => {
            if (r.ok) {
                r.json().then((updatedLesson) => {
                    console.log(updatedLesson)
                    const updatedFlightLessons = user.flight_lessons.map((fl) => fl.id === flightLesson.id ? updatedLesson : fl)
                    const updatedUser = {...user, flight_lessons: updatedFlightLessons}
                    // let updatedFlightLessons = [...user.flight_lessons, newLesson]
                    updateUserHours()
                    setUser(updatedUser)
                    // alert("Your flight has been updated")
                    // history.push("/flights")
                })
            } else {
                r.json().then((err) => (setErrors(err.errors)))
            }
        })
}

        function updateUserHours() {
            // console.log("updating user")
        const updatedUser= {
            flight_hours: user.flight_hours + (parseInt(flightLesson.end_time) - parseInt(flightLesson.start_time))
        }
        // console.log(updatedUser)
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        }).then((r) => {
            if (r.ok) {
                r.json().then((updatedUserHours) => {
                    console.log(updatedUserHours)
                    // const  = user.flight_lessons.map((fl) => fl.id === flightLesson.id ? updatedLesson : fl)
                    // const updatedFlightHours = {...user, flight_hours: updatedHours}
                    // let updatedFlightLessons = [...user.flight_lessons, newLesson]
                    setUser(updatedUserHours)
                })
            } else {
                r.json().then((err) => (setErrors(err.errors)))
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
        {flightLesson.completed === false ? <div className='lesson_buttons'>
            <button onClick={cancelFlight} className='lesson_button'>Cancel Flight</button>
            <Link to={`/flight_lesson/edit/${flightLesson.id}`}><button className='lesson_button'>Edit Flight</button></Link>
        </div> : null}
        <div className='completed_button_div'>
            {flightLesson.completed === false ? <button onClick={completeFlight} className='completed_button'>Complete Flight</button> : null}
        </div>
    </div>
  )
}

export default FlightLessonCard