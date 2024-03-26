import { useState } from 'react'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div className = "wrapper-main">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>

  )
}

