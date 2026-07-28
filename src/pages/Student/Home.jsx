import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="hero">
        <h1>College Event Management System</h1>

        <p>
          Discover, register and participate in exciting college events.
        </p>

        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          Workshops • Seminars • Hackathons • Technical Fests
        </p>

        <Link to="/events">
          <button>Explore Events</button>
        </Link>
      </div>

      {/* Featured Events */}
      <div className="featured">
        <h2>Featured Events</h2>

        <div className="featured-cards">
          <div className="card">
            <h3>Tech Fest 2026</h3>
            <p>15 August 2026</p>
            <button>View Details</button>
          </div>

          <div className="card">
            <h3>AI Workshop 2026</h3>
            <p>20 August 2026</p>
            <button>View Details</button>
          </div>

          <div className="card">
            <h3>Hackathon 2026</h3>
            <p>25 August 2026</p>
            <button>View Details</button>
          </div>
        </div>
      </div>

      {/* Login Section */}
      <div className="login-section">
        <div className="login-card">
          <h2>Student</h2>
          <p>Browse events and register.</p>

          <Link to="/login">
            <button>Student Login</button>
          </Link>
        </div>

        <div className="login-card">
          <h2>Admin</h2>
          <p>Manage events and registrations.</p>

          <Link to="/admin">
            <button>Admin Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;