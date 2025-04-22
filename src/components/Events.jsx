import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import EventList from './EventList'
import { fetchEvents } from '../../axios'
import { useEffect, useState } from 'react'

function Events() {
    const [events, setEvents] = useState([])
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const title = 'Events in Manchester'
    
        useEffect(() => {
            fetchEvents()
              .then((data) => {
                setEvents(data);
                setLoading(false);
              })
              .catch((err) => {
                setError("Failed to load events");
                setLoading(false);
                console.error(err);
              });
          }, []);
        
          if (loading) return <p>Loading events...</p>;
          if (error) return <p>{error}</p>;

 
  return (
    <>
    <NavBar />
        <div>
            <EventList title= {title} events= {events}/>
        </div>
        <Footer />
    </>
   
  )
}

export default Events