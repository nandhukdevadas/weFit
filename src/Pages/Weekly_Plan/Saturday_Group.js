import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { UilAngleRightB, UilArrowCircleLeft } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

import Navbar from '../../Components/Navbar';

import image1 from '../../Images/calves-transparent.png';
import image2 from '../../Images/side-transparent.png';

import '../Shoulder_Group.css';



const Shoulder_Group = () => {
  
  return (
    
    <motion.div 
    initial={{x: "100%"}}
    animate={{x: "0%"}}
    transition={{duration: 0.3, ease: "easeOut"}}
    exit={{opacity: 1}}
    >

        <Navbar/>

        {/* Back Icon */}

        {/* <div className='go-back-icon'>
            <Link to='/'> <span className='general-instructions-drop-down'><UilArrowCircleLeft size="30" color="#000" /></span></Link>
        </div> */}

        <div className='title-inside-page-wrap'>
            <div className='title-inside-page'>Wednesday</div>
            <div className='description'>On Wednesday, focus on</div>
            <div className='description'>legs and shoulder.</div>
        </div>

        {/* Muscle Card */}

      <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image1} alt="Image" />
            </div>
            
            <div className='muscle-card-name'>
                <Link to='/muscleGroupLegsGroup' >Legs</Link> 
            </div>
            
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupLegsGroup' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
        

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image2} alt="Image" />
            </div>
            <div className='muscle-card-name'>
                <Link to='/muscleGroupShoulderGroup' >Shoulder</Link>
            </div>
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupShoulderGroup' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>

    </motion.div>
  )
}

export default Shoulder_Group