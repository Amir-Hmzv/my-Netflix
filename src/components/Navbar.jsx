import React, { createContext, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import {FaBars,} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'


export const NavContext = createContext()
const Navbar = () => {

  const [scroll, setScroll] = useState(false)
  const [nav, setNav] = useState(true)  

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  // console.log(user.email)

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
     
    } catch (error) {
      console.log(error);
    }
  };
  const handleLogout2 = async () => {
    try {
      await logOut();
      navigate('/');
      setNav(true)
     
    } catch (error) {
      console.log(error);
    }
  }


    useEffect(() => {
      const handleShadow = () => {
        if (window.scrollY >= 60 ) {
          setScroll(true);
         
        } else {
          setScroll(false);
        
          
          
        }
      };
      window.addEventListener('scroll',  handleShadow);
    }, [])
    console.log(window.scrollY);
  const navRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    let body =  document.body
       if (nav == false) {
         body.style.overflowY = 'hidden'
       }else{
        body.style.overflowY = 'auto'
       }
  }, [nav])

      useEffect(() => {
          var lastScrollTop = 0
            window.addEventListener('scroll' ,() => {
              var scrollTop = window.pageYOffset | document.documentElement.scrollTop
                if (scrollTop > lastScrollTop) {
                    navRef.current.style.top = '-80px'
                } else{
                  navRef.current.style.top = '0'
                }
                lastScrollTop = scrollTop

            })
      }, [])


    return (
      <>

                <div ref={navRef}   className={` transition duration-100    fixed z-[23] left-0 top-0 flex justify-between items-center w-full  h-20  px-3 sm:px-4 ${scroll && 'bg-black'} `}>
                <div className='  w-full  mx-auto bg-whit '>
                <Link to={'/'} className=' uppercase text-red-500 text-2xl md:text-4xl   font-bold'>netflix</Link>
            </div>
            
          {
            user ?
            <>
                 <ul className={`md:flex justify-between items-center space-x-10  cursor-pointer  hidden   ${scroll ? 'italic' : 'italic font-bold'} uppercase text-red-600  `}>
              <li>Movies</li>
              <li>Shows</li>
              <li>Series</li>
              <li onClick={handleLogout} className={`p-1 md:px-2 md:py-2 rounded-md font-bold whitespace-nowrap bg-red-500 text-white`}>LogOut</li>
             
           
            </ul>
            <div className='block md:hidden z-[99] list-none  cursor-pointer' >{nav && <FaBars onClick={() => setNav(false)}   color='red' size={30}/>}</div>
              <div ref={scrollRef} className={` fixed z-[2222222222222222222222222222]  overscroll-none scrollbar-hide md:hidden  overflow-y-hidden w-[100%] h-screen transition-all  duration-200 delay-75  ${nav ? ' right-[-100%]':' right-[0%]'} top-0 bg-black `}>
            <li className=' absolute right-5 top-5 list-none mb-5  md:hidden cursor-pointer z-[106]'>{<AiOutlineClose onClick={() => setNav(true)} className='z-[2000]'  color='red' size={30}/>}</li>

                <ul className='text-white flex justify-center h-full items-center flex-col space-y-10 font-bold text-xl '>
                <Link to={'/'} onClick={() => setNav(true)} className=' cursor-pointer'>Movies</Link>
              <li to={'/'} onClick={() => setNav(true)} className=' cursor-pointer'>Shows</li>
              <li to={'/'} onClick={() => setNav(true)} className=' cursor-pointer'>Series</li>
              <li   to={'/'}  onClick={handleLogout2 } className={`p-1  cursor-pointer md:px-2 md:py-2 rounded-md font-bold whitespace-nowrap bg-red-500 text-white`}>LogOut</li>
              
                </ul>
              </div>
            
          
            </>
            
            :
            <div className='flex space-x-2'>
            <Link to={'/signin'} className=' p-1 md:px-2 md:py-2 rounded-md font-bold whitespace-nowrap  text-white'>Login</Link>
          <Link to={'/signup'} className='p-1 md:px-2 md:py-2 rounded-md font-bold whitespace-nowrap bg-red-500 text-white'>Sing Up</Link>
       
            </div>
          }
          
                </div>
           
                </>
    );
};

export default Navbar;