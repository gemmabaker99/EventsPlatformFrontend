import { useEffect, useState } from 'react';
import { getUserEvents, removeUserEvent } from '../../axios';

function UserEvents({ user }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [forceRefresh, setForceRefresh] = useState(false)

  useEffect(() => {
    if(!user) return
    getUserEvents(user.id).then((response)=> {
        setEvents(response)
        setLoading(false)
        setForceRefresh(false)
    }) 
  },[user, forceRefresh])

  function handleCancel(eventId, userId) {
        removeUserEvent(eventId, userId).then((response)=> {
            alert('Cancelled Successfully')
            setForceRefresh(true)
        })
  }

  function formatDateForCalendar(dateStr, hoursToAdd = 0) {
    const date = new Date(dateStr)
    if (hoursToAdd) date.setHours(date.getHours() + hoursToAdd);
    return date.toISOString().replace(/[-:]|\.\d{3}/g, '');
  }


  function createCalendarUrl(event) {
    const start = formatDateForCalendar(event.event_date)
    const end = formatDateForCalendar(event.event_date, 2)
    const text = encodeURIComponent(event.event_name || 'My Event')
    const details= encodeURIComponent('Event booked via Eventify 🎉')
    const location = encodeURIComponent(event.event_location || 'Location TBC')

return `https://www.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${location}&sf=true&output=xml`;
  }



  if (loading) return <p className="text-center text-lg mt-10">Loading your events...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Your Signed Up Events</h2>
      {events.length === 0 ? (
        <p className="text-center text-gray-600">You haven't signed up for any events yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {events.map((event) => (
            <div
              key={event.event_id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-2">{event.event_name}</h3>
              <p className="text-gray-600 mb-1">
                📅 {new Date(event.event_date).toLocaleDateString('en-GB')}
              </p>
              <p className="text-gray-600">📍 {event.event_location || "Location TBC"}</p>
              <a
                href={createCalendarUrl(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline block mt-2 mb-4"
              >
                📆 Add to Google Calendar
              </a>

              <button
                onClick={() => handleCancel(event.event_id, user.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Cancel Attendance
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserEvents;
