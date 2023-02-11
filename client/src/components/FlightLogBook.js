import React from 'react'
import { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import FlightLessonCard from './FlightLessonCard'

function FlightLogBook() {
    const { user } = useContext(UserContext)
    // const [currentLessons, setCurrentLessons] = useState([])
  
    
    console.log(user)
  
    // setCurrentLessons(user.flight_lessons)
  
    const upcomingFlights = user.flight_lessons.filter((fl) => {
     return (
     fl.completed === true)})
  
     const flightLessons = upcomingFlights.map((flight) => {
      return (
        <FlightLessonCard 
          key={flight.id}
          flightLesson={flight}
        />
      )
     })

     //add render if there are no completed flights
    return (
      <div className='airport_homepage'>
        <h1 className='homepage_title'>Flight Lessons</h1>
        <div className='flight_lesson_container'>
          {flightLessons}
        </div>
      </div>
    )
  }
  

export default FlightLogBook