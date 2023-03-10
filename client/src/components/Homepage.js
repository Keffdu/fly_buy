import React from 'react'
import { UserContext } from "../context/user";
import { useContext } from 'react';
import { Link } from 'react-router-dom';


function Homepage() {

    const { user } = useContext(UserContext)
    const flights = user.flight_lessons

   const upcomingFlights = flights.filter((fl) => {
    return (
    fl.completed === false)})

  return (
    <div className='homepage'>
        <h1 className='homepage_title' >Welcome Back, {user.first_name}!</h1>
        <div className='upper_content'>
            <div className='content_div'>
                <div  className='inner_content'>
                    {upcomingFlights.length > 0 ? <><p>{user.first_name}, you have {upcomingFlights.length} upcoming flights booked.</p>
                    <Link to='/flights'><button className='content_button'>View Flights</button></Link></>
                    : <><p>{user.first_name}, you currently have no flights  scheduled. Let's get you flying!</p>
                    <Link to='/airports'><button className='content_button'>Schedule Flights</button></Link></>}
                </div>
            </div>
            <div className='content_div'>
                <div  className='inner_content'>
                    <p>You’ve flown a total of {user.flight_hours} hours so far, only {user.flight_hours_left} hours left to go!</p>
                    <Link to='/airports'><button className='content_button'>Schedule Flights</button></Link>
                </div>
            </div>
        </div>
        <div className='lower_content'>
            <div className='discover_airport_div'>
                <h2 className='discover_airport_title'>Discover Airports</h2>
                <Link className='discover_link' to='airports'><button className='discover_button'>Go</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Homepage