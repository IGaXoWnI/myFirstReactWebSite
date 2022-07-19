import React from 'react';
import Logo from '../../images/Logo.svg';
import './Navbar.css'

function Navbar (){
  return(
    <header className='container' data-aos="fade-left" data-aos-duration="2000">
      <div className='Logo'>
        <img className='logo' src={Logo} alt=''/>
      </div>
      <div className='right_side'>
        <button className='signup'>Sign Up</button>
        <button className='login'>Log in</button>
      </div>

    </header>
      

  );
}
export default Navbar ;