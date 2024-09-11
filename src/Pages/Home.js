import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import MuscleGroupSwiper from '../Components/MuscleGroupSwiper';
import MuscleMovement from '../Components/MuscleMovement';
import Weekly from '../Components/Weekly';
import { motion } from 'framer-motion';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

const Home = () => {
  
  return (
    <motion.div
    cstyle={{ backgroundColor: 'black' }}
    initial={{x: "50%"}}
    animate={{x: "0%"}}
    transition={{duration: 0.3, ease: "easeOut"}}
    exit={{opacity: 1}}
    className='home-body'
    >
        <Navbar/>
        <MuscleGroupSwiper/>
        <MuscleMovement/>
        <Weekly/>
        <SpeedInsights/>
        <Analytics/>
    </motion.div>
  )
}

export default Home