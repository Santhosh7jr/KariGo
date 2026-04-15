import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FindWorkers = () => {
  const [workers, setWorkers] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const navigate = useNavigate();

  // Fetch workers
  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/workers");

        // Safety check
        if (Array.isArray(res.data)) {
          setWorkers(res.data);
        } else {
          console.error("Invalid data format:", res.data);
          setWorkers([]);
        }

      } catch (error) {
        console.error("Error fetching workers:", error);
        setWorkers([]);
      }
    };

    fetchWorkers();
  }, []);

  // Safe filtering (NO CRASH VERSION)
  const filteredWorkers = workers.filter((w) => {
    const name = w?.name || "";
    const categoryValue = w?.category || "";
    const price = Number(w?.price) || 0;

    const matchesSearch = name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category
      ? categoryValue === category
      : true;

    const matchesPrice = maxPrice
      ? price <= Number(maxPrice)
      : true;

    return matchesSearch && matchesCategory && matchesPrice;
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

      {/* Workers Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredWorkers.length > 0 ? (
          filteredWorkers.map((worker) => (
            <div
              key={worker.id}
              onClick={() => navigate(`/profile/${worker.id}`)}
              className="bg-white border border-slate-200 rounded-2xl p-5 cursor-pointer 
                         hover:shadow-lg hover:border-slate-300 transition duration-200"
            >
              <h2 className="text-xl font-semibold text-slate-900">
                {worker.name || "No Name"}
              </h2>

              <p className="text-slate-500 text-sm">
                {worker.category || "Unknown"}
              </p>

              <div className="flex justify-between items-center mt-4">
                <p className="text-slate-900 font-medium">
                  ₹{worker.price || 0}
                </p>
                <span className="text-sm text-slate-600">
                  ⭐ {worker.rating || 0}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-slate-500 col-span-full text-center">
            No workers found
          </p>
        )}

      </div>

    </div>
  );
};

export default FindWorkers;