import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
import { Button } from './components/ui/button'
import Header from './components/Header'
import Hero from './components/Hero'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'
import Info from './components/Info'
import Footer from './components/Footer'

const Home = () => {
  return (
    <div>
      
        {/* Header */ }
        <Header/>
        {/* Detail*/}
        <Hero/>
        {/* Category*/ }
        <Category/>
        {/* most searched car*/}
        <MostSearchedCar/>
        {/* Info Section */}
        <Info/>
        <Footer/>
        


    </div>
  )
}

export default Home
