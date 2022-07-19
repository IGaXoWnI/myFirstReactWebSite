import React from "react";
import FeaturesListe from './Data';
import  Feature from './Features';

const Featres = ()=>{
  return(
    FeaturesListe.map((list)=> (
      <Feature  key={list.id} Img={list.Img} title={list.title} Comment={list.Comment} />
    ))
    

   )};
export default Featres;