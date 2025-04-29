import React from 'react'
import './authproject.css'
import { Outlet } from 'react-router-dom'
import TopNav from '../NAVS/TopNav'
import Down_Navs from '../NAVS/Down_Navs'
import Footer from '../Landing/Footer/Footer'

const AuthProject = () => {
  return (
    <div>
      <TopNav/>
      <Down_Navs/>
      <Outlet/>
      {/* <Footer/> */}

    </div>
  )
}

export default AuthProject