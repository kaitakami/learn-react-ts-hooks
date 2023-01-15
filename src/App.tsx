import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import UseContext from "./pages/UseContext";
import UseReducer from "./pages/UseReducer";
import UseRef from "./pages/UseRef";
import Memoization from "./pages/Memoization";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";


function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/useState" element={<UseState />} />
      <Route path="/useEffect" element={<UseEffect />} />
      <Route path="/useContext" element={<UseContext />} />
      <Route path="/useReducer" element={<UseReducer />} />
      <Route path="/useRef" element={<UseRef />} />
      <Route path="/memoization" element={<Memoization />} />
      <Route path="/useMemo" element={<UseMemo />} />
      <Route path="/useCallback" element={<UseCallback />} />
    </Routes>
  );
}

export default App;
