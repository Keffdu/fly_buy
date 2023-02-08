import React from 'react'

function InstructorCard({ loading, instructors }) {

console.log(instructors)

if (loading) {
    return (
        <div>
            <h1>Loading...</h1>
        </div>
    )
}
  
return (
    <div>
        {/* <h1>{instructors.full_name}</h1> */}
        testing!!!!
    </div>
  )
}

export default InstructorCard