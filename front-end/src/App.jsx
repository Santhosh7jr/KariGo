import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import FindWorkers from "./pages/FindWorkers";
import WorkerProfile from "./pages/WorkerProfile";
import Booking from "./pages/Booking";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/find" element={<FindWorkers />}/>
          <Route path="/booking/:id" element={<Booking />}/>
          <Route path="/profile/:id" element={<WorkerProfile />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
