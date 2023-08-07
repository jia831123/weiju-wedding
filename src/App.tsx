import { useState } from 'react'
import { Div } from 'atomize'
import './App.css'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="h-full flex flex-col bg-[#d97760] justify-between">
        <Div>context</Div>
        <Footer />
      </div>
    </>
  )
}

export default App
