import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Navbar/>

      <h1>Admin Dashboard</h1>

      <h3>Welcome Admin 👋</h3>

      <Link to="/admin/add-event">
        <button>Add New Event</button>
      </Link>

      <br /><br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Event</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Tech Fest 2026</td>
            <td>15 August 2026</td>
            <td>Open</td>
          </tr>

          <tr>
            <td>AI Workshop 2026</td>
            <td>20 August 2026</td>
            <td>Open</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;