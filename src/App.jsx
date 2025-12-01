import React, { useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import AICapabilities from './components/AICapabilities'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <Loading onComplete={handleLoadingComplete} />
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Features />
      <AICapabilities />
      <Contact />
    </div>
  )
}

export default App

