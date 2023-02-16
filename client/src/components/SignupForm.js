import React from 'react'
import { useState, useContext } from 'react';
import Alert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-bootstrap'
import Input from 'react-phone-number-input/input'
import Button from '@mui/material/Button'
import FlightTakeoffSharpIcon from '@mui/icons-material/FlightTakeoffSharp';
import { UserContext } from "../context/user";


function SignupForm() {

    const history = useHistory()

    const { setUser } = useContext(UserContext)
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
                res.json().then((userData) => {
                    setUser(userData)})
                    history.push('/')
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }

    const ageTextBox = {
        height: "25px",
        width: "150px",
        textAlign: "center"
    }

    const textBox = {
        height: "25px",
        width: "200px",
        textAlign: "center"
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
                      <Form.Label >First Name: </Form.Label>
                      <Form.Control
                          onChange={handleChange}
                          value={userInfo.first_name}
                          style={textBox}
                          type="text"
                          name="first_name"/>
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
                          name="last_name"/>
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
                          name="username"/>
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
                          name="password"/>
                  </Form.Group>
              </div>
                <div className='sign_up_password'>
                    <Form.Group className="mb-3">
                        <Form.Label>Gender: </Form.Label>
                        <Form.Select
                            onChange={handleChange}
                            style={textBox}
                            name='gender'
                            value={userInfo.gender}
                        >
                            <option>Choose Your Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                    </Form.Group>
                </div>
              <div className='sign_up_password'>
                  <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                      <Form.Label>Phone Number: </Form.Label>
                    <Input
                        country="US"
                        value={phone}
                        style={textBox}
                        name="phone_number"
                        onChange={setPhone}
                        />
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
                          name="email"/>
                  </Form.Group>
              </div>
              <div className='sign_up_password'>
                  <Form.Group  controlId="formBasicAge">
                      <Form.Label>Age: </Form.Label><br />
                      <Form.Control
                          onChange={handleChange}
                          value={userInfo.age}
                          type="number"
                          style={ageTextBox}
                          name="age"
                          min={0}
                          max={100}/>
                  </Form.Group>
              </div>
              <div className='sign_up_password'>
                  <Form.Group  controlId="formBasicFlightHours">
                      <Form.Label>Flight Hours: </Form.Label><br />
                      <Form.Control
                          onChange={handleChange}
                          value={userInfo.flight_hours}
                          type="number"
                          style={ageTextBox}
                          name="flight_hours"
                          min={0}
                          max={40}/>
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
              <div className='login_button' >
                  <Button variant="contained" color={errors ? "error" : "primary"} type="submit" startIcon={<FlightTakeoffSharpIcon fontSize="small"/>}>
                      Take off
                  </Button>
              </div>
        </Form >
    </div >
  )
}

export default SignupForm