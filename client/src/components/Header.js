import React from 'react'
import { Link } from 'react-router-dom';

function Header(){

    return (
        <Link to='/'>
            <div className='header'>
                <h1 className='title'>Fly Buy</h1>
            </div>
        </Link>
  )
}

export default Header;