import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InstructorCard from './InstructorCard';
import AircraftCard from './AircraftCard'

function AirportDetails({ getData }) {

    const { id } = useParams()
    const [airportDetails, setAirportDetails] = useState(null)

    // const instructors = airportDetails.instructors

    useEffect(() => {
        fetch(`/airports/${id}`)
        .then((r) => r.json()
        .then((airportData) => {
            setAirportDetails(airportData)}))
        }, [])

        // console.log(airportDetails)

    if (!airportDetails) {
        return(
            <div>
                <h2>Loading...</h2>
            </div>
        )
    } else {
        const instructors = airportDetails.instructors.map((instructor) => {
            return (
                <InstructorCard 
                    key={instructor.id}
                    instructor={instructor}
                />
            )
        })
        const aircrafts = airportDetails.aircrafts.map((aircraft) => {
            return (
                <AircraftCard
                    key={aircraft.id}
                    aircraft={aircraft}
                    airport={airportDetails}
                    getData={getData}
                />
            )
        })
    return (
    <div className='airport_homepage'>
        <h1 className='homepage_title'>{airportDetails.name}</h1>
        <div className='airport_upper-cont'>
            <div className='airport_upper_left'>
                <img className='airport_detail_image' src={airportDetails.image}/>
            </div>
            <div className='airport_upper_right'>
                <div>
                    <h1 className='meet_instructors'>Meet Our Instructors!</h1>
                </div>
                <div className='instructor_container'>
                    {instructors}
                </div>
            </div>
        </div>
        <div className='aircraft_container'>
            <h1 className='homepage_title'>Explore Our Aircraft</h1>
            {aircrafts}
        </div>
    </div>
  )}
}

export default AirportDetails