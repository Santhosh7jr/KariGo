import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const WorkerProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [worker, setWorker] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorker = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/workers/${id}`
        );

        setWorker(res.data);
      } catch (error) {
        console.error("Error fetching worker:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorker();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!worker) {
    return <p className="text-center mt-10">Worker not found</p>;
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">

        <h1 className="text-3xl font-bold">{worker.name}</h1>

        <p className="text-gray-600 mt-2">{worker.category}</p>

        <div className="mt-4 space-y-2">
          <p><strong>Experience:</strong> {worker.experience} years</p>
          <p><strong>Location:</strong> {worker.location}</p>
          <p><strong>Price:</strong> ₹ {worker.price}</p>
          <p><strong>Rating:</strong> ⭐ {worker.rating || 4.5}</p>
        </div>

        {/* Book Button */}
        <button
          onClick={() => navigate(`/booking/${worker.id}`)}
          className="mt-6 w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition"
        >
          Book Now
        </button>

      </div>

    </div>
  );
};

export default WorkerProfile;