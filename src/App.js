import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Stories from "./pages/Stories";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/stories" element={<Stories/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/pricing" element={<Pricing/>} />
      </Routes>
    </>
  );
}

export default App;
