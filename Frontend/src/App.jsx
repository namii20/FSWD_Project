import './App.css'
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Student/Home";
import Events from './pages/Student/Events';
import Login from "./pages/Student/Login";
import MyRegistrations from "./pages/Student/MyRegistrations";
import Signup from "./pages/Student/Signup";

import Dashboard from "./pages/Admin/Dashboard";
import AddEvent from "./pages/Admin/AddEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registrations" element={<MyRegistrations />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/admin" element={<Dashboard />} />
      <Route path="/admin/add-event" element={<AddEvent />} />
    </Routes>
  )
}

export default App
