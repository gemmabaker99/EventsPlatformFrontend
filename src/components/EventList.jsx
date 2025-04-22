import EventCard from "./EventCard";
import { Link } from "react-router";


function EventList({title, events}) {
  return (
    <div className="p-6" >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => {
        const eventImage = event.images[0]?.url
       return (
       <Link 
       to={`/event/${event.id}`}
       key={event.id}
       className="cursor-pointer"
     >
       <EventCard key={event.id} event={{ ...event, image: eventImage }} />
       </Link>
       )
        })}
    </div>
</div>
  );
}

export default EventList;
