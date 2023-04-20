import React from "react";
import PhotoStory from "../components/PhotoStory";

export default function Home(props) {
  return (
    <div>
      <PhotoStory images={props.images} />
    </div>
  );
}
