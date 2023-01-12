import { Routes, Route } from "react-router-dom";
import UseState from "./pages/UseState";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/useState" element={<UseState />} />
    </Routes>
  );
}

export default App;
