import React from 'react'
import Container from 'react-bootstrap/Container';
import { useState, useContext } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { Form } from 'react-bootstrap'
import Input from 'react-phone-number-input/input'
import Button from '@mui/material/Button'
import FlightTakeoffSharpIcon from '@mui/icons-material/FlightTakeoffSharp';
import { UserContext } from "../context/user";
import { Switch, Route } from 'react-router-dom'

function SignupForm() {

    const { user, setUser } = useContext(UserContext)
    const [errors, setErrors] = useState(null)
    const [phone, setPhone] = useState()
    const [userInfo, setUserInfo] = useState({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        gender: "",
        email: "",
        age: "",
        image: "",
        flight_hours: ""
    })

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setUserInfo({ ...userInfo, [name]: value })
    }

    console.log(phone)
    function handleSubmit(e) {
        e.preventDefault()
        const userObj = {
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        username: userInfo.username,
        password: userInfo.password,
        gender: userInfo.gender,
        phone_number: phone,
        email: userInfo.email,
        age: userInfo.age,
        image: userInfo.image,
        flight_hours: userInfo.flight_hours
        }
        setErrors(null)
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userObj),
        }).then((res) => {
            if (res.ok) {
                res.json().then((userData) => setUser(userData))
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    const ageTextBox = {
        height: "25px",
        width: "50px"
    }

    const textBox = {
        height: "25px",
        width: "165px"
    }



    return (
      <div className='login_page'>

          <h1 className='login_title'>Sign Up</h1>
          <Form className='sign_up_container' onSubmit={handleSubmit}>
          <div className='sign_up_errors'>
              {errors ? errors.map((e) => 
                  <Alert severity="error" >{e}</Alert>) : null}
          </div>
              <div className='sign_up_password'>
                  <Form.Group className="mb-3" controlId="formBasicFirstName">
                      <Form.Label>First Name: </Form.Label>
                      <Form.Control
                          onChange={handleChange}
                          value={userInfo.first_name}
                          style={textBox}
                          type="text"
                          name="first_name"
                          placeholder="First Name" />
                  </Form.Group>
              </div>
              <div className='sign_up_password'>
                  <Form.Group className="mb-3" controlId="formBasicLastName">
                      <Form.Label>Last Name: </Form.Label>
                      <Form.Control
                          onChange={handleChange}
                          value={userInfo.last_name}
                          style={textBox}
                          type="text"
                          name="last_name"
                          placeholder="Last Name" />
                  </Form.Group>
              </div>
              <div className='sign_up_password'>
                  <Form.Group className="mb-3" controlId="formBasicUsername">
                      <Form.Label>Username: </Form.Label>
                      <Form.Control
                          onChange={handleChange}
                          value={userInfo.username}
                          style={textBox}
                          type="text"
                          name="username"
                          placeholder="Username" />
                  </Form.Group>
              </div>
              <div className='sign_up_password'>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password: </Form.Label>
                      <Form.Control
                          onChange={handleChange}
                          value={userInfo.password}
                          style={textBox}
                          type="password"
                          name="password"
                          placeholder="Password" />
                  </Form.Group>
              </div>
                <div className='sign_up_password'>
                    <Form.Group className="mb-3">
                        <Form.Label>Gender: </Form.Label>
                        <Form.Select
                            onChange={handleChange}
                            style={textBox}
                            placeholder='Select Gender...'
                            name='gender'
                            value={userInfo.gender}
                        >
                            <option>Choose Your Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>
                    </Form.Group>
                </div>
              <div className='sign_up_password'>
                  <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                      <Form.Label>Phone Number: </Form.Label>
                      {/* <Form.Control
                          onChange={handleChange}
                          value={userInfo.phone_number}
                          type="number"
                          name="phone_number"
                          placeholder="(111)111-1111" /> */}
                    <Input
                        country="US"
                        value={phone}
                        style={textBox}
                        name="phone_number"
                        onChange={setPhone} />
                        </Form.Group>
              </div>
              <div className='sign_up_password'>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email: </Form.Label>
                      <Form.Control
                          onChange={handleChange}
                          value={userInfo.email}
                          style={textBox}
                          type="text"
                          name="email"
                          placeholder="email@email.com" />
                  </Form.Group>
              </div>
              <div className='sign_up_password'>
                  <Form.Group  controlId="formBasicAge">
                      <Form.Label>Age: </Form.Label>
                      <Form.Control
                          onChange={handleChange}
                          value={userInfo.age}
                          type="number"
                          style={ageTextBox}
                          name="age"
                          min={0}
                          max={100}
                          placeholder="" />
                  </Form.Group>
              </div>
              <div className='sign_up_password'>
                  <Form.Group  controlId="formBasicFlightHours">
                      <Form.Label>Flight Hours: </Form.Label>
                      <Form.Control
                          onChange={handleChange}
                          value={userInfo.flight_hours}
                          type="number"
                          style={ageTextBox}
                          name="flight_hours"
                          min={0}
                          max={100}
                          placeholder="" />
                  </Form.Group>
              </div>
              <div className='sign_up_password'>
                  <Form.Group className="mb-3" controlId="formBasicImage">
                      <Form.Label>Image: </Form.Label>
                      <Form.Control
                          onChange={handleChange}
                          value={userInfo.image}
                          style={textBox}
                          type="text"
                          name="image"
                          placeholder="Image URL" />
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
                value={userInfo.user_name}
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
                value={userInfo.password}
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
                value={userInfo.password_confirmation}
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
                value={userInfo.name} 
            />            
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control 
                onChange={handleChange} 
                name="phone_number" 
                placeholder="123456789" 
                value={userInfo.phone_number}
                />
            </Form.Group>
            
            <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            onChange={handleChange} 
            name="email" 
            type="email" 
            placeholder="name@example.com"
            value={userInfo.email}
             />
            
            </Form.Group> */}

            {/* <Form.Group className="mb-3">
            <Form.Label>Notes</Form.Label>
            <Form.Control 
            value={userInfo.notes} 
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
                    value={userInfo.image}
                />           
            </Form.Group>
            <div className="mb-3 d-grid gap-2">
        <Button type="submit" size="lg"> Signup </Button>
            </div> */}
            
              <div className='login_button' >
                  <Button variant="contained" color={errors ? "error" : "primary"} type="submit" startIcon={<FlightTakeoffSharpIcon fontSize="small"/>}>
                      Take off
                  </Button>
              </div>
        {/* </Form>
    </Container> */}
        </Form >

    </div >
  )
}

export default SignupForm