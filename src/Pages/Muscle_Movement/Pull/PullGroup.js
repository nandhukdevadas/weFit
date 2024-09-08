import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { UilAngleRightB, UilArrowCircleLeft } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

import Navbar from '../../../Components/Navbar';

import image1 from '../../../Images/chest-transparent.png';
import image2 from '../../../Images/triceps-transparent.png';
import image3 from '../../../Images/twist-front-transparent.png';

import '../../Shoulder_Group.css';


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
        <Link to='/'> <span className='general-instructions-drop-down' ><UilArrowCircleLeft size="30" color="#000" /></span></Link>
        </div> */}

        <div className='title-inside-page-wrap'>
            <div className='title-inside-page'>Pull</div>
            <div className='description'>Back, Biceps and Shoulders (Rear-Deltoid) workout involves pushing movements, do atleast 1 workout   </div>
            <div className='description'>for each  muscle group.</div>
        </div>

        {/* Muscle Card */}

      <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image1} alt="Image" />
            </div>
            
            <div className='muscle-card-name'>
                <Link to='/muscleMovementBackGroupPull' >Back</Link> 
            </div>
            
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleMovementBackGroupPull' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
        

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image2} alt="Image" />
            </div>
            <div className='muscle-card-name'>
                <Link to='/muscleMovementBicepsGroupPull' >Biceps</Link>
            </div>
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleMovementBicepsGroupPull' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image3} alt="Image" />
            </div>
            <div className='muscle-card-name'>
            <Link to='/muscleMovementShouldersGroupPull' >Shoulders</Link>
            </div>
            <div className='muscle-card-forward-icon'>
            <Link to='/muscleMovementShouldersGroupPull' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
    </motion.div>
  )
}

export default Shoulder_Group