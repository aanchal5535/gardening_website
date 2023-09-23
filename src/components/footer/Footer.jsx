import React from 'react';
import './footer.css';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import {AiOutlineMail} from 'react-icons/ai';
import {BsInstagram} from 'react-icons/bs';
import {RiFacebookCircleLine} from 'react-icons/ri';
import {FiTwitter} from 'react-icons/fi';
import {FiYoutube} from 'react-icons/fi';
import ME from '../../assests/logo-removebg-preview.png';
import IOS from '../../assests/ios.jpg';
import ANDROID from'../../assests/play.svg';


const Footer = () => {
  return (
    <section className='footer'>
        <div className="footer-links">
            <div class="footers">
                <div className="navbar-logo">
                    <img src={ME} alt="app logo" />
                </div>
                <h2>#FamilyDreamGarden</h2>
                <div class="app-logo">
                    <img src={IOS} alt="" />
                    <img src={ANDROID} alt="" />
                </div>
            </div>
            <div className="footer-columns">
                <h3 className="footer-heading">Company</h3>
                    <ul>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Career</a></li>
                        <li><a href='#'>Promo</a></li>
                        <li><a href='#'>Call Center</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
            </div>
            <div className="footer-columns">
                    <h3 className="footer-heading">Services</h3>
                    <ul>
                        <li><a href='#'>Build Gardern</a></li>
                        <li><a href='#'>Gardern Design</a></li>
                        <li><a href='#'>Join Partnership</a></li>
                    </ul>
            </div>
            <div className="footer-columns">
                    <h3 className="footer-heading">Forums</h3>
                    <ul>
                        <li><a href='#'>Community</a></li>
                        <li><a href='#'>FAQ</a></li>

                    </ul>
            </div>
            <div className="footer-columns">
                    <h3 className="footer-heading">Gardener Corp.</h3>
                    <ul>
                        <li>NEPAL Garden Center.</li>
                        <li>Gedung Sentibul 1,J.H.R</li>
                        <li>Bharatpur-11, Chitwan,Nepal</li>
                        <li>Baneshwor,Kathmandu,Nepal</li>
                        <li>Prithvi-chowk,Pokhara,Nepal</li>
                        <li><AiOutlineWhatsApp className='footer-icons'/> +512 612 3456 7890</li>
                        <li><AiOutlineMail className='footer-icons'/> hello@gardern.com</li>
                    </ul>
            </div>
        </div>
        <hr/>
        <div className="footer-last">
            <div className="copyrights">
                <p class="copyright"> &copy;Gardener 2022.All rights reserved</p>
                <p class="copyright"> Privacy Policy</p>
                <p class="copyright"> Terms and Conditions</p>
            </div>
            <div className="icons">
                <BsInstagram className='icons-icon'/>
                <RiFacebookCircleLine className='icons-icon'/>
                <FiTwitter className='icons-icon'/>
                <FiYoutube className='icons-icon'/>
            </div>
        </div>    
    </section>
  )
}

export default Footer
