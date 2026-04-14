import React, {useEffect, useState} from "react";
import axios from "axios";

function FindWorkers() {
  const [workers, setWorkers] = useState([]);

  useEffect(() => {
    const fetchWorkers = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/workers");
        setWorkers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWorkers();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Find Workers</h1>

      <div className="grid grid-cols-3 gap-4">
        {
          workers.map((worker) => (
            <div key={worker.id} className="border p-4 rounded shadow">

              <h2 className="text-lg font-semibold">{worker.category}</h2>
              <p>Experience: {worker.experience} years</p>
              <p>Location: {worker.location}</p>
              <p>Price: ₹{worker.price}</p>

            </div>
          ))
        }
      </div>
    </div>
  );

}

export default FindWorkers;