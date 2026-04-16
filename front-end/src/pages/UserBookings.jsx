import { useEffect, useState } from "react";
import axios from "axios";

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/bookings/user",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setBookings(res.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();

    axios.get("http://localhost:5000/api/bookings/auto-release");
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">My Bookings</h1>

      {bookings.map((b) => (
        <div key={b.id} className="border p-4 mt-4 rounded-xl">
          <p><strong>Worker:</strong> {b.worker_name}</p>
          <p><strong>Date:</strong> {b.date}</p>
          <p><strong>Time:</strong> {b.time}</p>
          <p><strong>Status:</strong> {b.status}</p>
        </div>
      ))}
    </div>
  );
};

export default UserBookings;