import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { FaYoutube } from "react-icons/fa";
import { UilAngleLeftB,UilArrowDown, UilArrowCircleLeft } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

import Navbar from '../../../Components/Navbar';

import image1 from '../../../Images/twist-back-transparent.png';
import video8 from '../../../Images/double-arm-rev-cable-fly.mp4';
import video9 from '../../../Images/reverse-pec-dec-machine.mp4';
import video10 from '../../../Images/face-pulls.mp4';
import video11 from '../../../Images/dumbbell-rear-delt-fly.mp4';

import '../../../Pages/Shoulder.css';

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

    {/* Back Icon */}
      {/* <div className='go-back-icon'>
      <span className='general-instructions-drop-down' onClick={() => navigate(-1)}><UilArrowCircleLeft size="30" color="#000" /></span>
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

    {/* Rear delts */}
    <div className='workout-list-shoulder-front-delts'>

        {/* Seated Dumbell shoulder press */}
        <div className='workout-card-latest'>
            <div className='workout-card-latest-image'>
            <ReactPlayer
                url={video8}
                playing
                loop
                height='calc(100px + 8vw)'
                width='100%'
                className='react-player'
                playsinline={true}
                />
            </div>
            <div className='workout-card-latest-name'>
                <Link to='/muscleGroupFrontDeltoid'>Double-Arm Reverse Cable Fly</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://youtube.com/shorts/bkejPHrPkmA?si=aBDPFGso64hMxzfd' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

        {/* Seated Barbell shoulder press */}
        <div className='workout-card-latest'>
            <div className='workout-card-latest-image'>
            <ReactPlayer
                url={video9}
                playing
                loop
                height='calc(100px + 8vw)'
                width='100%'
                className='react-player'
                playsinline={true}
                />
            </div>
            <div className='workout-card-latest-name'>
                <Link to='/muscleGroupFrontDeltoid'>Reverse Pec Deck Machine</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://youtube.com/shorts/R4a1hpzYOIc?si=MYsDZ0qd0wt97vlM' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

        {/* Seated Arnold Press */}
        <div className='workout-card-latest'>
            <div className='workout-card-latest-image'>
            <ReactPlayer
                url={video10}
                playing
                loop
                height='calc(100px + 8vw)'
                width='100%'
                className='react-player'
                playsinline={true}
                />
            </div>
            <div className='workout-card-latest-name'>
                <Link to='/muscleGroupFrontDeltoid'>Face Pulls</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://youtube.com/shorts/DVxfKB0BnlY?si=HnWVJxYrF-te4G-t' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

        {/* Dumbell Front Raise */}
        <div className='workout-card-latest'>
            <div className='workout-card-latest-image'>
            <ReactPlayer
                url={video11}
                playing
                loop
                height='calc(100px + 8vw)'
                width='100%'
                className='react-player'
                playsinline={true}
                />
            </div>
            <div className='workout-card-latest-name'>
                <Link to='/muscleGroupFrontDeltoid'>Bent Reverse Dumbell Flys</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://youtube.com/shorts/KoRDmXocJII?si=YvW__dMUBuZVqtHa' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

    </div>
    </div>
    </motion.div>
  )
}

export default Shoulder