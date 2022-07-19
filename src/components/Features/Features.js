import React from 'react';
import './Features.css'

function Feature(props){
  return(
   
      <div className='features'>
      <img className='imgf' src={props.Img} alt=''/>
    
      <h2 className='title'>
      {props.title}
            </h2>
      <p className='description'>
      {props.Comment}
      </p>
    </div>

  );
}
export default Feature ;