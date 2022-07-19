import React from 'react';
import './VideoSide.css';
import Video from './../../images/Video.jpg'

function VideoSide (){
  return(
    <div className='allvideo' data-aos="zoom-in" data-aos-duration="2000">
      <div className='container ' >
        <div className='row'>
         <div col-12>
          <img  className=' rounded mx-auto d-block imgVS' src={Video} alt=''/>
         </div>
        </div>
        
      
    </div>
    </div>
    
  );
}
export default VideoSide ;