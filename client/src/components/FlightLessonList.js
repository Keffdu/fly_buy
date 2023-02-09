import React from 'react'
import { useContext, useState } from 'react'
import { UserContext } from '../context/user'
import FlightLessonCard from './FlightLessonCard'

function FlightLessonList() {

  const { user } = useContext(UserContext)
  const [currentLessons, setCurrentLessons] = useState([])

  
  console.log(user)

  setCurrentLessons(user.flight_lessons)

  const upcomingFlights = currentLessons.filter((fl) => {
   return (
   fl.completed === false)})

   const flightLessons = upcomingFlights.map((flight) => {
    return (
      <FlightLessonCard 
        key={flight.id}
        flight={flight}
        
      />
    )
   })


   //add render if there are no flight scheduled

  return (
    <div className='airport_homepage'>
      <h1 className='homepage_title'>Flight Lessons</h1>
      <div className='flight_lesson_container'>
        {flightLessons}
      </div>
    </div>
  )
}

export default FlightLessonList