import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { UilAngleRightB, UilArrowCircleLeft } from '@iconscout/react-unicons';

import Navbar from '../../../Components/Navbar';

import image1 from '../../../Images/chest-transparent.png';
import image2 from '../../../Images/triceps-transparent.png';
import image3 from '../../../Images/twist-front-transparent.png';

import '../../Shoulder_Group.css';


const Shoulder_Group = () => {
  
  return (
    <div cstyle={{ backgroundColor: 'black' }}>

        <Navbar/>

        {/* Back Icon */}
        {/* <div className='go-back-icon'>
        <Link to='/'> <span className='general-instructions-drop-down' ><UilArrowCircleLeft size="30" color="#000" /></span></Link>
        </div> */}

        <div className='title-inside-page-wrap'>
            <div className='title-inside-page'>Push</div>
            <div className='description'>Chest, Triceps and Shoulders workout involves</div>
            <div className='description'>pushing movements, do atleast 1 workout for each  muscle group.</div>
        </div>

        {/* Muscle Card */}

      <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image1} alt="Image" />
            </div>
            
            <div className='muscle-card-name'>
                <Link to='/muscleMovementChestGroupPush' >Chest</Link> 
            </div>
            
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleMovementChestGroupPush' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
        

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image2} alt="Image" />
            </div>
            <div className='muscle-card-name'>
                <Link to='/muscleMovementTricepsGroupPush' >Tricep</Link>
            </div>
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleMovementTricepsGroupPush' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image3} alt="Image" />
            </div>
            <div className='muscle-card-name'>
            <Link to='/muscleMovementShouldersGroupPush' >Shoulders</Link>
            </div>
            <div className='muscle-card-forward-icon'>
            <Link to='/muscleMovementShouldersGroupPush' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
    </div>
  )
}

export default Shoulder_Group