import React from 'react';
import './Footer.css'
import Logo from './../../images/Logo.svg'
import Socialicons from './../../images/Socialicons.svg'


function Footer(){
  return(
    <footer className='container' >
      <div className='row footer' data-aos="fade-down" data-aos-duration="2000">
        <div className='col-6 left_side'>
          <img className='imgfooter' src={Logo} alt=''/>
          <h6>Updates right to your Inbox</h6>
          <input type="email" name="email" placeholder='Email Address' id="email"/>
          <button className='sendbtn'>Send</button>
          <div className='terms'>
          <a>© PETWORLD 2022</a>
          <a>Privacy policy</a>
          <a>Terms of use</a>
          </div>
          
        </div>
      
          <div className=' col-2 Our story'>
          <h3>Our story</h3>
            <a href='#'>FAQ</a>
            <a href='#'>Contact</a>
          </div>

          <div className=' col-2 Pet care'>
          <h3>Pet care</h3>
            <a href='#'>Treatments</a>
            <a href='#'>Health</a>
            <a href='#'>Hygiene </a>
          </div>

          <div className=' col-2 Shop'>
          <h3>Shop</h3>
            <a href='#'>Pet Food</a>
            <a href='#'>Toys</a>
            <a href='#'>Accessories</a>
          </div>
          <div className='Socialicons'>
            <img src={Socialicons} alt='' />
          </div>
        </div>
      </footer>
    
  );
}
export default Footer ;



