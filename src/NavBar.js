import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  const ACTIVE_STYLE = {
    fontWeight: 'bold'
  }

  const routes = [
    {
      path: "/",
      exact: true,
      title: "Home"
    },
    {
      path: "/about",
      exact: false,
      title: "About"
    },
    {
      path: "/calculator",
      exact: false,
      title: "Calculator"
    }
  ]

  return (
    <nav>
      <ul>
        { routes.map((route, index) => (
          <li>
            <NavLink key={index} to={route.path} exact={route.exact} activeStyle={ACTIVE_STYLE}>
              { route.title }
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar