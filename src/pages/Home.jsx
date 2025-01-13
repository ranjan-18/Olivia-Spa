import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Location from './Location'
import Services from './Services'
import About from './About'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
    <Header/>
    <Location/>
    <Services/>
    <About/>
    <Footer/>
    </>
  )
}

export default Home