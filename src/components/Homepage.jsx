import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import EventList from './EventList'
import Footer from './Footer'

function Homepage() {
  return (
  <>
  <NavBar />
  <Banner />
  <section className='bg-gray-100 py-6'>
    <EventList />
  </section>
  <Footer />
  </>
  )
}

export default Homepage