import React from "react";



export default function PhotoStory(props) {
  
  return (
    <div className="container">
       <div>
      {props.images.map((image) => (
        <img key={image.id} src={image.path} alt={image.alt} />
      ))}
    </div>



      <div></div>
      <div></div>
    </div>
  );
}
