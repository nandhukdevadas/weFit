import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player';
import { FaYoutube } from "react-icons/fa";
import { UilAngleLeftB,UilArrowDown, UilArrowCircleLeft } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';

import Navbar from '../../../Components/Navbar';

import image1 from '../../../Images/side-transparent.png';
import video1 from '../../../Images/seated-dumbell-shoulder-press.mp4';
import video2 from '../../../Images/seated-barbell-shoulder-press.mp4';
import video5 from '../../../Images/shoulder-lateral-raise.mp4';
import video6 from '../../../Images/shoulder-lying-incline-raise.mp4';
import video7 from '../../../Images/shoulder-cable-lateral-raise.mp4';

import '../../../Pages/Shoulder.css';

const Shoulder = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  let navigate = useNavigate();


  return (
    <motion.div
    className='muscle-group-shoulder-body'
    cstyle={{ backgroundColor: 'black' }}
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

    {/* Front delts */}
    <div className='workout-list-shoulder-front-delts'>

        {/* Seated Dumbell shoulder press */}
        <div className='workout-card-latest'>
            <div className='workout-card-latest-image'>
            <ReactPlayer
                url={video5}
                playing
                loop
                height='calc(100px + 8vw)'
                width='100%'
                className='react-player'
                />
            </div>
            <div className='workout-card-latest-name'>
                <Link to='/muscleGroupFrontDeltoid'>Dumbbell Lateral Raise</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

        {/* Seated Barbell shoulder press */}
        <div className='workout-card-latest'>
            <div className='workout-card-latest-image'>
            <ReactPlayer
                url={video6}
                playing
                loop
                height='calc(100px + 8vw)'
                width='100%'
                className='react-player'
                />
            </div>
            <div className='workout-card-latest-name'>
                <Link to='/muscleGroupFrontDeltoid'>Lying Incline Lateral Raise</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

        {/* Seated Arnold Press */}
        <div className='workout-card-latest'>
            <div className='workout-card-latest-image'>
            <ReactPlayer
                url={video7}
                playing
                loop
                height='calc(100px + 8vw)'
                width='100%'
                className='react-player'
                />
            </div>
            <div className='workout-card-latest-name'>
                <Link to='/muscleGroupFrontDeltoid'>Cable Incline Lateral Raise</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

        {/* Dumbell Front Raise */}
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
                <Link to='/muscleGroupFrontDeltoid'>Seated Barbell Shoulder Press</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

        {/* Dumbell Lateral Raise */}
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
                <Link to='/muscleGroupFrontDeltoid'>Dumbbell Lateral Raise</Link>
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