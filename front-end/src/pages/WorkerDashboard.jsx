import { useEffect, useState } from "react";
import axios from "axios";

const WorkerDashboard = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:5000/api/bookings/worker", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBookings(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem("token");

      await axios.patch(
        `http://localhost:5000/api/bookings/${id}/status`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      fetchBookings(); // refresh
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/bookings/worker",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setBookings(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    loadBookings();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Worker Dashboard</h2>

      {bookings.map((b) => (
        <div key={b.id} className="border p-3 mb-3 rounded">
          <p>
            <b>User:</b> {b.user_name}
          </p>
          <p>
            <b>Date:</b> {b.date}
          </p>
          <p>
            <b>Time:</b> {b.time}
          </p>
          <p>
            <b>Status:</b> {b.status}
          </p>

          {b.status === "pending" && (
            <>
              <button
                onClick={() => updateStatus(b.id, "accepted")}
                className="bg-green-500 text-white px-3 py-1 mr-2"
              >
                Accept
              </button>

              <button
                onClick={() => updateStatus(b.id, "rejected")}
                className="bg-red-500 text-white px-3 py-1"
              >
                Reject
              </button>
            </>
          )}

          {b.status === "accepted" && (
            <button
              onClick={() => updateStatus(b.id, "completed")}
              className="bg-blue-500 text-white px-3 py-1"
            >
              Mark Completed
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default WorkerDashboard;
