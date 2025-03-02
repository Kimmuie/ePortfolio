import React from 'react'
import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'

const App = () => {
  return (
    <>
      <LoadingScreen></LoadingScreen>
    <div className="absolute w-full h-full bg-primeWhite">
      <Navbar></Navbar>
      <div className="flex items-start">Hi</div>
    </div>
    </>
  )
}

export default App