import React from 'react';
import { motion } from "framer-motion"

const container = {
    hidden: {
        y: 20
      },
      show: {
        y: 0,
        transition: {
          bounce: 0.4,
          duration: 0.8,
          ease: 'easeOut'
        }
      }
}
const Banner = () => {
    return (
        <motion.div className='bg-black text-white py-32 lg:px-6'
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        >
            <motion.h1 className='text-6xl text-left'
           
                >Service-First Leadership</motion.h1>
        </motion.div>
    );
};

export default Banner;