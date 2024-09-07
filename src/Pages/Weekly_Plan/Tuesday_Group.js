import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { UilAngleRightB, UilArrowCircleLeft } from '@iconscout/react-unicons';

import Navbar from '../../Components/Navbar';

import image1 from '../../Images/triceps-transparent.png';
import image2 from '../../Images/chest-transparent.png';

import '../Shoulder_Group.css';


const Shoulder_Group = () => {
  
  return (
    
    <div cstyle={{ backgroundColor: 'black' }}>

        <Navbar/>

        {/* Back Icon */}

        <div className='go-back-icon'>
            <Link to='/'> <span className='general-instructions-drop-down'><UilArrowCircleLeft size="30" color="#000" /></span></Link>
        </div>

        <div className='title-inside-page-wrap'>
            <div className='title-inside-page'>Tuesday & Friday</div>
            <div className='description'>On tuesday and friday, focus on</div>
            <div className='description'>chest and triceps.</div>
        </div>

        {/* Muscle Card */}

      <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image2} alt="Image" />
            </div>
            
            <div className='muscle-card-name'>
                <Link to='/muscleGroupsChestGroup' >Chest</Link> 
            </div>
            
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupsBackGroup' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
        

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image1} alt="Image" />
            </div>
            <div className='muscle-card-name'>
                <Link to='/muscleGroupTricepsGroup' >Triceps</Link>
            </div>
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupBicepsGroup' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>

    </div>
  )
}

export default Shoulder_Group