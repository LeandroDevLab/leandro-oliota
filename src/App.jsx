import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Dev from "./pages/Dev/Dev";
import Personal from "./pages/Personal/Personal";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/dev" element={<Dev />}></Route>
      <Route path="/personal" element={<Personal />}></Route>
    </Routes>
  );
}

export default App;
