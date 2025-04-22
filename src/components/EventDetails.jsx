import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchEventDetails } from '../../axios';

function EventDetails() {
  const { id } = useParams(); 
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [eventImage, setEventImage] = useState(null)

  useEffect(() => {
    fetchEventDetails(id)
      .then((data) => {
        console.log(data.event._embedded.events[0], "events data in event details")
        setEventImage(data.event._embedded.events[0].images[0].url)
        setEvent(data.event._embedded.events[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load event details');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div >
      <h1>{event.name}</h1>
      <img src={eventImage} alt={event.name} />
      <p>{event.info}</p>    
      {/* more event details here */}
    </div>
  );
}

export default EventDetails;
