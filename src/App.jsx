import { useState, useEffect } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router'
import Events from './components/Events'
import EventDetails from './components/EventDetails'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import UserEvents from './components/UserEvents'
import StaffSignup from './components/StaffSignup'
import ManageEvents from './components/ManageEvents'

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } 
  }, [])

  return (
    <>
    <NavBar user={user} setUser={setUser}/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/event/:id" element={<EventDetails user={user} />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/staffsignup' element={<StaffSignup />} />
      <Route path='/login' element={<Login setUser={setUser}/>} />
      <Route path='/userevents' element={<UserEvents user={user} />} />
      <Route path='/manageevents' element={<ManageEvents user={user} />} />
    </Routes>
    </>
  )
}

export default App
