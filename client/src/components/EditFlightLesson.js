import React from 'react'
import { UserContext } from '../user'
import { useContext, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Alert from '@mui/material/Alert';

function EditFlightLesson() {

    const { id } = useParams()
    const { user, setUser} = useContext(UserContext)
    const history = useHistory()
    const [ errors, setErrors ] = useState(null)

    const flightLesson = user.flight_lessons.find(flights => flights.id == id)

    const [ updatedFlight, setUpdatedFlight ] = useState({
        date: flightLesson.date,
        start_time: flightLesson.start_time,
        end_time: flightLesson.end_time
    })

    console.log(flightLesson)

    function handleSubmit(e) {
        e.preventDefault()
        setErrors([])
        console.log(updatedFlight)
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
                    setUser(updatedUser)
                    alert("Your flight has been updated")
                    history.push("/flights")
                })
            } else {
                r.json().then((err) => (setErrors(err.errors)))
            }
        })
    }

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setUpdatedFlight({ ...updatedFlight, [name]: value })
    }

    function cancelEdit() {
        history.push(`/flights`)
    }


  return (
<div className='flight_lesson_homepage'>
        <div className='fl_title'>
            <h1 className='fl_title'>Edit Flight Lesson</h1>
        </div>
        <div className='flight_lesson_errors'>
              {errors ? errors.map((e) => 
                  <Alert style={{marginRight: "10px"}} key={e} severity="error" variant='filled'>{e}</Alert>) : null}
        </div>
        <div className='form_container'>
            <form onSubmit={handleSubmit}>
                <div className='input_div'>
                    <div style={{paddingBottom: "5px"}}>
                    <label className='form_font'>Airport: </label>
                    </div>
                    <p className='form_font'>{flightLesson.airport}</p>
                </div>
                <div className='input_div'>
                    <div style={{paddingBottom: "5px"}}>
                    <label className='form_font'>Aircraft: </label>
                    </div>
                    <p className='form_font'>{flightLesson.fl_aircraft}</p>
                </div>
                <div className='input_div'>
                    <div style={{paddingBottom: "5px"}}>
                    <label className='form_font'>Instructor: </label>
                    </div>
                    <p className='form_font'>{flightLesson.fl_instructor}</p>
                </div>
                <div className='input_div'>
                    <div style={{paddingBottom: "5px"}}>
                        <label className='form_font'>Select Date: </label>
                    </div>
                    <input 
                        type='date'
                        name='date'
                        onChange={handleChange}
                        value={updatedFlight.date}
                        />
                </div>
                <div className='input_div'>
                    <div style={{paddingBottom: "5px"}}>
                        <label className='form_font'>Start Time: </label>
                    </div>
                    <input 
                        style={{width: "115px"}}
                        type='time'
                        min="08:00"
                        max="21:00"
                        step="3600"
                        name='start_time'
                        onChange={handleChange}
                        value={updatedFlight.start_time}
                    />
                </div>
                <div className='input_div'>
                    <div style={{paddingBottom: "5px"}}>
                        <label className='form_font'>End Time: </label>
                    </div>
                    <input
                        style={{width: "115px"}}
                        type='time'
                        min="08:00"
                        max="21:00"
                        step="3600"
                        name='end_time'
                        onChange={handleChange}
                        value={updatedFlight.end_time}
                    />
                </div>
                <div className='input_div'>
                    <div style={{paddingBottom: "5px"}}>
                    <label className='form_font'>Hourly Rate: </label>
                    </div>
                    <p className='form_font'>${flightLesson.fl_hourly}/hour</p>
                </div>
                <div className='input_div'>
                    <div style={{paddingBottom: "5px"}}>
                    <label className='form_font'>Estimated Cost: </label>
                    </div>
                    <p className='form_font'>${(parseInt(updatedFlight.end_time) - parseInt(updatedFlight.start_time)) * flightLesson.fl_hourly}</p>
                </div>
                <div className='button_div'>
                    <button type='button' onClick={cancelEdit} style={{ width: "100px", fontSize: "1.3rem", marginBottom: "15px"}}>Cancel</button>
                    <button type="submit" style={{ width: "100px", fontSize: "1.3rem", marginBottom: "15px"}}>Confirm</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditFlightLesson