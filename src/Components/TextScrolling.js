import React from 'react';
import './TextScrolling.css'
const TextScrolling = () => {
    return (
        <div className='wrapper'>

        <div class="awesome-box">
            <marquee class="marquee top" direction="right" SCROLLAMOUNT = '15'>DRIVERDIGITAL</marquee>
            <marquee class="marquee right" direction="right" SCROLLAMOUNT = '15'>DRIVERDIGITAL</marquee>
            <marquee class="marquee bottom" direction="right" SCROLLAMOUNT = '15'>DRIVERDIGITAL</marquee>
            <marquee class="marquee left" direction="right" SCROLLAMOUNT = '15'>DRIVERDIGITAL</marquee>
            
        </div>

    

    
        </div>
    );
};

export default TextScrolling;