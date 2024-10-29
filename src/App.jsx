import Home from './pages/Home'
import './App.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import Player from './pages/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const nav = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log('logged in')
        nav('/')
      } else {
        console.log('logged out')
        nav('/auth')


      }
    })

  }, [])

  return (
    <>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />

      </Routes>
    </>
  )
}

export default App
