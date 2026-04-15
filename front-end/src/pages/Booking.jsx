import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Booking() {
  const { workerId } = useParams(); // from URL
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // ✅ VERY IMPORTANT
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          worker_id: workerId,
          date,
          time
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert("Booking successful ✅");
        navigate("/");
      } else {
        alert(data.error || "Booking failed");
      }

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <form
        onSubmit={handleBooking}
        className="bg-white p-6 rounded-2xl shadow-md w-80 space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">
          Book Worker
        </h2>

        <input
          type="date"
          className="w-full border p-2 rounded"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <input
          type="time"
          className="w-full border p-2 rounded"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-slate-800"
        >
          Book Now
        </button>
      </form>
    </div>
  );
}