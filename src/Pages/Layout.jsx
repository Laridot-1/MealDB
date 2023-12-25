import React from 'react'
import Nav from "../Component/Nav"
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from "../Component/Sidebar"

const Layout = () => {
  const { pathname } = useLocation()

  return (
    <div className="container">
      <Nav />
      <div className="body">
        {pathname === "/" && <Sidebar />}
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
