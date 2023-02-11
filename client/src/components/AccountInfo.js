import React from 'react'
import { UserContext } from '../context/user'
import { useContext, useState } from 'react'

function AccountInfo() {

    const { user, setUser } = useContext(UserContext)
    const [ editAccount, setEditAccount ] = useState(false)
    const [ userUpdate, setUserUpdate ] = useState({
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name
    })

    function toggleEdit() {
        setEditAccount((editAccount) => !editAccount)
    }

    function cancelChanges() {
        setEditAccount((editAccount) => !editAccount)
    }

  return (
    <div className='airport_homepage'>
        <div className='fl_title'>
            <h1 className='fl_title'>{user.first_name}'s Account Details</h1>
        </div>
        <div className='deactivate_button_div'>
            <button className='deactivate_button'>Deactivate Account</button>
        </div>
        <div className='account_details_container'>
            <div className='profile_image'>
                <img className='user_image' src={user.image} />
            </div>
            <div className='account_details'>
                <form className='form'>
                <div className='account_buttons'>
                    {editAccount ? <div className='edit_buttons'><button type='button' onClick={cancelChanges}>Cancel</button><button type='button' onClick={""}>Save Changes</button></div> : <button type='button' onClick={toggleEdit}>Edit Details</button>}
                </div>
                <div className='account_div'>
                    <div>
                    <label className='form_font'>Username: </label>
                    </div>
                    {editAccount ? <input className='user_input' type="text" name='username' value={userUpdate.username}/> : <p className='form_font'>{user.username}</p>}
                </div>
                <div className='account_div'>
                    <div>
                    <label className='form_font'>First Name: </label>
                    </div>
                    {editAccount ? <input className='user_input' type="text" name='first_name' value={userUpdate.first_name}/> : <p className='form_font'>{user.first_name}</p>}
                </div>
                <div className='account_div'>
                    <div>
                    <label className='form_font'>Last Name: </label>
                    </div>
                    {editAccount ? <input className='user_input' type="text" name='last_name' value={userUpdate.last_name}/> : <p className='form_font'>{user.last_name}</p>}
                </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AccountInfo