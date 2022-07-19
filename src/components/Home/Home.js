import React from "react";
import './Home.css'
import HomePic from '../../images/HomePic.svg';

function Home(){
  return(
    <section className="allhome">
      <div  className="container Home" >
      <div className="row justify-content-between" data-aos="fade-up" data-aos-duration="2000">
        <div className="col-xl-5 col-lg-5 col-md-8 col-sm-12 left_side">
          <h1>Pet Store & Beyond</h1>
          <p className="subtitle">This is a sample landing page, created with Figma and Anima. No coding involved.</p>
          <button className="button">Get Started</button>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-8 col-sm-12  ">
          <img className="img" src={HomePic} alt=""/>
        </div>
      </div>
    </div>
    </section>
    
  );
}
export default Home ;