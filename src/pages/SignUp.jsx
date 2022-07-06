import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Head from "../components/Head";
import { UserAuth } from "../context/AuthContext";
import './checkbox.css'
const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const {user,signUp} = UserAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate('/')
    } catch (error) {
      setError(error)
      console.log(error);
    }
  };
    
  return (
      <Head title={'signUp page'}>
            <div>
      <div
        className={`absolute inset-0   bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]`}
      >
        <div className=" absolute inset-0 bg-black/40"></div>
        <div className="w-[320px] lg:w-[380px] rounded-md pb-16 pt-8 bg-black/90 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="w-[80%]   mx-auto flex justify-center  mt-16">
            <form onSubmit={handleSubmit} action="" className=" space-y-8">
            <h1 className={`${error && 'bg-red-500 h-10  leading-9 rounded text-center'}`}>{error && error.message}</h1>
              <h2 className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
                Sign Up
              </h2>
              <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email..."
                className="  mx-auto py-2 w-full rounded outline-none bg-slate-600 text-white px-2"
              />
              <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="password..."
                className=" mx-auto py-2 w-full rounded outline-none bg-slate-600 text-white px-2"
              />
              <button type="submit" className=" text-white rounded font-bold bg-red-600 py-2 w-full">
                Sign Up
              </button>
              <div className=" w-full flex justify-between">
                <div>
                  <input id="check" className=" appearance-none rounded w-[15px] h-[15px] bg-slate-400" type="checkbox" />
                  <label className="text-slate-300 ml-2" htmlFor="check">remember me</label>
                
                 
                </div>
                <a className=" text-slate-300">Need help?</a>
              </div>
              <div className=" whitespace-nowrap text-sm">
                <p className="text-[#bbbbbb] inline-block">Already subscribed to Netflix?</p> <Link to={'/signin'} className="ml-1 font-bold text-white">Sign In</Link>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>    <div>
      <div
        className={`absolute inset-0   bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]`}
      >
        <div className=" absolute inset-0 bg-black/40"></div>
        <div className="w-[320px] lg:w-[380px] rounded-md pb-16 pt-8 bg-black/90 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="w-[80%]   mx-auto flex justify-center  mt-16">
            <form onSubmit={handleSubmit} action="" className=" space-y-8">
            <h1 className={`${error && 'bg-red-500 h-10  leading-9 rounded text-center'}`}>{error && error.message}</h1>
              <h2 className="text-white font-bold text-xl md:text-2xl lg:text-3xl">
                Sign Up
              </h2>
              <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="email..."
                className="  mx-auto py-2 w-full rounded outline-none bg-slate-600 text-white px-2"
              />
              <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
                type="text"
                placeholder="password..."
                className=" mx-auto py-2 w-full rounded outline-none bg-slate-600 text-white px-2"
              />
              <button type="submit" className=" text-white rounded font-bold bg-red-600 py-2 w-full">
                Sign Up
              </button>
              <div className=" w-full flex justify-between">
                <div>
                  <input id="check" className=" appearance-none rounded w-[15px] h-[15px] bg-slate-400" type="checkbox" />
                  <label className="text-slate-300 ml-2" htmlFor="check">remember me</label>
                
                 
                </div>
                <a className=" text-slate-300">Need help?</a>
              </div>
              <div className=" whitespace-nowrap text-sm">
                <p className="text-[#bbbbbb] inline-block">Already subscribed to Netflix?</p> <Link to={'/signin'} className="ml-1 font-bold text-white">Sign In</Link>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
      </Head>
  );
};

export default SignUp;
