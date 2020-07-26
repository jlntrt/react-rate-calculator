import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  const ACTIVE_STYLE = {
    fontWeight: 'bold'
  }

  return (
    <nav>
      <ul>
        <NavLink to='/'activeStyle={ACTIVE_STYLE} exact>
          <li>Home</li>
        </NavLink>
        <NavLink to='/calculator' activeStyle={ACTIVE_STYLE}>
          <li>Calculator</li>
        </NavLink>
        <NavLink to='/about' activeStyle={ACTIVE_STYLE}>
          <li>About</li>
        </NavLink>
      </ul>
    </nav>
  )
}

export default NavBar