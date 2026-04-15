import { useEffect, useState } from "react";
import axios from "axios";
import WorkerCard from "../components/workers/WorkerCard";

const FindWorkers = () => {
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Fetch workers
  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/workers");

        if (Array.isArray(res.data)) {
          setWorkers(res.data);
        } else {
          console.error("Invalid data format:", res.data);
          setWorkers([]);
        }
      } catch (error) {
        console.error("Error fetching workers:", error);
        setWorkers([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkers();
  }, []);

  // Filtering
  const filteredWorkers = workers.filter((w) => {
    const name = w?.name || "";
    const categoryValue = w?.category || "";
    const price = Number(w?.price) || 0;

    return (
      name.toLowerCase().includes(search.toLowerCase()) &&
      (category ? categoryValue === category : true) &&
      (maxPrice ? price <= Number(maxPrice) : true)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 px-6 py-10">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-4xl font-semibold tracking-tight">
          Find Workers
        </h1>
        <p className="text-slate-500 mt-2">
          Discover skilled professionals near you
        </p>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto mb-6 grid md:grid-cols-3 gap-4">

        {/* Search */}
        <input
          type="text"
          placeholder="Search by name..."
          className="border border-slate-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Category */}
        <select
          className="border border-slate-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="plumber">Plumber</option>
          <option value="electrician">Electrician</option>
          <option value="carpenter">Carpenter</option>
        </select>

        {/* Max Price */}
        <input
          type="number"
          placeholder="Max Price"
          className="border border-slate-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-300"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto">

        {loading ? (
          <p className="text-center text-slate-500">Loading workers...</p>
        ) : filteredWorkers.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorkers.map((worker) => (
              <WorkerCard key={worker.id} worker={worker} />
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500">
            No workers found
          </p>
        )}

      </div>

    </div>
  );
};

export default FindWorkers;