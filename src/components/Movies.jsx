import React from 'react';
import { Link } from 'react-router-dom';

const Movies = ({item}) => {
    // w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2
    return (
        <Link to={`/movie/${item.id}`}  className=' relative  inline-block  box-border  overflow-hidde group   hover:border-2   hover:z-[20]    sm:w-[200px] md:w-[240px] lg:w-[280px]  cursor-pointer  '>
            <img className='w-full h-full  ' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt="" />
            <div className=' absolute   inset-0 w-full  h-full hover:bg-black/50 transition duration-150  '></div>
            <div className="  pointer-events-none absolute text-sm duration-150 transition opacity-0 group-hover:opacity-100  max-w-[150px] whitespace-pre-wrap  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white font-bold ">{item.title}</div>
        </Link>
    );
};

export default Movies;