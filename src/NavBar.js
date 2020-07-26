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
    },
    {
      path: "/advantages",
      exact: false,
      title: "Advantages"
    },
  ]

  return (
    <nav>
      <ul>
        { routes.map((route, index) => (
          <li key={index}>
            <NavLink to={route.path} exact={route.exact} activeStyle={ACTIVE_STYLE}>
              { route.title }
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar