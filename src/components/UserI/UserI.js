import React from 'react';
import './UserI.css';
import Cycle from './../../images/Cycle.svg'
import Picture from './../../images/Picture.png'
import Quote from './../../images/“.svg'

function UserI(){
  return(
    
    <div className='all'>
      <div className='container UserI'>
      <div className='row d-flex justify-content-center align-items-center'>
        <div className='col-6  photoUser ' data-aos="fade-right" data-aos-duration="2000">
        <img className='cycle' src={Cycle} alt='' />
        <img className='picture' src={Picture} alt=''/>
        </div>
        <div className='col-6  text' data-aos="fade-left" data-aos-duration="2000" >
          <img className='imguser' src={Quote} alt=''/>
          <p className='paragraph'>
          We love using 'PETWORLD' products.  Environmentally friendly and sustainable. 
          We have the sustainable dog bowls and regularly use the mint scented poo bags which were all such great value for money.
          </p>
          <h6 className='Dylan'>
          Dylan Shaw
          </h6>
        </div>
    </div>
    </div>
    </div>
    
  );
}
export default UserI ;