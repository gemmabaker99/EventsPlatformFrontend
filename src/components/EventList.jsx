import EventCard from "./EventCard";
import play from "../assets/play.jpeg"
import disco from "../assets/disco.jpeg"

const mockEvents = [
    {
      id: 1,
      name: "Kids Disco",
      date: "2025-04-20",
      location: "London",
      image: disco,
    },
    {
      id: 2,
      name: "Music Festival",
      date: "2025-06-28",
      location: "Manchester",
      image: play,
    },
  ]

function EventList() {
  return (
    <div className="p-6" >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Trending Local Events</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
</div>
  );
}

export default EventList;
