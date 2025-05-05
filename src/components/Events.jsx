import React from 'react'
import Footer from './Footer'
import EventList from './EventList'
import { fetchEvents } from '../../axios'
import { useEffect, useState } from 'react'

function Events() {
    const [events, setEvents] = useState([])
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
        const [city, setCity] = useState('Manchester')
        const [search, setSearch] =useState(false)
        
    
        useEffect(() => {
            fetchEvents(city)
              .then((data) => {
                setEvents(data);
                setLoading(false);
                setSearch(false)
              })
              .catch((err) => {
                setError("Failed to load events");
                setLoading(false);
                console.error(err);
              });
          }, [city]);
        

          function handleCityChange (e) {
            setCity(e.target.value);
          };

          function handleSearch (e) {
            e.preventDefault()
            setCity(city)
            setSearch(true)
          };
 
  return (
    <>
    <form onSubmit={handleSearch}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Enter city"
          className="p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p className="p-4">Loading events...</p>}

{!loading && error && <p className="p-4 text-red-500">{error}</p>}

{!loading && !error && events.length > 0 && (
  <div className="p-4">
    <EventList title={`Events in ${city}`} events={events} />
  </div>
)}

{!loading && !error && events.length === 0 && (
  <div> 
    <p className='text-red-500'>Please search for a valid city</p>
  </div>
)}
        <Footer />
    </>
   
  )
}

export default Events