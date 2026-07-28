import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";

function Login() {
  return(
    <div>
      <Navbar/>
      
      <h1>Login</h1>

      <form action="">
        <input type="email" placeholder="Enter Email"/>
        <br /><br />

        <input type="password" placeholder="Enter Password"/>
        <br /><br />

        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </form>

    </div>
  );
}

export default Login;