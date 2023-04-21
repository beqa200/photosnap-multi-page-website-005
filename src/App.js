import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Stories from "./pages/Stories";
import Home from "./pages/Home";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import { GLobalStyled } from "./styled-components/Global.styled";


function App() {
  return (
    <>
      <GLobalStyled />
      <Header />
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
