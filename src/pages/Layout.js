import React from 'react'

import { Outlet,Link } from 'react-router-dom'
import "../App.css"
function Layout() {
  return (
    <>
    <nav>
      <h2>LinuxGeekForGeeks</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li id='contact'>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
  )
}

export default Layout