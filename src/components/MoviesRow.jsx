import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movies from './Movies';
import { ArrowCircleLeftIcon,ArrowCircleRightIcon } from '@heroicons/react/solid'
import { useParams } from 'react-router-dom';
const MoviesRow = ({dataUrl,title,rowId}) => {
    const params = useParams()
    console.log(params.id);
    const [movies, setMovies] = useState([])

        useEffect(() => {
            axios.get(dataUrl)
            .then(res => setMovies(res.data.results))
        }, [dataUrl])

        
        const sliderLeft = () => {
            var slider = document.querySelector('#slider' + rowId)
           slider.scrollLeft  = slider.scrollLeft + 500;
        }
        const sliderRight = () => {
            var slider = document.querySelector('#slider' + rowId)
           slider.scrollLeft  = slider.scrollLeft - 500;
        }

    return (
        <>
            <div className='my-5'>
                <h2   className='text-white pl-10 font-bold italic my-3'>{title}</h2>
                <div  className='    '>
                    <div className='relative'>
                                                <ArrowCircleLeftIcon onClick={sliderRight} className=' z-[21] absolute top-[50%] translate-y-[-50%]  cursor-pointer  left-5  h-8 text-red-500 bg-black rounded-full'/>
                        <div  id={`slider${rowId}`} className='scroll-smooth slider whitespace-nowrap  overflow-x-scroll w-full h-full scrollbar-hide z-10' >
                        {
                        movies.length && movies.map(result => (
                            <Movies item={result} key={result.id}/>
                        ))
                    }
                        </div>
       <ArrowCircleRightIcon onClick={sliderLeft} className=' z-[21] absolute top-[50%] translate-y-[-50%]  cursor-pointer  right-5  h-8 text-red-500 bg-black rounded-full'/>

                    </div>
                       
                </div>
            </div>
        </>
    );
};

export default MoviesRow;