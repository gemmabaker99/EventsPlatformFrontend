import React, { useState } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import EventList from './EventList'
import Footer from './Footer'
import { fetchEvents } from '../../axios'
import { useEffect} from 'react'

function Homepage() {

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const title = 'Trending Local Events'

    useEffect(() => {
        fetchEvents()
          .then((data) => {
            console.log(data)
            setEvents(data);
            setLoading(false);
          })
          .catch((err) => {
            setError("Failed to load events");
            setLoading(false);
            console.error(err);
          });
      }, []);

    

  return (
  <>
  <NavBar />
  <Banner />
  {loading && <p>Loading events...</p>}
  {error && <p>{error}</p>}
  <section className='bg-gray-100 py-6'>
    <EventList title={title} events={events}/>
  </section>
  <Footer />
  </>
  )
}

export default Homepage