import React, { useContext, useState } from 'react'
import './Landing.module.css'
import { MYCONTEXT } from '../Context'
import InterFace from '../InterFace/InterFace'
import Explore from '../EXPLORE/Explore'
import RELEASE from '../RELEASE/RELEASE'
import Featured from '../Featured/Featured'
import AllBooks from '../ALL_Books/AllBooks'
import SUbSCripe from '../Subscripe/SUbSCripe'
import Leatest from '../Leatest/Leatest'
import Footer from './Footer/Footer'
const Landing = () => {

  return (
    <div>
      <InterFace/>
    
     <Explore/>
      <RELEASE/>
      <Featured/>
    <AllBooks/>
      <SUbSCripe/>
   <Leatest/>
   
      <Footer/>
       


      
    </div>
  )
}

export default Landing