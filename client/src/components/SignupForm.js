import React from 'react'
import Container from 'react-bootstrap/Container';
import { useState, useContext } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Form } from 'react-bootstrap'

import Button from '@mui/material/Button'
import FlightLandSharpIcon from '@mui/icons-material/FlightLandSharp';
import { UserContext } from "../context/user";
import { Switch, Route } from 'react-router-dom'

function SignupForm() {

    const { user, setUser } = useContext(UserContext)
    const [errors, setErrors] = useState(null)
    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        gender: "",
        phone_number: "",
        email: "",
        age: "",
        image: "",
        flight_hours: ""
    })

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setUserData({ ...userData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setErrors(null)
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        }).then((res) => {
            if (res.ok) {
                res.json().then((userInfo) => setUser(userInfo))
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }




    return (
      <div className='login_page'>

          <h1 className='login_title'>Sign Up</h1>
          <Form className='login_container' onSubmit={handleSubmit}>
          {/* <div className='errors'> */}
              {errors ? errors.map((e) => 
                  <Alert variant="filled" severity="error" >{e}</Alert>) : null}
          {/* </div> */}
              <div className='login_password'>
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
                      <Form.Label>First Name: </Form.Label>
                      <Form.Control
                          onChange={handleChange}
                          value={userData.first_name}
                          type="text"
                          name="first_name"
                          placeholder="First Name" />
                  </Form.Group>
              </div>
              <div className='login_password'>
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                      <Form.Label>Last Name: </Form.Label>
                      <Form.Control
                          onChange={handleChange}
                          value={userData.last_name}
                          type="text"
                          name="last_name"
                          placeholder="Last Name" />
                  </Form.Group>
              </div>
              <div className='login_password'>
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Label>Username: </Form.Label>
                      <Form.Control
                          onChange={handleChange}
                          value={userData.username}
                          type="text"
                          name="username"
                          placeholder="Username" />
                  </Form.Group>
              </div>
              <div className='login_password'>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password: </Form.Label>
                      <Form.Control
                          onChange={handleChange}
                          value={userData.password}
                          type="password"
                          name="password"
                          placeholder="Password" />
                  </Form.Group>
              </div>
{/* <Container style={{ width: '18rem' }}>
      {errors.map((e) => 
        <Alert variant='danger' key={e}>{e}</Alert>)}
         <Form onSubmit={handleSubmit}>     
             <Form.Group className="mb-3">
                 <Form.Label>Username: </Form.Label>
            <Form.Control 
                onChange={handleChange}
                placeholder="Ex: johndoe.." 
                type="text" 
                name="user_name" 
                value={userData.user_name}
            />            
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Password: </Form.Label>
            <Form.Control 
                onChange={handleChange} 
                type="password"
                id="inputPassword5"
                // aria-describedby="passwordHelpBlock" 
                name="password" 
                value={userData.password}
            />            
            <Form.Text id="passwordHelpBlock" muted>
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Confirm Password: </Form.Label>
            <Form.Control 
                onChange={handleChange} 
                type="password"
                // id="inputPassword5"
                aria-describedby="passwordHelpBlock" 
                name="password_confirmation" 
                value={userData.password_confirmation}
            />            
            <Form.Text id="passwordHelpBlock" muted>
                Please confirm your password
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Name</Form.Label>
            <Form.Control 
                onChange={handleChange} 
                placeholder="Ex: John Doe"
                type="text" 
                name="name"
                value={userData.name} 
            />            
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
                onChange={handleChange} 
                name="phone_number" 
                placeholder="123456789" 
                value={userData.phone_number}
                />
            </Form.Group>
            
            <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            onChange={handleChange} 
            name="email" 
            type="email" 
            placeholder="name@example.com"
            value={userData.email}
             />
            
            </Form.Group> */}

            {/* <Form.Group className="mb-3">
            <Form.Label>Notes</Form.Label>
            <Form.Control 
            value={userData.notes} 
            as="textarea" rows={3} 
            onChange={handleChange} 
            name="notes"/>
            </Form.Group> */}

            {/* <Form.Group className="mb-3">
                <Form.Label> Upload a Photo</Form.Label>
                <Form.Control 
                placeholder='Insert URL'
                    type="text"
                    onChange={handleChange}
                    name="image"
                    value={userData.image}
                />           
            </Form.Group>
            <div className="mb-3 d-grid gap-2">
        <Button type="submit" size="lg"> Signup </Button>
            </div> */}
            
              <div className='login_button' >
                  <Button variant="contained" color={errors ? "error" : "primary"} type="submit" startIcon={<FlightLandSharpIcon />}>
                      Login
                  </Button>
              </div>
        {/* </Form>
    </Container> */}
        </Form >

    </div >
  )
}

export default SignupForm