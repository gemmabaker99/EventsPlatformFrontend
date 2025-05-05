
function EventCard({ event }) {


    return (
      <>

      
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={event.image} 
            alt={event.name}
            className="w-full h-48 object-cover" 
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800">{event.name}</h3>
            <p className="text-gray-600 text-sm">
            { 'created_by' in event? new Date(event.date).toLocaleDateString('en-GB') : new Date(event.dates.start.localDate).toLocaleDateString('en-GB')}
            </p>
            <p className="text-gray-600 text-sm">{event.location}</p>
          </div>
        </div>
            
            
          </>
    )
    
  }
  
  export default EventCard;
  