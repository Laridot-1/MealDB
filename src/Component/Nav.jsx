import React from 'react'
import { FaBars, FaTimes, FaHome } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import { useGlobalContext } from '../Context'

const Nav = () => {
  const { toggleSidebar, isSidebarOpen } = useGlobalContext()
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <div>
        {
          pathname === "/" &&
          <button onClick={toggleSidebar} className="btn toggle">
            {isSidebarOpen ? <FaTimes className="times" /> : <FaBars />}
          </button>
        }
        <Link to="/">
          <h1 className="logo">TheMealDB</h1>
        </Link>
      </div>
      <div>
        {
          pathname !== "/" &&
          <Link to="/">
            <FaHome className="back" />
          </Link>
        }
      </div>
    </nav >
  )
}

export default Nav
