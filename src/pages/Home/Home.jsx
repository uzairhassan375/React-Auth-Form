import React from 'react'
import Nav from '../../components/Nav/Nav'
import BottomNavbar from '../../components/bottomnavbar/bottomnavbar'

const Home = () => {
  return (
    <div>
        <Nav />
        <h1 className="text-[160px] font-bold">React Project</h1>
        <BottomNavbar />
    </div>
  )
}

export default Home
