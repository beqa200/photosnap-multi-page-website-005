import React from "react";

export default function PhotoStory(props) {
  return (
    <div className="container" >
      <div className="ImgWrapper">
        <img src={props.images[1].path} alt={props.images[1].alt} />
      </div>

      <div>{props.images[1].title}</div>
      <div>{props.images[1].text}</div>
      <div>{props.images[1].invite}</div>
    </div>
  );
}
