import { useState } from 'react'
import { Div } from 'atomize'
import './App.css'
import Footer from './components/Footer'
import Context from './components/Context'

const App = () => {
  return (
    <>
      <div className="h-full flex flex-col bg-[#d97760] justify-between">
        <Context/>
        <Footer />
      </div>
    </>
  )
}

export default App
