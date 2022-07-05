import React from 'react';
import { SwiperSlide,useSwiper } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'


import "swiper/css";
import { useNavigate } from 'react-router-dom';
const Slider = ({result}) => {
  const router = useNavigate()

  const textOverview  =(text, num) => {
    if (text.length > num) {
        return text.slice(0, num) + '...';
      } else {
        return text;
      }
}


  const swiper = useSwiper();
  return (
    <SwiperSlide  > 
      <div className=' relative'>
        <div className=' absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent'></div>
      <button className='  text-white absolute left-0 top-[50%] translate-y-[-50%]' onClick={() => swiper.slidePrev()}><ChevronLeftIcon className=' h-10 md:h-20  text-red-500'/></button>
      <img  className='    object-cover  h-[50vh]   md:h-[80vh] w-screen' src={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`} alt="" />
      <div className=' absolute top-[35%] left-[20%]'>
        <h2 className='text-white font-bold italic md:text-xl lg:text-4xl'>{result.title}</h2>
        <div className='text-white space-x-4 space-y-3'>
          <button onClick={() => router(`/movie/${result.id}`)} className='bg-white text-black p-1 px-4  md:py-2 md:px-6   '>Play</button>
          <button className='bg-black p-1 px-2    border-[1px] md:py-2 md:px-6  '>Watch Later</button>
        </div>
        <h4 className='text-[#cacaca] mt-1'>release : {result.release_date}</h4>
        <h6 className='text-[#efefef] text-sm sm:text-md md:text-xl  sm:w-[450px]'>{textOverview(result.overview,150)}</h6>
      </div>
      <button  className='   absolute right-0 top-[50%] translate-y-[-50%]' onClick={() => swiper.slideNext()}><ChevronRightIcon  className=' h-10 md:h-20  text-red-500' /></button>

      </div>
      </SwiperSlide>
  );
};

export default Slider;