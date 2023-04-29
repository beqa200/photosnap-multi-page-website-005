import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Stories from "./pages/Stories";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import { GLobalStyled } from "./styled-components/Global.styled";
import Footer from "./components/Footer";
import { useState } from "react";



function App() {
  const images = [
    {
      id: 1,
      path: "./assets/home/mobile/beautiful-stories.jpg",
      alt: "beautifulImg",
      title: "BEAUTIFUL STORIES EVERY TIME ",
      text: "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
      invite: "VIEW THE STORIES",
      icon: "./assets/shared/desktop/arrow.svg",
    },
    {
      id: 2,
      path: "./assets/home/mobile/create-and-share.jpg",
      alt: "createImg",
      title: "CREATE AND SHARE YOUR PHOTO STORIES. ",
      text: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
      invite: "GET AN INVITE",
      icon: "./assets/shared/desktop/arrow.svg",
    },
    {
      id: 3,
      path: "./assets/home/mobile/designed-for-everyone.jpg",
      alt: "designedImg",
      title: "DESIGNED FOR EVERYONE",
      text: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
      invite: "VIEW THE STORIES",
      icon: "./assets/shared/desktop/arrow.svg",
    },
    {
      id: 4,
      path: "./assets/stories/mobile/moon-of-appalacia.jpg",
      alt: "moonImg",
      topTitle: "LAST MONTH’S FEATURED STORY",
      title: "HAZY FULL MOON OF APPALACHIA",
      text: "The dissected plateau area, while not actually made up of geological mountains, is popularly called mountains, especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.",
      date: "March 2nd 2020 by John Appleseed",
      invite: "READ THE STORY",
      icon: "./assets/shared/desktop/arrow.svg",
    },
    {
      id: 5,
      path: "./assets/features/mobile/hero.jpg",
      alt: "heroImg",
      title: "FEATURES",
      text: "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
    },
    {
      id: 6,
      path: "./assets/pricing/mobile/hero.jpg",
      alt: "beautifulImg",
      title: "PRICING",
      text: "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
    },
  ];


  const icons = [
    {
      icon: "",
      title: "100% Responsive",
      text: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
    },
    {
      icon: "",
      title: "No Photo Upload Limit",
      text: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    },
    {
      icon: "",
      title: "Available to Embed",
      text: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    },
    {
      icon: "",
      title: "Custom Domain",
      text: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    },
    {
      icon: "",
      title: "Boost Your Exposure",
      text: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    },
    {
      icon: "",
      title: "Drag & Drop Image",
      text: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    },
  ];

  const [isMenuVisible, setIsMenuVisible] = useState(false);


  return (
    <>
      <GLobalStyled height={isMenuVisible ? "100vh" : "100%"} over={isMenuVisible ? "hidden" : "auto"}/>
      <Header isMenuVisible={isMenuVisible} setIsMenuVisible={setIsMenuVisible}/>

      <Routes>
        <Route path="/" element={<Home images={images} />} />
        <Route path="/stories" element={<Stories images={images} />} />
        <Route path="/features" element={<Features images={images}/>} />
        <Route path="/pricing" element={<Pricing images={images}/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
