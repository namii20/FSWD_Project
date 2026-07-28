import Navbar from "../../Components/Navbar";

function Registration() {
  return (
    <div>
      <Navbar/>

      <h1>My Registrations</h1>

      <div className="event-container">
        <div>
          <h2>Tech Fest 2026</h2>
          <p>Date: 15 August 2026</p>
          <p>Venue: College Auditorium</p>
          <p>Status: Registered ✅</p>
        </div>

        <div>
          <h2>AI Workshop 2026</h2>
          <p>Date: 20 August 2026</p>
          <p>Venue: College Ground</p>
          <p>Status: Registered ✅</p>
        </div>
        
      </div>
    </div>
  );
}

export default Registration;