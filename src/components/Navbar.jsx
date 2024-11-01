import React, { useRef,useEffect } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import bell_icon from '../assets/bell_icon.svg'
import caret_icon from '../assets/caret_icon.svg'
import { logout } from '../firebase'
import { Link } from 'react-router-dom'






const Navbar = () => {

  const navRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }

    })
  
  }, [])
  


  return (
    <div ref={navRef} className='navbar'>
      <div className='navbar-left'>
        <img src={logo} alt="" />
        <ul>
        <li>Home</li>
        <li>Tv Shows</li>
        <li>Movies</li>
        <li>New & Populer</li>
        <li>My List</li>
        <li>Browse By Language</li>        
        </ul>
      </div>
      <div className='navbar-right'>
        <img src={search_icon} className='icons' alt="" />
        <p>Children</p>
        <img src={bell_icon} className='icons' alt="" />
        <div className="navbar-profile">
        <button className="btn btn-outline">Logout</button>
        <img src={caret_icon} className='icons' alt="" />
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Logout</p>
        </div>



        </div>

      </div>

    </div>
  )
}

export default Navbar