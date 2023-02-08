import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InstructorCard from './InstructorCard';

function AirportDetails() {

    const { id } = useParams()
    const [airportDetails, setAirportDetails] = useState([])
    const [loading, setLoading] = useState(true);

    // const instructors = airportDetails.instructors

    useEffect(() => {
        fetch(`/airports/${id}`)
        .then((r) => r.json()
        .then((airportData) => {
            setAirportDetails(airportData)}))
            setLoading(false)
        }, [])
        
        // console.log(airportDetails)
        // console.log(instructors)

        // const instructorCard = instructors.map((instructor) => {
        //     return (
        //         <InstructorCard 
        //             key={instructor.id}
        //             id={instructor.id}
        //             name={instructor.full_name}
        //         />
        //     )
        // })
        let instructors;
        
        // loading ? null : instructors = airportDetails.instructors
        
        // loading ? null : instructors.map((instructor) => {
        //     return (
        //         <InstructorCard 
        //             key={instructor.id}
        //             id={instructor.id}
        //             name={instructor.full_name}
        //             age={instructor.age}
        //         />
        //     )
        // })

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
          )
    }
  
  
    return (
    <div className='homepage'>
        {/* <h1 className='homepage_title'>{airportDetails.name}</h1> */}
        <div >
            <div>
                {/* <img className='airport_image' src={airportDetails.image}/> */}
            </div>
            <div>
                <div>
                    <h1>Meet Our Instructors!</h1>
                </div>
                <div>
                    <InstructorCard loading={loading} instructors={airportDetails.instructors}/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default AirportDetails