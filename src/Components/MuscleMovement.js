import React, { useState } from 'react';
import './MuscleMovement.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './MuscleGroupSwiper.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import clickSound from '../Audio/screen-tap-38717.mp3';

const MuscleMovement = () => {

  const [audio] = useState(new Audio(clickSound));
  const playClickSound = () => {
    audio.play();
  }

  return (
    <div>
      {/* --------Muscle movement focused Workout section------------------------- */}

      <span>
        <div className='muscle_movement_wrap'>
          <div className='muscle_movement_title_wrap'>
            <div className='title_muscle_movement_line_1'>Muscle movement -</div>
            <div className='title_muscle_movement_line_2'>Focused</div>
            <div className='title_muscle_movement_line_3'>Workouts</div>
          </div>
        </div>

        <div className='div_musclemovement_card_wrap'>
          <div className='card_movement desktop_push'>Push</div>
          <div className='card_movement desktop_pull'>Pull</div>
          <div className='card_movement desktop_legs'>Legs</div>
        </div>

        <span className='mobile_musclemovement_card_wrap'>

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
              <motion.div className='mobile_card_movement mobile_push'>
                <Link to='/muscleMovementPushGroup'>Push</Link>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div className='mobile_card_movement mobile_pull'>
                <Link to='/muscleMovementPullGroup'>Pull</Link>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div className='mobile_card_movement mobile_legs'>
                <Link to='/muscleGroupLegsGroup'>Legs</Link>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div className='mobile_card_movement mobile_push'>
                <Link to='/muscleMovementPushGroup'>Push</Link>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div className='mobile_card_movement mobile_pull'>
                <Link to='/muscleMovementPullGroup'>Pull</Link>
              </motion.div>
            </SwiperSlide>
            <SwiperSlide>
              <motion.div className='mobile_card_movement mobile_legs'>
                <Link to='/muscleGroupLegsGroup'>Legs</Link>
              </motion.div>
            </SwiperSlide>

          </Swiper>
        </span>
      </span>
    </div>
  )
}

export default MuscleMovement;
