import "./imageList.css";
import React from "react";
import Imagecard from "./Imagecard";

const Imagelist = props => {
  const imagess = props.images.map(image => {
    return <Imagecard key={image.id} image={image} />;
  });
  return <div className="image-list">{imagess}</div>;
};
export default Imagelist;
