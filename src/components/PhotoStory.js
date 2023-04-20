import React from "react";



export default function PhotoStory(props) {
  
  return (
    <div className="container">
       <div>
       <div>
      <img src={props.images[0].path} alt={props.images[0].alt} />
    </div>
      {/* {props.images.map((image) => (
        <img key={image.id} src={image.path} alt={image.alt} />
      ))} */}
    </div>



      <div></div>
      <div></div>
    </div>
  );
}
