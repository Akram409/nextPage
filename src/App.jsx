import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Component/Header'
import Footer from './Component/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
