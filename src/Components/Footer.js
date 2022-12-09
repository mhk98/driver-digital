import {faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import icon from '../image/icon.png'
import './Footer.css'

const Footer = () => {
    return (
       
      <div>
        <div className="App text-2xl">
      <ScrollToTop className='scroll-to-top' smooth component={<p className='text-black '><FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></p>} />
    </div>
<div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 text-white bg-black py-12 px-36 gap-4 '>
        <div>
          <img className='h-6 mx-auto' src={icon} alt=""/>
        </div>

        <div>
          <p><a href="">HELLO@DRIVER-DIGITAL.COM</a></p>
        </div>

        <div>
        © 2022 DRIVER DIGITAL LLC
        </div>

        <div>FOLLOW</div>
        </div>
      </div>
    );
};

export default Footer;