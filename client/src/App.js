import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import RestaurantDetailPage from "./Pages/RestaurantDetailPage";
import UpdatePage from "./Pages/UpdatePage";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants/:id/update" element={<UpdatePage />} />
          <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
