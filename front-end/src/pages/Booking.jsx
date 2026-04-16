import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [userLocation, setUserLocation] = useState(null);
  const [bookingId, setBookingId] = useState(null); // ✅ important

  const getUserLocation = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          setUserLocation({ lat: latitude, lng: longitude });

          try {
            const token = localStorage.getItem("token");

            await axios.post(
              "http://localhost:5000/api/user/location",
              { lat: latitude, lng: longitude },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );

            resolve(true);
          } catch (err) {
            console.error(err);
            reject(false);
          }
        },
        () => {
          alert("Location permission denied");
          reject(false);
        },
      );
    });
  };

  const handlePaymentAndBooking = async () => {
    try {
      const token = localStorage.getItem("token");

      // 🔥 STEP 1: Check location
      if (!userLocation) {
        await getUserLocation();
      }

      // 🔥 STEP 2: Create order
      const { data: order } = await axios.post(
        "http://localhost:5000/api/payments/create-order",
        { amount: 500 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const options = {
        key: "rzp_test_SdqLYdGC4exfvy",
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,

        handler: async function (response) {
          try {
            const token = localStorage.getItem("token");

            await axios.post(
              "http://localhost:5000/api/payments/verify",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );

            await axios.post(
              "http://localhost:5000/api/bookings",
              {
                worker_id: id,
                date,
                time,
              },
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              },
            );

            alert("Payment verified & booking confirmed!");
          } catch (error) {
            console.error(
              "VERIFY ERROR:",
              error.response?.data || error.message,
            );
            alert("Payment failed");
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Payment failed");
    }
  };

  // 🔹 Step 2: Payment
  const handlePayment = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data: order } = await axios.post(
        "http://localhost:5000/api/payments/create-order",
        {
          booking_id: bookingId,
          amount: 500,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const options = {
        key: "rzp_test_SdqLYdGC4exfvy",
        amount: order.amount,
        currency: order.currency,
        order_id: order.id,

        handler: async function (response) {
          await axios.post(
            "http://localhost:5000/api/payments/verify",
            {
              booking_id: bookingId,
              payment_id: response.razorpay_payment_id,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );

          alert("Payment Successful!");
        },

        method: {
          card: true, // ✅ ENABLE CARD
          upi: true,
          netbanking: true,
          wallet: true,
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Payment failed");
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

        {/* Booking Button */}
        <button
          onClick={handlePaymentAndBooking}
          className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 mb-3"
        >
          Confirm Booking
        </button>

        {/* Payment Button (only after booking) */}
        {bookingId && (
          <button
            onClick={handlePayment}
            className="w-full bg-green-500 text-white py-3 rounded-xl hover:bg-green-600"
          >
            Pay Now
          </button>
        )}
      </div>
    </div>
  );
};

export default Booking;
