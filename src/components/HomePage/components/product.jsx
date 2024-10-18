import React from "react";
import imag from "./images/prod.png"

const LatestProduct = () => {
  const isSmallDevice = window.innerWidth < 600; 
  {console.log(isSmallDevice)}
  return isSmallDevice ? (
    <></> 
  ) : (
    <img src={imag} className="w-10/12 lg:w-7/12" />
  );
};


export default LatestProduct;
