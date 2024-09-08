import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { FaYoutube } from "react-icons/fa";
import { motion } from 'framer-motion';

import Navbar from '../../../Components/Navbar';

import image1 from '../../../Images/triceps-transparent.png';
import video1 from '../../../Images/triceps/kickbacks.mp4';
import video2 from '../../../Images/triceps/overhead-cable-extension.mp4';
import video3 from '../../../Images/triceps/overhead-two-arm-cable-extension.mp4';

import '../../../Pages/Shoulder.css';


import { UilAngleLeftB,UilArrowDown, UilArrowCircleLeft } from '@iconscout/react-unicons';

const Shoulder = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };


  return (
    <motion.div
    className='muscle-group-shoulder-body'
    initial={{x: "100%"}}
    animate={{x: "0%"}}
    transition={{duration: 0.3, ease: "easeOut"}}
    exit={{opacity: 1}}
    >

    {/* Navbar */}
      <Navbar/>

    {/* Back Symbol */}
      {/* <div className='go-back-icon'>
      <Link to='/muscleGroupTricepsGroup'onClick={playClickSound}> <span className='general-instructions-drop-down'><UilArrowCircleLeft size="30" color="#000" /></span></Link>
      </div> */}

    {/* Image Section */}
      <div className='image-section'>
        <span className='shoulder-front-image'>
        <img src={image1} alt="Image" />
        </span>
      </div>

    {/* General Instructions */}
    <div className='general-instructions-title'>
        <b onClick={handleClick} >General instructions</b>
        <span className='general-instructions-drop-down' onClick={handleClick}><UilArrowDown size="25" color="#248A3D" /></span>
    </div>
    <div className={`general-instructions ${isExpanded ? 'active' : ''} `}>
        {/* <div><b>General instructions</b></div> */}
        <div>1. Aim for at least 3 sets, 8-12 reps each, for optimal training.</div>
        <div>2. <b>Form First</b>: Choose weight that challenges you, but prioritize proper form over heavier loads.</div>
        <div>3. <b>Move with Control</b>: Avoid jerky motions, breathe smoothly, and maintain core engagement.. Remember, form over ego!</div>
        <div>4. <b>Respect Your Limits</b>: Listen to your body and adjust intensity to suit your capabilities.</div>
    </div>

    <div className='workout-list-shoulder'>

    {/* <div className='musclegroup-name'>Pick minimum 1</div> */}

    {/* Front delts */}
    <div className='workout-list-shoulder-front-delts'>

        {/* Seated Dumbell shoulder press */}
        <div className='workout-card-latest'>
            <div className='workout-card-latest-image'>
            <ReactPlayer
                url={video1}
                playing
                loop
                height='calc(100px + 8vw)'
                width='100%'
                className='react-player'
                />
            </div>
            <div className='workout-card-latest-name'>
                <Link to='/muscleGroupFrontDeltoid'>Inclined Kickbacks</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

        {/* Seated Barbell shoulder press */}
        <div className='workout-card-latest'>
            <div className='workout-card-latest-image'>
            <ReactPlayer
                url={video2}
                playing
                loop
                height='calc(100px + 8vw)'
                width='100%'
                className='react-player'
                />
            </div>
            <div className='workout-card-latest-name'>
                <Link to='/muscleGroupFrontDeltoid'>Overhead Single-arm Extension</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

        {/* Seated Arnold Press */}
        <div className='workout-card-latest'>
            <div className='workout-card-latest-image'>
            <ReactPlayer
                url={video3}
                playing
                loop
                height='calc(100px + 8vw)'
                width='100%'
                className='react-player'
                />
            </div>
            <div className='workout-card-latest-name'>
                <Link to='/muscleGroupFrontDeltoid'>Overhead Double-arm Extension</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

    </div>
    </div>
    </motion.div>
  )
}

export default Shoulder