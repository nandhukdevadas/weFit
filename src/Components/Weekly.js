import React from 'react';
import {Link} from 'react-router-dom';
import './Weekly.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCoverflow, Pagination, Navigation} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Weekly = () => {
  return (
    <div>
        {/* -----------weekly plan focused Workout section-------------------- */}

      <span>
      <div className='weekly_workout_wrap'>
        <div className='weekly_workout_title_wrap'>
          <div className='title_weekly_workout_line_1'>Weekly - workout</div>
          <div className='title_weekly_workout_line_2'>Plan</div>
        </div>
      </div>

      

      <div className='div_weekly_workout_card_wrap'>
          <div className='card_weekly desktop_monday'>
            <div className='card_weekly_line_wrap'>
              <span className='card_weekly_line_1'>Monday</span>
              <span className='card_weekly_line_2'>Back &</span>
              <span className='card_weekly_line_2'>Biceps</span>
            </div>
          </div>

          <div className='card_weekly desktop_tuesday'>
            <div className='card_weekly_line_wrap'>
              <span className='card_weekly_line_1'>Tuesday</span>
              <span className='card_weekly_line_2'>Chest &</span>
              <span className='card_weekly_line_2'>Triceps</span>
            </div>
          </div>

          <div className='card_weekly desktop_wednesday'>
          <div className='card_weekly_line_wrap'>
              <span className='card_weekly_line_1'>Wednesday</span>
              <span className='card_weekly_line_2'>Legs &</span>
              <span className='card_weekly_line_2'>Abs</span>
            </div>
          </div>

          <div className='card_weekly desktop_thursday'>
          <div className='card_weekly_line_wrap'>
              <span className='card_weekly_line_1'>Thursday</span>
              <span className='card_weekly_line_2'>Back &</span>
              <span className='card_weekly_line_2'>Biceps</span>
            </div>
          </div>

          <div className='card_weekly desktop_friday'>
          <div className='card_weekly_line_wrap'>
              <span className='card_weekly_line_1'>Friday</span>
              <span className='card_weekly_line_2'>Chest &</span>
              <span className='card_weekly_line_2'>Triceps </span>
            </div>
          </div>

          <div className='card_weekly desktop_saturday'>
          <div className='card_weekly_line_wrap'>
              <span className='card_weekly_line_1'>Saturday</span>
              <span className='card_weekly_line_2'>Legs &</span>
              <span className='card_weekly_line_2'>Shoulder</span>
            </div>
          </div>

      </div>


      

      <span className='mobile_weekly_workout_card_wrap'>

        {/* <Swiper
          spaceBetween={0}
          slidesPerView={2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        > */}

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

        <SwiperSlide>
        <div className='mobile_card_weekly mobile_monday'>
            <div className='mobile_card_weekly_line_wrap'>
            <Link to='/weeklyWorkoutMonday'>
              <span className='card_weekly_line_1'>Monday</span>
              <span className='card_weekly_line_2'>Back &</span>
              <span className='card_weekly_line_2'>Biceps</span>
            </Link>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className='mobile_card_weekly mobile_tuesday'>
            <div className='mobile_card_weekly_line_wrap'>
              <Link to='/weeklyWorkoutTuesday'>
              <span className='card_weekly_line_1'>Tuesday</span>
              <span className='card_weekly_line_2'>Chest &</span>
              <span className='card_weekly_line_2'>Triceps</span>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='mobile_card_weekly mobile_wednesday'>
          <div className='mobile_card_weekly_line_wrap'>
            <Link to='weeklyWorkoutWednesday'>
              <span className='card_weekly_line_1'>Wednesday</span>
              <span className='card_weekly_line_2'>Legs &</span>
              <span className='card_weekly_line_2'>Abs</span>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='mobile_card_weekly mobile_thursday'>
          <div className='mobile_card_weekly_line_wrap'>
          <Link to='/BackGroupForMonThr'>
              <span className='card_weekly_line_1'>Thursday</span>
              <span className='card_weekly_line_2'>Back &</span>
              <span className='card_weekly_line_2'>Biceps</span>
              </Link>
            </div>
          
          </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='mobile_card_weekly mobile_friday'>
          <div className='mobile_card_weekly_line_wrap'>
            <Link to='/weeklyWorkoutTuesday'>
              <span className='card_weekly_line_1'>Friday</span>
              <span className='card_weekly_line_2'>Chest &</span>
              <span className='card_weekly_line_2'>Triceps</span>
              </Link>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className='mobile_card_weekly mobile_saturday'>
          <div className='mobile_card_weekly_line_wrap'>
            <Link to='/weeklyWorkoutSaturday'>
              <span className='card_weekly_line_1'>Saturday</span>
              <span className='card_weekly_line_2'>Legs &</span>
              <span className='card_weekly_line_2'>Shoulders</span>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        </Swiper>
      </span>
      </span>
    </div>
  )
}

export default Weekly