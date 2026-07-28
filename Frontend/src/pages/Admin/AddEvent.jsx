import Navbar from "../../Components/Navbar";

function AddEvent() {
  return(
    <div>
      <Navbar/>

      <h1>Add New Event</h1>

      <form>
        <input type="text" placeholder="Event Name"/>
        <br /><br />

        <textarea placeholder="Event Description"></textarea>
        <br /><br />

        <input type="date"/>
        <br /><br />

        <input type="text" placeholder="Venue"/>
        <br /><br />

        <input type="text" placeholder="Organizer"/>
        <br /><br />

        <input type="number" placeholder="Seats Available"/>
        <br /><br />

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}

export default AddEvent;