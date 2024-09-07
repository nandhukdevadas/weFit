import React, {useState} from 'react';
import Navbar from '../Components/Navbar';
import MuscleGroupSwiper from '../Components/MuscleGroupSwiper';
import MuscleMovement from '../Components/MuscleMovement';
import Weekly from '../Components/Weekly';

const Home = () => {
  
  return (
    <div>
        <Navbar/>
        <MuscleGroupSwiper/>
        <MuscleMovement/>
        <Weekly/>
    </div>
  )
}

export default Home