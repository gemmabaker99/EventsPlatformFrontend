import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router'
import Events from './components/Events'
import EventDetails from './components/EventDetails'
import Login from './components/Login'
import Signup from './components/Signup'
import { useEffect } from 'react'
import NavBar from './components/NavBar'

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
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login user={user} setUser={setUser}/>} />
    </Routes>
    </>
  )
}

export default App
