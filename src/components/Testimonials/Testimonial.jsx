import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

const Testimonial = () => {
    const clients = [
        {
            img: profilePic1,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quod voluptates. Inventore alias, voluptas veritatis voluptates, eaque corporis nobis et nulla similique saepe non! Laborum nesciunt provident reprehenderit sint autem?'
        },
        {
            img: profilePic2,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quod voluptates. Inventore alias, voluptas veritatis voluptates, eaque corporis nobis et nulla similique saepe non! Laborum nesciunt provident reprehenderit sint autem?'
        },
        {
            img: profilePic3,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quod voluptates. Inventore alias, voluptas veritatis voluptates, eaque corporis nobis et nulla similique saepe non! Laborum nesciunt provident reprehenderit sint autem?'
        },
        {
            img: profilePic4,
            review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, quod voluptates. Inventore alias, voluptas veritatis voluptates, eaque corporis nobis et nulla similique saepe non! Laborum nesciunt provident reprehenderit sint autem?'
        },
    ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Client </span>
            <span>Client </span>
            <span>Client </span>
            <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
        </div>
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
            {clients.map((clients,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={clients.img} alt="" />
                        <span>{clients.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonial