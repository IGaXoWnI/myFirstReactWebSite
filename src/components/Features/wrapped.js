import React from "react";
import FeaturesListe from './Data';
import  Featres from './Featr';
import './Features.css'
const Wrapped = ()=>{
  return(
  <div className="container">
    <div className="flexed " data-aos="fade-up" data-aos-duration="2000">
      <Featres/>
    </div> 
  </div> 
   )};
export default Wrapped;