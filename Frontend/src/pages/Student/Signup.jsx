import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <Navbar />
      <h1>Signup</h1>

      <form>
        <input type="text" placeholder="Enter Name"/>
        <br /><br />

        <input type="email" placeholder="Enter Email"/>
        <br /><br />

        <input type="password" placeholder="Enter Password"/>
        <br /><br />

        <button type="submit">Signup</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;