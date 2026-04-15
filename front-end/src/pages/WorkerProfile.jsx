import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const WorkerProfile = () => {
  const { id } = useParams();
  const [worker, setWorker] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorker = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/workers/${id}`);
        setWorker(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWorker();
  }, [id]);

  if (!worker) {
    return (
      <div className="flex justify-center items-center h-screen text-slate-700">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
        {/* Header  */}
        <h1 className="text-3xl font-semibold text-slate-900 mb-6">
          {worker.name}
        </h1>

        <div className="space-y-3 text-slate-600">
          <p>
            <span className="font-medium text-slate-900">Category:</span>{" "}
            {worker.category}
          </p>
          <p>
            <span className="font-medium text-slate-900">Experience:</span>{" "}
            {worker.experience} years
          </p>
          <p>
            <span className="font-medium text-slate-900">Location:</span>{" "}
            {worker.location}
          </p>
          <p>
            <span className="font-medium text-slate-900">Price:</span> ₹
            {worker.price}
          </p>
          <p>
            <span className="font-medium text-slate-900">Rating:</span> ⭐{" "}
            {worker.rating}
          </p>
        </div>

        <div className="border-t border-slate-200 my-6"></div>

        <button
          onClick={() => navigate(`/booking/${worker.id}`)}
          className="w-full bg-slate-900 text-white py-3 rounded-xl mt-6"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default WorkerProfile;
