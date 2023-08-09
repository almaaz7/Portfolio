import React, { useContext } from 'react'
import './Portfolio.css'
import SideBar from '../../img/sidebar.png';
import AI from '../../img/imageai.png'
import razor from '../../img/razorpay.png'
import keeper from '../../img/keeper.png'
import note from '../../img/note.png'
import Ecommerce from '../../img/ecommerce.png';
import Hoc from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import { themeContext } from '../../Context';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
        <span style={{color: darkMode?'white':''}}>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper 
        spaceBetween={0}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={AI} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={razor} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={keeper} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={note} alt="" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio