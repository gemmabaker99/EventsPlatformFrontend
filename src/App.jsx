import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import { Route, Routes } from 'react-router'
import Events from './components/Events'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/events" element={<Events />} />
    </Routes>
    </>
  )
}

export default App
