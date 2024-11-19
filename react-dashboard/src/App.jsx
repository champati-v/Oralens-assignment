import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='max-w-screen mx-auto'>
      <Navbar />
      <Hero/>
    </div>
  )
}

export default App