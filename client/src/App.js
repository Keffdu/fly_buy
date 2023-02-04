// import Yogi from './Yogi.jpeg'
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'
import {Form, Button, Container } from 'react-bootstrap'



function App() {
  
  let history = useHistory()
  const[user, setUser] = useState([])
  const[errors, setErrors]=useState([])
  const[loginObj, setLoginObj] = useState({
      username: "",
      password: ""
  })

console.log(user)
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((userInfo) => {
          setUser(userInfo)});
      } else {
        r.json().then((err) => console.log(err))
      }
    });
  }, [])

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setLoginObj({...loginObj, [name]: value})
} 

    // function handleSubmit(e) {
    //   fetch("/flight_lessons")
    //   .then((res) => res.json())
    //   .then((fl) => console.log(fl))
    // }

    function handleSubmit(e) {
      e.preventDefault()
      setErrors([])
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginObj),
      }).then((res) => {
        if (res.ok) {
          res.json().then((user) => setUser(user))
        } else {
            res.json().then((err) => console.log(err.errors))
        }
      })
    }

  return (
    <div className="App">
       <Container fluid="sm" style={{ width: '18rem' }}>
    {errors.map((e) => 
        <Alert variant='danger' key={e}>{e}</Alert>)}
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control 
                onChange={handleChange}
                value={loginObj.username}
                type='text'
                name="username" 
                placeholder="Enter username" />
                <Form.Text className="text-muted">
                    {/* We'll never share your email with anyone else. */}
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                onChange={handleChange}
                value={loginObj.password}
                type="password" 
                name="password"
                placeholder="Password" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
    <div className="testing">
    {user.first_name ? <h2 className="testing">Hello {user.full_name}.</h2> : null}
    <img className="testing" width="400" src={user.image} />
    </div>
    </div>
  );
}

export default App;