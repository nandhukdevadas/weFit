import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import Navbar from '../../../Components/Navbar';

import image1 from '../../../Images/triceps-transparent.png';
import '../../../Pages/Shoulder.css';
import video6 from '../../../Images/triceps/cable-pushdown.mp4';
import video7 from '../../../Images/triceps/bench-dips.mp4';
import video8 from '../../../Images/triceps/diamond-pushups.mp4';

import ReactPlayer from 'react-player';
import { FaYoutube } from "react-icons/fa";
import { UilAngleLeftB,UilArrowDown, UilArrowCircleLeft } from '@iconscout/react-unicons';

const Shoulder = () => {

  const [isExpanded, setIsExpanded] = useState(false);
  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  let navigate = useNavigate();


  return (
    <div className='muscle-group-shoulder-body'>

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
                url={video6}
                playing
                loop
                height='calc(100px + 8vw)'
                width='100%'
                className='react-player'
                />
            </div>
            <div className='workout-card-latest-name'>
                <Link to='/muscleGroupFrontDeltoid'>Rope Push Down</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

        {/* Seated Barbell shoulder press */}
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
                <Link to='/muscleGroupFrontDeltoid'>Bench Dips</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>


        {/* Seated Barbell shoulder press */}
        <div className='workout-card-latest'>
            <div className='workout-card-latest-image'>
            <ReactPlayer
                url={video8}
                playing
                loop
                height='calc(100px + 8vw)'
                width='100%'
                className='react-player'
                />
            </div>
            <div className='workout-card-latest-name'>
                <Link to='/muscleGroupFrontDeltoid'>Diamond Pushups</Link>
                <div className='workout-card-latest-youtube-icon'>
                    <a href='https://www.youtube.com/shorts/bQPhGIJJ-jQ' ><FaYoutube /></a>
                </div> 
            </div> 
        </div>

    </div>
    </div>
    </div>
  )
}

export default Shoulder