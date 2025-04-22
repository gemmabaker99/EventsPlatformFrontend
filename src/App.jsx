import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router'
import Events from './components/Events'
import EventDetails from './components/EventDetails'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/events" element={<Events />} />
      <Route path="/event/:id" element={<EventDetails />} />
    </Routes>
    </>
  )
}

export default App
