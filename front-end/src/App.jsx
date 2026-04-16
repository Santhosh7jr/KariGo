import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindWorkers from "./pages/FindWorkers";
import WorkerProfile from "./pages/WorkerProfile";
import Booking from "./pages/Booking";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserBookings from "./pages/UserBookings";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WorkerDashboard from "./pages/WorkerDashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-bookings" element={<UserBookings />} />
        <Route path="/find" element={<FindWorkers />} />
        <Route path="/worker-dashboard" element={<WorkerDashboard />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/profile/:id" element={<WorkerProfile />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;