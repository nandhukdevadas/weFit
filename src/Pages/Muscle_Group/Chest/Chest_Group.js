import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { UilAngleRightB, UilArrowCircleLeft } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

import Navbar from '../../../Components/Navbar';

import image1 from '../../../Images/chest-transparent.png';
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
            <div className='title-inside-page'>Chest</div>
            <div className='description'>has 3 muscles group in total, You must</div>
            <div className='description'>do atleast 1 workout for each group.</div>
        </div>

        {/* Muscle Card */}

      <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image1} alt="Image" />
            </div>
            
            <div className='muscle-card-name'>
                <Link to='/muscleGroupsUpperChest' >Upper Chest</Link> 
            </div>
            
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupsUpperChest' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
        

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image1} alt="Image" />
            </div>
            <div className='muscle-card-name'>
                <Link to='/muscleGroupsMidChest' >Mid Chest</Link>
            </div>
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupsMidChest' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image1} alt="Image" />
            </div>
            <div className='muscle-card-name'>
            <Link to='/muscleGroupsLowerChest' >Lower Chest</Link>
            </div>
            <div className='muscle-card-forward-icon'>
            <Link to='/muscleGroupsLowerChest' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
    </motion.div>
  )
}

export default Shoulder_Group