import { useNavigate } from "react-router-dom";

const WorkerCard = ({ worker }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/profile/${worker.id}`)}
      className="bg-white shadow-md rounded-2xl p-4 cursor-pointer hover:shadow-xl transition"
    >
      <h2 className="text-xl font-bold">{worker.name}</h2>

      <p className="text-gray-600">{worker.category}</p>

      <p className="text-sm">Experience: {worker.experience} yrs</p>
      <p className="text-sm">Location: {worker.location}</p>

      <p className="text-green-600 font-semibold">₹ {worker.price}</p>

      <p className="text-yellow-500">⭐ {worker.rating || 4.5}</p>
    </div>
  );
};

export default WorkerCard;