import React from 'react'
import './masterlogin.module.css'
import { Outlet } from 'react-router-dom'
const MasterLogin = () => {
  return (
    <div >
       <Outlet/>
    </div>
  )
}

export default MasterLogin