import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import CulturalList from '../components/culturallist'

function Home() {
  return (
    <div>
      <Navbar />
      <CulturalList/>
      <Footer/>
    </div>
  )
}

export default Home
