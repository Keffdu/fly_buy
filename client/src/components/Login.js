import React from 'react'
import { useState, useContext } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import {Form} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'
import FlightLandSharpIcon from '@mui/icons-material/FlightLandSharp';
import { UserContext } from "../context/user";



function Login(){

    const { setUser } = useContext(UserContext)

    const[errors, setErrors] = useState(null)
    const[loginObj, setLoginObj] = useState({
        username: "",
        password: ""
    })

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setLoginObj({...loginObj, [name]: value})
    } 

function handleSubmit(e) {
    e.preventDefault()
    setErrors(null)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
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
        <h1 className='login_title'>Login</h1>
                    <div className='errors'>
                        {errors ? errors.map((e) => <Stack key={e} sx={{ width: '74%' }} spacing={4}>
                        <Alert variant="filled" severity="error" >{e}</Alert></Stack>) : null}
                    </div>
                <Form className='login_container' onSubmit={handleSubmit}>
                <div className='login_username'>
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username: </Form.Label>
                        <Form.Control 
                        style={{textAlign: "center"}}
                        onChange={handleChange}
                        value={loginObj.username}
                        type="text" 
                        name="username"
                        placeholder="Username" />
                    </Form.Group>
                    </div>
                    <div className='login_password'>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control 
                        style={{textAlign: "center"}}
                        onChange={handleChange}
                        value={loginObj.password}
                        type="password" 
                        name="password"
                        placeholder="Password" />
                    </Form.Group>
                    </div>
                    <div className='login_button' >
                    <Button variant="contained" color={errors ? "error" : "primary"} type="submit" startIcon={<FlightLandSharpIcon />}>
                    Login
                    </Button>
                    </div><br />
                    <span className='account_link'>Don't have an account? <Link to='signup'>Sign up!</Link></span>
                </Form>

    </div>
  )
}

export default Login