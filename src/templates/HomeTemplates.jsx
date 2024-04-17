import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Backtotop from '../components/Backtotop'

const HomeTemplates = () => {
  
    
  
  return (

    <div>
      <Header />
      <div>
        <Outlet />

      </div>
      <Backtotop />
      <Footer />
     
    </div>
  )
}

export default HomeTemplates
