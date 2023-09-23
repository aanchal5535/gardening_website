import React  from 'react';
import './offers.css';
import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import {AiOutlineArrowRight} from 'react-icons/ai';

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";


const data=[
    {
        head:'Build a garden',
        text:'Build a gardern according to your needs and desire',
        lastline:'Build now'
    },
    {
        head:'Build a garden',
        text:'Build a gardern according to your needs and desire',
        lastline:'Build now'
    },
    {
        head:'Build a garden',
        text:'Build a gardern according to your needs and desire',
        lastline:'Build now'
    },
    {
        head:'Build a garden',
        text:'Build a gardern according to your needs and desire',
        lastline:'Build now'
    },
    {
        head:'Build a garden',
        text:'Build a gardern according to your needs and desire',
        lastline:'Build now'
    },
]

const Offers = () => {
  return (
    <section className="offers">
        <div className="offers-container">
            <div className="offers-info">
                <h2><span style={{color:'#006400'}}>Gardener</span> Offers <span style={{color:'#006400'}}>Solutions</span> to <br/>Your<span style={{color:'#006400'}}> Garden Problems</span> </h2>

            </div>
            <Swiper
        slidesPerView={3}
        spaceBetween={ 40}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            data.map(({head,text,lastline},index)=>{
                return(
                <SwiperSlide key={index} className='offer'>
                 
                <h4 className='offer-head'>{head}</h4>
                <h5 className='offer-text'>{text}</h5>
                <a href="#">{lastline}<AiOutlineArrowRight className='submit-icon'/></a>
            </SwiperSlide>
                )
            })
        }  
      </Swiper>
        </div>
    </section>
  )
}

export default Offers;
