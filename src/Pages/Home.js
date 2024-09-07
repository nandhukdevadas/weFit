import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import MuscleGroupSwiper from '../Components/MuscleGroupSwiper';
import MuscleMovement from '../Components/MuscleMovement';
import Weekly from '../Components/Weekly';
import { motion } from 'framer-motion';

const Home = () => {
  
  return (
    <motion.div 
    cstyle={{ backgroundColor: 'black' }}
    initial={{x: "100%"}}
    animate={{x: "0%"}}
    transition={{duration: 0.3, ease: "easeOut"}}
    exit={{opacity: 1}}
    >
        <Navbar/>
        <MuscleGroupSwiper/>
        <MuscleMovement/>
        <Weekly/>
    </motion.div>
  )
}

export default Home