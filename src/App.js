import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Stories from "./pages/Stories";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PhotoStory from "./components/PhotoStory";
import React from "react";
import GlobalStyles from "./styled-components/GlobalStyles";

function App() {
  const images = [
    {
      id: 1,
      path: "./assets/home/mobile/beautiful-stories.jpg",
      alt: "beautifulImg",
    },
    {
      id: 2,
      path: "./assets/home/mobile/create-and-share.jpg",
      alt: "createImg",
      title: "Create and share your photo stories. ",
      text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      invite: "GET AN INVITE",
    },
    {
      id: 3,
      path: "./assets/home/mobile/designed-for-everyone.jpg",
      alt: "designedImg",
    },
    {
      id: 4,
      path: "./assets/stories/mobile/moon-of-appalacia.jpg",
      alt: "moonImg",
    },
    {
      id: 5,
      path: "./assets/features/mobile/hero.jpg",
      alt: "heroImg",
    },
    {
      id: 6,
      path: "./assets/pricing/mobile/hero.jpg",
      alt: "beautifulImg",
    },
  ];
  //  const texts =[
  //   {
  //     title: '',
  //     text: '',
  //     invite: '',
  //   },

  //  ]

  return (
    <>
      <Routes>
        <Route path="/" element={<Home images={images} />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
