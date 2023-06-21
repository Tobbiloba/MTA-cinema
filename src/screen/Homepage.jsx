import React from 'react'
import Menu from '../components/Menu'
import Slider from '../components/Slider'
import ComingSoon from '../components/ComingSoon'
import PlayingNow from '../components/PlayingNow'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className="w-[100vw] overflow-x-hidden">
      <Menu />
      <Slider />
      <PlayingNow />
      <ComingSoon />
      <Footer />
    </div>
  )
}

export default Homepage
