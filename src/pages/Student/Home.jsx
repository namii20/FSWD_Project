import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />

      <h1>College Event Management System</h1>

      <p>Welcome to the College Event Management Portal.</p>

      <Link to="/events">
        <button>View Events</button>
      </Link>
    </div>
  );
}

export default Home;