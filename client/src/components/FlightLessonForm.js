import React from 'react'
import { useParams, useHistory} from 'react-router-dom';
import { useState, useEffect, useContext  } from 'react';
import { UserContext } from '../context/user';
import Alert from '@mui/material/Alert';


function FlightLessonForm() {

    const { id } = useParams()
    const { user } = useContext(UserContext);
    let history = useHistory()
    const[errors, setErrors] = useState(null)
    const [lessonData, setLessonData] = useState(null)
    const [formData, setFormData] = useState({
        date: "",
        start_time: "08:00",
        end_time: "10:00",



    })

    useEffect(() => {
        fetch(`/aircrafts/${id}`)
        .then((r) => r.json()
        .then((lessonInfo) => {
            setLessonData(lessonInfo)}))
        }, [])

        function handleChange(e) {
            const name = e.target.name
            const value = e.target.value
            setFormData({ ...formData, [name]: value })
        }

        function handleSubmit(e) {
            e.preventDefault()
            setErrors([])
            const flightLesson = {
                date: formData.date,
                start_time: formData.start_time,
                end_time: formData.end_time,
                airport: lessonData.airport.name,
                user_id: user.id,
                aircraft_id: lessonData.id,
            }
            console.log(flightLesson)
            fetch('/flight_lessons', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(flightLesson),
            }).then((r) => {
                if (r.ok) {
                    r.json().then(() => {
                        alert("Your flight has been successfully booked!")
                        history.push("/")})
                } else {
                    r.json().then((err) => (setErrors(err.errors)))
                }
            })
            setFormData({
                date: "",
                start_time: "08:00",
                end_time: "10:00",
            })
        }

        function cancelLesson() {
            history.push(`/airports/`)
        }

    if (!lessonData) {
        return(
            <div className='homepage'>
                <h2>Loading...</h2>
            </div>
        )
    } else {
        console.log(lessonData)
  return (
    <div className='flight_lesson_homepage'>
        <div className='fl_title'>
            <h1 className='fl_title'>Flight Lesson</h1>
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
                    <p className='form_font'>{lessonData.airport.name}</p>
                </div>
                <div className='input_div'>
                    <div style={{paddingBottom: "5px"}}>
                    <label className='form_font'>Aircraft: </label>
                    </div>
                    <p className='form_font'>{lessonData.full_plane_name}</p>
                </div>
                <div className='input_div'>
                    <div style={{paddingBottom: "5px"}}>
                    <label className='form_font'>Instructor: </label>
                    </div>
                    <p className='form_font'>{lessonData.instructor.full_name}</p>
                </div>
                <div className='input_div'>
                    <div style={{paddingBottom: "5px"}}>
                        <label className='form_font'>Select Date: </label>
                    </div>
                    <input 
                        type='date'
                        name='date'
                        onChange={handleChange}
                        value={formData.date}
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
                        name='start_time'
                        onChange={handleChange}
                        value={formData.start_time}
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
                        name='end_time'
                        onChange={handleChange}
                        value={formData.end_time}
                    />
                </div>
                <div className='input_div'>
                    <div style={{paddingBottom: "5px"}}>
                    <label className='form_font'>Hourly Rate: </label>
                    </div>
                    <p className='form_font'>${lessonData.hourly_rate}/hour</p>
                </div>
                <div className='input_div'>
                    <div style={{paddingBottom: "5px"}}>
                    <label className='form_font'>Estimated Cost: </label>
                    </div>
                    <p className='form_font'>${(parseInt(formData.end_time) - parseInt(formData.start_time)) * lessonData.hourly_rate}</p>
                </div>
                <div className='button_div'>
                    <button type='button' onClick={cancelLesson} style={{ width: "100px", fontSize: "1.3rem", marginBottom: "15px"}}>Cancel</button>
                    <button type="submit" style={{ width: "100px", fontSize: "1.3rem", marginBottom: "15px"}}>Confirm</button>
                </div>
            </form>
        </div>
    </div>
  )}
}

export default FlightLessonForm