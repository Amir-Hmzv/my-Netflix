import React, { useEffect, useState } from 'react';
import axios from 'axios'
import requests from '../Requests';
import Slider from './Slider';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation,Autoplay } from "swiper";
import "swiper/css/navigation";
const Landing = () => {
        const [image, setimage] = useState([])
    useEffect(() => {
        axios.get(requests.requestPopular)
        .then(res => setimage(res.data.results))
        
    }, [])

       

    const PartImages = image.splice(Math.floor(Math.random()  * image.length ),4).map(item => item)
    
    return (
        <>
            <div className='z-[30]'>
            <Swiper  autoplay={{delay:5000,disableOnInteraction: false}} speed={700}  navigation={false} loop={true} modules={[Navigation,Autoplay]} className="mySwiper" >
            {PartImages.map((result) => (
              <SwiperSlide key={result.id}>
                <Slider result={result}  />
              </SwiperSlide>
        ))}
             </Swiper>
         
              
                
              </div>      
              
           
               
        </>
    );
};

export default Landing;