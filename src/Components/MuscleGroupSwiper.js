import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MuscleGroupSwiper.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MuscleGroupSwiper = () => {
  return (
    <div>
      <span className='muscle_group_wrap'>

        {/* Title */}
        <div className='musclegroupBody'>
          <div className='title_muscle_group_line_1'>Muscle group -</div>
          <div className='title_muscle_group_line_2'>Focused</div>
          <div className='title_muscle_group_line_3'>Workouts</div>
        </div>

        {/* Desktop Muscle Group Card */}

        <div className='div_musclegroup_card_wrap'>
          <div className='card desktop_shoulder'><Link to='/muscleGroupShoulder'>Shoulder</Link></div>
          <div className='card desktop_back'><Link to='/muscleGroupBack'>Back</Link></div>
          <div className='card desktop_chest'><Link to='/muscleGroupChest'>Chest</Link></div>
          <div className='card desktop_biceps'><Link to='/muscleGroupBiceps'>Biceps</Link></div>
          <div className='card desktop_triceps'><Link to='/muscleGroupTriceps'>Triceps</Link></div>
          <div className='card desktop_abs'><Link to='/muscleGroupAbs'>Abs</Link></div>
          <div className='card desktop_legs'><Link to='/muscleGroupLegs'>Legs</Link></div>
        </div>

        {/* Muscle Group Mobile Card swiper */}

        <span className='mobile_musclegroup_card_wrap'>

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2.5}
            coverflowEffect={{
              rotate: 20,
              stretch: 1,
              depth: 100,
              modifier: 2.5,
              slideShadows: false
            }}
            modules={[EffectCoverflow]}
            className="mySwiper"
            loop={true}
          >

            {/* Animated SwiperSlides */}

            <SwiperSlide>
              <motion.div
                className='mobile_card mobile_shoulder'
                whileTap={{ scale: 0.8 }}
                transition={{ bounceDamping: 100, bounceStiffness: 5 }}
              >
                <Link to='/muscleGroupShoulderGroup'>Shoulder</Link>
              </motion.div>
            </SwiperSlide>
            
            <SwiperSlide>
              <motion.div
                className='mobile_card mobile_back'
                whileTap={{ scale: 0.8 }}
                transition={{ bounceDamping: 100, bounceStiffness: 5 }}
              >
                <Link to='/muscleGroupsBackGroup'>Back</Link>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                className='mobile_card mobile_chest'
                whileTap={{ scale: 0.8 }}
                transition={{ bounceDamping: 100, bounceStiffness: 5 }}
              >
                <Link to='/muscleGroupsChestGroup'>Chest</Link>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                className='mobile_card mobile_biceps'
                whileTap={{ scale: 0.8 }}
                transition={{ bounceDamping: 100, bounceStiffness: 5 }}
              >
                <Link to='/muscleGroupBicepsGroup'>Biceps</Link>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                className='mobile_card mobile_triceps'
                whileTap={{ scale: 0.8 }}
                transition={{ bounceDamping: 100, bounceStiffness: 5 }}
              >
                <Link to='/muscleGroupTricepsGroup'>Triceps</Link>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                className='mobile_card mobile_abs'
                whileTap={{ scale: 0.8 }}
                transition={{ bounceDamping: 100, bounceStiffness: 5 }}
              >
                <Link to='/muscleGroupAbsGroup'>Abs</Link>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div
                className='mobile_card mobile_legs'
                whileTap={{ scale: 0.8 }}
                transition={{ bounceDamping: 100, bounceStiffness: 5 }}
              >
                <Link to='/muscleGroupLegsGroup'>Legs</Link>
              </motion.div>
            </SwiperSlide>

          </Swiper>
        </span>
      </span>
    </div>
  )
}

export default MuscleGroupSwiper;
