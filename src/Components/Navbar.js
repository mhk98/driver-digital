import React, { } from 'react';
import { motion } from "framer-motion"
import DriverDigital from '../image/DriverDigital.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare, faBars} from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';


const container={
  hidden: {
    x: -35,
    opacity: 0,
  },

  visible: {
    y: -20,
    opacity: 1,
  },

  hover: {
    transition: {
      duration: 0.2,
      delay: 1.5
    }
  }
}


function Navbar(){

  const scrollRef = useRef(null);

    return (
        
        <div class="navbar bg-[#000000] text-white py-8">
  
        <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ root: scrollRef }}
        
        >

        <div className='left-0 flex w-full items-center justify-between fixed z-50 text-white px-4'>
          
          <div className='navbar-start hidden lg:flex text-left'>
            
            <ul class="snip1211">
            <li><a href="#">SERVICES</a></li>
            <li><Link to='/'><a>WORK</a></Link></li>
            <li><Link to='/team'><a>TEAM</a></Link></li>
            <li><Link to='/news'><a>NEWS</a></Link></li>
          </ul>
            
            </div>
        
          <div class="navbar-center hidden lg:flex">
            <img src={DriverDigital} width={250} alt="" />
          </div>
          <div class="navbar-end hidden lg:flex snip1211">
            <li><a>DRIVER CREATIVE <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon></a></li>
          </div>
                </div>
        </motion.div>
  
        <motion.din
        
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          viewport={{ root: scrollRef }}
        >

        <div className='left-0 lg:flex w-full items-center justify-between hidden bg-black py-4 fixed z-50 text-white px-4'>
          
          <div className='navbar-start hidden lg:flex'>

          <ul class="snip1211">
            <li><a href="#">SERVICES</a></li>
            <li><Link to='/'><a>WORK</a></Link></li>
            <li><Link to='/team'><a>TEAM</a></Link></li>
            <li><Link to='/news'><a>NEWS</a></Link></li>
          </ul>
        
            </div>
        
          <div class="navbar-center hidden lg:flex">
            <img src={DriverDigital} width={250} alt="" />
          </div>
          <div class="navbar-end hidden lg:flex snip1211">
            <li><a>DRIVER CREATIVE <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon></a></li>
          </div>
                </div>
        </motion.din>


  <div class="navbar-start lg:hidden text-white relative">
    {/* <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost ">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#000000] rounded-box w-52 snip1211">
        <li><a href="#">SERVICES</a></li>
            <li><Link to='/'><a>WORK</a></Link></li>
            <li><Link to='/team'><a>TEAM</a></Link></li>
            <li><Link to='/news'><a>NEWS</a></Link></li>
        <li><a>DRIVER CREATIVE <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon></a></li>
      </ul>
      
    </div> */}


<label for="my-modal-3" class=" modal-button"><FontAwesomeIcon className='text-2xl' icon={faBars}></FontAwesomeIcon></label>

<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-72 h-full bg-black absolute left-0 top-0">
    <label for="my-modal-3" class=" btn-sm btn-circle absolute right-0 top-2 text-2xl">✕</label>
    <ul tabindex="0" class="menu menu-compact dropdown-content mt-8 p-2 shadow bg-[#000000] rounded-box w-52 snip1211">
        <li><a href="#">SERVICES</a></li>
            <li><Link to='/'><a>WORK</a></Link></li>
            <li><Link to='/team'><a>TEAM</a></Link></li>
            <li><Link to='/news'><a>NEWS</a></Link></li>
        <li><a>DRIVER CREATIVE <FontAwesomeIcon icon={faArrowUpRightFromSquare}></FontAwesomeIcon></a></li>
      </ul>
  </div>
</div>
  
  </div>

</div>
        
    );
};

export default Navbar;