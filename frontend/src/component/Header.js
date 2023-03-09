import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <header className='header'>
        <div className='logo'>
          GoalBuddy
        </div>
        <div className='navbar'>
          <div>
            <Link className='link' to='/dashboard'>Dashboard</Link>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header