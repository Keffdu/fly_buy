import React from 'react'
import { UserContext } from "../context/user";
import { useContext } from 'react';
import { Box, Container } from '@mui/system';
import { Grid, Paper } from '@mui/material';

function Homepage() {

    const { user } = useContext(UserContext)
    console.log(user.flight_lessons.count)

  return (
    <div className='homepage'>
        <h1 className='homepage_title' >Welcome Back, {user.first_name}!</h1>
        <div className='upper_content'>
            <div className='content_div'>
                <p>{user.first_name}, you have {user.flight_lessons.length} upcoming flights booked.</p>
                <button></button>
            </div>
            <div className='content_div'>testing </div>
        </div>
    </div>
  )
}

export default Homepage