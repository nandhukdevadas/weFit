import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { UilAngleRightB, UilArrowCircleLeft } from '@iconscout/react-unicons';

import Navbar from '../../../Components/Navbar';

import image3 from '../../../Images/back-arms-up-transparent.png';

import '../../Shoulder_Group.css';


const Shoulder_Group = () => {
  
  return (
    <div cstyle={{ backgroundColor: 'black' }}>

        <Navbar/>

        {/* Back Icon */}

        {/* <div className='go-back-icon'>
            <Link to='/muscleMovementPullGroup'> <span className='general-instructions-drop-down'><UilArrowCircleLeft size="30" color="#000" /></span></Link>
        </div> */}

        <div className='title-inside-page-wrap'>
            <div className='title-inside-page'>Back</div>
            <div className='description'>has 3 muscle group in total, You must</div>
            <div className='description'>do atleast 1 workout for each group.</div>
        </div>

        {/* Muscle Card */}

      <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image3} alt="Image" />
            </div>
            
            <div className='muscle-card-name'>
                <Link to='/muscleGroupsUpperBack' >Upper Back</Link> 
            </div>
            
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupsUpperBack' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
        

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image3} alt="Image" />
            </div>
            <div className='muscle-card-name'>
                <Link to='/muscleGroupsLats' >Lats</Link>
            </div>
            <div className='muscle-card-forward-icon'>
                <Link to='/muscleGroupsLats' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>

        <div className='muscle-card front-delt-card'>
            <div className='muscle-card-image'>
                <img src={image3} alt="Image" />
            </div>
            <div className='muscle-card-name'>
            <Link to='/muscleGroupsLowerBack' >Lower Back</Link>
            </div>
            <div className='muscle-card-forward-icon'>
            <Link to='/muscleGroupsLowerBack' ><UilAngleRightB size="25" color="#000" /></Link>
            </div>
        </div>
    </div>
  )
}

export default Shoulder_Group