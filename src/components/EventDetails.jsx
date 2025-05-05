import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { eventSignUp, fetchEventDetails, getCustomEventById } from '../../axios';
import Footer from './Footer'

function EventDetails({user}) {
  const { id } = useParams(); 
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [eventImage, setEventImage] = useState(null)

  useEffect(() => {
    if(id.match(/([a-z])\w+/gi)){
      fetchEventDetails(id)
      .then((data) => {
        setEventImage(data.event._embedded.events[0].images[0].url)
        setEvent(data.event._embedded.events[0]);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load event details, please refresh the page');
        setLoading(false);
      });
    }
    else {getCustomEventById(id).then((response)=> {
      setEvent(response.data.event)
      setLoading(false)
    })}
   
  }, [id]);

  if (loading) return <p className="text-center mt-10 text-lg">Loading event details...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  const {
    name,
    info,
    pleaseNote,
    dates,
    classifications,
    _embedded
  } = event;

  const venue = _embedded?.venues?.[0] || 'tbc'
  const date = new Date(event.dates?.start?.localDate || event.date).toLocaleDateString('en-GB')
  const time = dates?.start?.localTime || 'tbc'
  const genre = classifications?.[0]?.genre?.name

  function handleSignUp (clickedEvent) {
      eventSignUp(user.id, clickedEvent).then((response)=> {
        alert(`Sign up successful, you're going to ${event.name}`)
      }).catch((err)=> {
        console.error('Signup failed:', err)
        if (err.response && err.response.status === 409) {
          alert("You're already signed up for this event.");
        } else {
          alert('Something went wrong. Please try again later.');
        }
      })
  }



  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-xl" >
      <h1 className="text-3xl font-bold text-center mb-6">{name}</h1>

      {eventImage && (
        <div className="mb-6">
          <img
            src={eventImage}
            alt={name}
            className="w-full max-h-[500px] object-cover rounded-lg shadow-md"
          />
        </div>
      )}

        <div className="space-y-4 text-gray-800 text-base">
        {genre && <p><span className="font-semibold">Genre:</span> {genre}</p>}
        {date && <p><span className="font-semibold">Date:</span> {date}</p>}
        {time && <p><span className="font-semibold">Time:</span> {time}</p>}
        {venue && (
          <p>
            <span className="font-semibold">Venue:</span> {venue.name}
            {venue.city?.name && `, ${venue.city.name}`}
          </p>
        )}
        {pleaseNote && (
          <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4 rounded">
            <p className="font-semibold">Please Note:</p>
            <p>{pleaseNote}</p>
          </div>
        )}
        {info && (
          <div>
            <h2 className="text-xl font-semibold mt-6 mb-2">About the Event</h2>
            <p className="leading-relaxed">{info}</p>
          </div>
        )}
        {user && 
          <button className='bg-emerald-500 hover:bg-emerald-950 text-white py-2 px-4 rounded' onClick={() => handleSignUp(event)}>Sign Up</button>
        }
 
        </div>

    </div>
    < Footer />
    </>
  );
}

export default EventDetails;
