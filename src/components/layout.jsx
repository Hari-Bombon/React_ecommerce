import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/header'
const layout = () => {
  return (
   <>
   <Header />
   <Outlet />
   <Footer />
   </>

  )
}

export default layout