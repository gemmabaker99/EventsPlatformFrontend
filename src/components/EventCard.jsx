function EventCard({ event }) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={event.image} // Replace with event image
            alt={event.name}
            className="w-full h-48 object-cover" // styling for image
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
            <p className="text-gray-600 text-sm">{event.date}</p>
            <p className="text-gray-600 text-sm">{event.location}</p>
          </div>
        </div>
      )
  }
  
  export default EventCard;
  