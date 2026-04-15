import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = async () => {
    if (!date || !time) {
      alert("Please select date and time");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        "http://localhost:5000/api/bookings",
        {
          worker_id: id,
          date,
          time,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ IMPORTANT
          },
        }
      );

      alert("Booking successful!");
      console.log(res.data);

    } catch (error) {
      console.error("FULL ERROR:", error.response?.data || error.message);
      alert("Booking failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">

      <div className="max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md">

        <h1 className="text-2xl font-bold mb-6">Book Worker</h1>

        {/* Date */}
        <input
          type="date"
          className="w-full border rounded-lg p-3 mb-4"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {/* Time */}
        <input
          type="time"
          className="w-full border rounded-lg p-3 mb-4"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleBooking}
          className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600"
        >
          Confirm Booking
        </button>

      </div>

    </div>
  );
};

export default Booking;