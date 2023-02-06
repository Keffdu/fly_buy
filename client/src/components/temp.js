<Box  className='login_container' onSubmit={handleSubmit} component='form'
sx={{
    '& > :not(style)': { m: 7, width: '35ch' },
    textAlign: 'center'
}}
noValidate
autoComplete="off"
>
    <TextField onChange={handleChange} value={loginObj.username} name="username" label="Username" variant="standard" type='text'/>
    {/* <InputLabel>Email address</InputLabel>
    <Input id="my-input" aria-describedby="my-helper-text" />
    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText> */}
    <TextField  onChange={handleChange} value={loginObj.password} name="password" label="Password" variant="standard" type='password'/>



{/* <Form.Group className='login_username mb-3' controlId="formBasicEmail">
<Form.Label>Username: </Form.Label>
<Form.Control 
onChange={handleChange}
value={loginObj.username}
type='text'
name="username" 
placeholder="Enter username" />
<Form.Text className="text-muted">

</Form.Text>
</Form.Group>
<div className='login_password'>
<Form.Group className="mb-3" controlId="formBasicPassword">
<Form.Label>Password: </Form.Label>
<Form.Control 
onChange={handleChange}
value={loginObj.password}
type="password" 
name="password"
placeholder="Password" />
</Form.Group>
</div> */}
<div className='login_button' >
<Button variant="contained" color={errors ? "error" : "primary"} type="submit" startIcon={<FlightLandSharpIcon />}>
Login
</Button>
</div>
<span>Don't have an account? Sign up!</span>
</Box>
