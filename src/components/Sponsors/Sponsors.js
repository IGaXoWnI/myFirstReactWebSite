import React from "react";
import SponsorsIcons from './../../images/SponsorsIcons.svg'
import './Sponsors.css';

function Sponsors(){
  return(
    <section className="container sponsors" data-aos="fade-right" data-aos-duration="2000">
      <div  className="row align-items-center"  >
        <div className="col-12"></div>
        <img className="img" src={SponsorsIcons} alt="" />
      </div>
    </section>
    
  );
}
export default Sponsors ;