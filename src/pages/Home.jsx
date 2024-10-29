import React from 'react'
import Navbar from '../components/Navbar'
import hero_banner from '../assets/hero_banner.jpg'
import hero_title from '../assets/hero_title.png'
import '../pages/Home.css'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Home = () => {
  return (
   <>

    <Navbar/> 
    <div className="hero">
      <img src={hero_banner} className='banner-img' alt="" />
      <div className="hero-caption">
        <img src={hero_title} alt="" className='caption-img'/>
        <p>Discovering His tries to secert ancient order, a 
          young man living on the streets of istambul embarks on a quest</p>
          <div className="hero-btn">
           <button className='btn'><img src={play_icon} alt="" />Play</button>
           <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>

          </div>
          <div className="title-cards">
          <Card />
          </div>
       
      </div>
    </div>
    <div className="more-cards">
    <Card title={"Blockbuster Movie"}/>
    <Card title={"Only On Netflix "}/>
    <Card title={"Upcoming"}/>
    <Card title={"Top pics for you"}/>
    </div>
    <Footer/>
    
   </>
  )
}

export default Home