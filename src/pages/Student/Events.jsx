import EventCard from "../../Components/EventCard";
import Navbar from "../../Components/Navbar";

function Events() {
    const events = [
    {
        name: "Tech Fest 2026",
        description: "Join us for exciting technical competitions and workshops.",
        date: "15 August 2026",
        venue: "College Auditorium",
        organizer: "Computer Science Department",
        seats: 50,
        status: "Open"
    },
    {
        name: "AI Workshop 2026",
        description: "Learn the basics of Artificial Intelligence.",
        date: "20 August 2026",
        venue: "Seminar Hall",
        organizer: "AIML Department",
        seats: 30,
        status: "Open"
    }
    ];
  return (
    <div>
        <Navbar/>
        <h1>College Events</h1>
        <p>Browse and register for upcoming events.</p>       
        {
        events.map((event) => (
          <EventCard
            name={event.name}
            description={event.description}
            date={event.date}
            venue={event.venue}
            organizer={event.organizer}
            seats={event.seats}
            status={event.status}
          />
        ))
      }
    </div>
  );
}

export default Events;