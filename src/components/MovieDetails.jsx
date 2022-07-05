import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const [movieDetail, setMovieDetail] = useState({})
    const params = useParams()
    console.log(params.id);

    useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=0cd6fcb664bddf864c893bb6e09b1619&language=en-US`)
    .then(res => setMovieDetail(res.data))
  
    }, [params.id])

        console.log(movieDetail);

    return (
        <div className='pt-28 flex justify-center items-center flex-col w-full  '>
            <div className='  w-[80%]  mx-auto  sm:h-[600px]  flex items-center  my-10 justify-center  flex-col'>
                <img  className=' w-[80%]  h-[100%]  object-cover rounded' src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`} alt="" />
                
            </div>
           <div className='w-[65%] text-left space-y-3 '>
           <h1  className='text-white text-lg md:text-3xl lg:text-4xl   font-bold    '>{movieDetail.title}</h1>
            <p className=' inline-block text-[#cecece] '>
                genres  :
                  {
              movieDetail.genres &&    movieDetail.genres.map((item,index) => {
                    
                   return <span key={index} className='text-red-500 px-2 pl-3 text-sm'>{`${item.name}` }   {index !== movieDetail.genres.length  - 1? ',' :''}   </span>
                   //Adventure
                   
                })
            }    
            </p>     
    
          
            <p className='text-white'>{movieDetail.overview}</p>
           </div>
           
           
            
            
        </div>
    );
};

export default MovieDetails;