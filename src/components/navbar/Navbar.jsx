import React,{ useState } from 'react';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import ME from '../../assests/logo.jpg';



const Navbar = () => {
  const [toggleMenu,setToggleMenu]=React.useState(false);
  const [activeNav, setActiveNav]=useState('#')
return(
  <nav className='navbar'>
    <div className="navbar-logo">
    <a href="#" onClick={()=>setActiveNav('#')}><img src={ME} alt="app logo" /></a>
    </div>
    <ul className='navbar-links'>
      <li className='p__opensans'><a href='#' onClick={()=>setActiveNav('#')}  className={activeNav==='#' ? 'active':''}>Home</a></li>
      <li className='p__opensans'><a href='#' onClick={()=>setActiveNav('#')}  className={activeNav==='#' ? 'active':''}>Service</a></li>
      <li className='p__opensans'><a href='#' onClick={()=>setActiveNav('#')}  className={activeNav==='#' ? 'active':''}>Blog</a></li>
      <li className='p__opensans'><a href='#' onClick={()=>setActiveNav('#')}  className={activeNav==='#' ? 'active':''}>Services</a></li>
      <li className='p__opensans'><a href='#' onClick={()=>setActiveNav('#')}  className={activeNav==='#' ? 'active':''}>Profile</a></li>
      
    </ul>
    <div className='navbar-login'>
      <a href="#login" className='p__opensans'>Contact Us </a>
   
      <div />
      
      <button className='btn btn-primary'>Login In / Registration </button>


      </div>
      <div className="navbar-smallscreen">
        <GiHamburgerMenu color='#000' fontSize={30} onClick={() => setToggleMenu(true)}/>


        
        {toggleMenu && (
        <div className="navbar-smallscreen_overlay flex__center slide-bottom">
          <RxCross1 fontSize={30} className="overlay_close" onClick={() => setToggleMenu(false)}/>
      
          <ul className="navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#services" onClick={() => setToggleMenu(false)}>Services</a></li>
              <li><a href="#blog" onClick={() => setToggleMenu(false)}>Blog</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              <li><a href="#profile" onClick={() => setToggleMenu(false)}>Profile</a></li>
            </ul>

          </div>
        )}
        
      </div>
  </nav>
);
};

export default Navbar;
