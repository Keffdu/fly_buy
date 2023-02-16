import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

function InstructorCard({ instructor }) {



return (
    <div className='instructor_info'>
        <img className='instructor_image' src={instructor.image} />
        <h1 className='instructor_name'>{instructor.full_name}</h1>
        <h1 className='instructor_details'>Age: {instructor.age}</h1>
        <h1 className='instructor_details'>Flight Hours: {instructor.flight_hours}</h1>
        <h1 className='instructor_details'>Experience Level: {instructor.experience_level}</h1>
        <div className='icons'>
            <EmailIcon style={{paddingRight: "5px"}}/>
            <h1 className='instructor_details'>{instructor.email}</h1>
        </div>
        <div className='icons'>
            <CallIcon style={{paddingRight: "5px"}}/>
            <h1 className='instructor_details'>{instructor.phone_number}</h1>
        </div>
    </div>
  )
}

export default InstructorCard