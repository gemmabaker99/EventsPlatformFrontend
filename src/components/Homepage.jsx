import React, { useState, useEffect } from 'react'
import Banner from './Banner'
import EventList from './EventList'
import Footer from './Footer'
import { fetchEvents, getAllCustomEvents } from '../../axios'

function Homepage() {

    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const title = 'Trending Events'

    useEffect(() => {
      Promise.all([
        fetchEvents(),
        getAllCustomEvents()
      ]).then(([ticketmasterEvents, customEvents ])=> {
      const combined = [...customEvents, ...ticketmasterEvents];
      setEvents(combined);
      setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching events:', err);
        setError("Sorry, we couldn't load events at the moment. Please refresh the page or try again later.");
        setLoading(false);
      });
      }, []);

    

  return (
  <>
  <Banner />
  <section className="bg-gray-100 py-6">
        {loading && <p className="text-center text-lg">Loading events...</p>}

        {!loading && error && (
          <p className="text-center text-red-500 text-lg">{error}</p>
        )}

        {!loading && !error && events.length > 0 && (
          <EventList title={title} events={events} />
        )}

        {!loading && !error && events.length === 0 && (
          <p className="text-center text-gray-700">No events found.</p>
        )}
      </section>
  <Footer />
  </>
  )
}

export default Homepage