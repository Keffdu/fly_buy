import React from 'react'
import { UserContext } from "../context/user";
import { useContext } from 'react';
import { Box, Container } from '@mui/system';
import { Button, Grid, Paper } from '@mui/material';

function Homepage() {

    const { user } = useContext(UserContext)
    const flights = user.flight_lessons

   const completedFlights = flights.filter((fl) => {
    return (
    fl.completed === false)})

   console.log(completedFlights)

  return (
    <div className='homepage'>
        <h1 className='homepage_title' >Welcome Back, {user.first_name}!</h1>
        <div className='upper_content'>
            <div className='content_div'>
                <div  className='inner_content'>
                    <p>{user.first_name}, you have {user.flight_lessons.length} upcoming flights booked.</p>
                    <button className='content_button' onClick={(e) => console.log("viewing flights")}>View Flights</button>
                </div>
            </div>
            <div className='content_div'>
                <div  className='inner_content'>
                    <p>You’ve flown a total of {user.flight_hours} hours so far, only {user.flight_hours_left} hours left to go!</p>
                    <button className='content_button' onClick={(e) => console.log("scheduling flights")}>Schedule Flights</button>
                </div>
            </div>
        </div>
        <div className='lower_content'>
            <div className='discover_airport_div'>
                <h2>Discover Airports</h2>
                <button className='discover_button' onClick={(e) => console.log("going to airports")}>Go</button>
            </div>
        </div>
    </div>
  )
}

export default Homepage