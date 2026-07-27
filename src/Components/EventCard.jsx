function EventCard(props){
    return (
        <div className="event-card">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>Date: {props.date}</p>
            <p>Venue: {props.venue}</p>
            <p>Organizer: {props.organizer}</p>
            <p>Seats Available: {props.seats}</p>
            <p>Status: {props.status}</p>
            <button onClick={() => alert("Registered Successfully!")}>
                Register Now
            </button>
        </div>
    )
}

export default EventCard;