import React from 'react';
import './Letstalk.css' ;
import Dog from './../../images/Dog.svg'



function Letstalk(){
  return(
    <section className='allletstalk'>
      <div className='container letscss'>
     <div className='row justify-content-between'>
       <div className='col-xl-5 col-lg-5 col-md-8 col-sm-12 left_side  letstalk_right_side' data-aos="fade-right" data-aos-duration="2000" >
         <h1 className='letstalktitle'>
         Let’s talk, woof! 
         </h1>
         <p className='letstalkpara'>
         You can ask us questions about your pet, and we will be happy to answer you!
         </p>
         <button className='letstalkbtn'>Contact us</button>
       </div>
       <div className='col-xl-5 col-lg-5 col-md-8 col-sm-12 left_side' data-aos="fade-left" data-aos-duration="2000">
         <img src={Dog} alt=''/>
       </div>
     </div>
   </div>
    </section>
   
  );
}
export default Letstalk ;