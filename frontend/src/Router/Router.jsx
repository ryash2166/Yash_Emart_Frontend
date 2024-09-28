import React from 'react'
import ScrollToTop from '../Components/ScrollToTop'
import Navbar1 from '../Components/Navbar'
import { Outlet } from 'react-router-dom'

const Router = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar1/>
      <Outlet/>
    </div>
  )
}

export default Router
