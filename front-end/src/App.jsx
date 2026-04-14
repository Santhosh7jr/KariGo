import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import FindWorkers from "./pages/FindWorkers";
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/find" element={<FindWorkers />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
