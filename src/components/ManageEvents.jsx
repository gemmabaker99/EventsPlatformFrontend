import { useEffect, useState } from "react";
import { deleteCustomEvent, getCustomEventsForStaff, postCustomEvent } from "../../axios";

const ManageEvents = ({user}) => {
  const [myEvents, setMyEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    location: "",
    description: "",
    created_by: "",
    role: "staff"
  });

  useEffect(() => {
    if (user?.id) {
     getCustomEventsForStaff(user.id).then((events)=> {
        setMyEvents(Array.isArray(events) ? events : [])
     })
    }
  }, [user]);

  function handleInputChange (e) {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };




  function handleAddEvent (e) {
    e.preventDefault();
    setLoading(true);
    const fullEvent = { ...newEvent, created_by: user.id };
    postCustomEvent(fullEvent)
      .then((res) => {
        setMyEvents((curr) => [...curr, res.data.event]);
        setNewEvent({
            name: "",
            date: "",
            location: "",
            description: "",
            created_by: user.id,
            role: "staff"
        });
        setLoading(false)
      })
      .catch((err) => console.log(err));
  };

  function handleDelete (eventId) {
    deleteCustomEvent(eventId)
      .then(() => {
        setMyEvents((curr) => curr.filter((e) => e.id !== eventId));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Manage Your Events</h2>

      <form className="bg-white shadow-md rounded-xl p-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleAddEvent}>
        <h3 className="text-xl font-semibold mb-2 col-span-full">Create New Event</h3>
        <input
          name="name"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={handleInputChange}
          required
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          name="date"
          type="date"
          value={newEvent.date}
          onChange={handleInputChange}
          required
          className="border border-gray-300 rounded-lg px-3 py-2"
        />
        <input
          name="location"
          placeholder="Location"
          value={newEvent.location}
          onChange={handleInputChange}
          required
        className= "border border-gray-300 rounded-lg px-3 py-2"
        />
        <div></div>
        <textarea
          name="description"
          placeholder="Description"
          value={newEvent.description}
          onChange={handleInputChange}
          className="border border-gray-300 rounded-lg px-3 py-2 col-span-full resize-none"
          rows={4}
        />
        <button
        className="col-span-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
         type="submit"
         disabled={loading}
        >
        {loading ? 'Adding...' : 'Add Event'}
        </button>      
        </form>

      <h3 className="text-xl font-semibold mb-2">Your Events</h3>
      {myEvents.length === 0 && <p className="text-gray-500">No events yet</p>}
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {myEvents.map((event) => (
          <li className="border border-gray-200 rounded-xl p-4 shadow-sm bg-white"  key={event.id}>
            <h4 className="text-lg font-bold">{event.name}</h4>
            <p className="text-sm text-gray-600">{event.date}</p>
            <p className="text-sm">{event.location}</p>
            <button className="mt-2 text-red-600 hover:underline" onClick={() => handleDelete(event.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageEvents;
