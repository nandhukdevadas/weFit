import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { FaYoutube } from "react-icons/fa";
import { UilAngleLeftB,UilArrowDown, UilArrowCircleLeft } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

import Navbar from '../../../Components/Navbar';

import image1 from '../../../Images/chest-transparent.png';
import video1 from '../../../Images/chest/incline-dumbbell-press.mp4';
import video2 from '../../../Images/chest/incline-barbell-bench-press.mp4';
import video3 from '../../../Images/chest/low-high-cable-cross-over.mp4';
import video4 from '../../../Images/chest/dumbbell-pull-over.mp4';

import '../../../Pages/Shoulder.css';

const Shoulder = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  let navigate = useNavigate();


  return (
    <motion.div 
    initial={{x: "100%"}}
    animate={{x: "0%"}}
    transition={{duration: 0.3, ease: "easeOut"}}
    exit={{opacity: 1}}
    >

    {/* Navbar */}
      <Navbar/>

    {/* Back Symbol */}
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
                <Link to='/muscleGroupFrontDeltoid'>Incline Dumbbell Press</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ'><FaYoutube /></a>
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
                <Link to='/muscleGroupFrontDeltoid'>Incline Barbell Press</Link>
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
                <Link to='/muscleGroupFrontDeltoid'>Low-High Cable Cross Over</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

        {/* Dumbell Front Raise */}
        <div className='workout-card-latest'>
            <div className='workout-card-latest-image'>
            <ReactPlayer
                url={video4}
                playing
                loop
                height='calc(100px + 8vw)'
                width='100%'
                className='react-player'
                />
            </div>
            <div className='workout-card-latest-name'>
                <Link to='/muscleGroupFrontDeltoid'>Dumbbell Pullover</Link>
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