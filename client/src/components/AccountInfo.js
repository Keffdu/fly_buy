import React from 'react'
import { UserContext } from '../context/user'
import { useContext, useState } from 'react'
import Alert from '@mui/material/Alert';
import { useHistory } from 'react-router-dom';

function AccountInfo() {

    const history = useHistory()
    const { user, setUser } = useContext(UserContext)
    const [ editAccount, setEditAccount ] = useState(false)
    const [ errors, setErrors ] = useState([])
    const [ userUpdate, setUserUpdate ] = useState({
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone_number: user.phone_number,
        flight_hours: user.flight_hours,
        image: user.image
    })

    function deactivateAccount() {
        setErrors([])
        fetch(`/users/${user.id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                setUser(null)
                 history.push("/")
            } else {
                r.json().then((err) => (setErrors(err.errors)))
            }
        })
    }

    function toggleEdit() {
        setEditAccount((editAccount) => !editAccount)
    }

    function cancelChanges() {
        setEditAccount((editAccount) => !editAccount)
        setErrors([])
        setUserUpdate({
            username: user.username,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            phone_number: user.phone_number,
            flight_hours: user.flight_hours,
            image: user.image
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        setErrors([])
        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userUpdate),
        }).then((r) => {
            if (r.ok) {
                r.json().then((updatedUser) => {
                    setEditAccount((editAccount) => !editAccount)
                    setUser(updatedUser)
                })
            } else {
                r.json().then((err) => (setErrors(err.errors)))
            }
        })
    }

    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value
        setUserUpdate({ ...userUpdate, [name]: value })
    }

  return (
    <div className='airport_homepage'>
        <div className='fl_title'>
            <h1 className='fl_title'>{user.first_name}'s Account Details</h1>
        </div>
        <div className='deactivate_button_div'>
            <button onClick={deactivateAccount} className='deactivate_button'>Deactivate Account</button>
        </div>
        <div className='account_details_container'>
            <div className='profile_image'>
                <img className='user_image' src={user.image} />
            </div>
            <div className='account_details'>
                <form onSubmit={handleSubmit} className='form'>
                <div className='account_buttons'>
                    {editAccount ? <div className='edit_buttons'><button type='button' onClick={cancelChanges}>Cancel</button><button type='submit' >Save Changes</button></div> : <button type='button' onClick={toggleEdit}>Edit Details</button>}
                </div>
                <div className='account_div'>
                    <div>
                    <label className='form_font'>Gender: </label>
                    </div>
                    <p className='form_font'>{user.gender}</p>
                </div>
                <div className='account_div'>
                    <div>
                    <label className='form_font'>Age: </label>
                    </div>
                    <p className='form_font'>{user.age}</p>
                </div>
                <div className='account_div'>
                    <div>
                    <label className='form_font'>Username: </label>
                    </div>
                    {editAccount ? <input onChange={handleChange} className='user_input' type="text" name='username' value={userUpdate.username}/> : <p className='form_font'>{user.username}</p>}
                </div>
                <div className='account_div'>
                    <div>
                    <label className='form_font'>First Name: </label>
                    </div>
                    {editAccount ? <input onChange={handleChange} className='user_input' type="text" name='first_name' value={userUpdate.first_name}/> : <p className='form_font'>{user.first_name}</p>}
                </div>
                <div className='account_div'>
                    <div>
                    <label className='form_font'>Last Name: </label>
                    </div>
                    {editAccount ? <input onChange={handleChange} className='user_input' type="text" name='last_name' value={userUpdate.last_name}/> : <p className='form_font'>{user.last_name}</p>}
                </div>
                <div className='account_div'>
                    <div>
                    <label className='form_font'>Email: </label>
                    </div>
                    {editAccount ? <input onChange={handleChange} className='user_input' type="text" name='email' value={userUpdate.email}/> : <p className='form_font'>{user.email}</p>}
                </div>
                <div className='account_div'>
                    <div>
                    <label className='form_font'>Phone Number: </label>
                    </div>
                    {editAccount ? <input onChange={handleChange} className='user_input' type="text" name='phone_number' value={userUpdate.phone_number}/> : <p className='form_font'>{user.phone_number}</p>}
                </div>
                <div className='account_div'>
                    <div>
                    <label className='form_font'>Flight Hours: </label>
                    </div>
                    {editAccount ? <input onChange={handleChange} className='user_input' type="number" name='flight_hours' value={userUpdate.flight_hours}/> : <p className='form_font'>{user.flight_hours}</p>}
                </div>
                {editAccount ? <div className='account_div'>
                    <div>
                    <label className='form_font'>Profile Image: </label>
                    </div>
                    <input onChange={handleChange} className='user_input' type="text" name='image' value={userUpdate.image}/>
                </div> : null}
                <div className='flight_lesson_errors'>
                    {errors ? errors.map((e) => 
                    <Alert style={{marginTop: "20px"}} key={e} severity="error" variant='filled'>{e}</Alert>) : null}
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AccountInfo