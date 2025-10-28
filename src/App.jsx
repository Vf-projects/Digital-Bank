import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Why from './components/Why'
import Articles from './components/Articles'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Why />
      <Articles />
      <Footer />
    </div>
  )
}

export default App