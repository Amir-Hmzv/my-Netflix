import React from 'react';
import MoviesRow from '../components/MoviesRow';
import Landing from '../components/Landing';
import requests from '../Requests';
import { UserAuth } from '../context/AuthContext';
import Head from '../components/Head';

const Home = () => {
    const {user} = UserAuth()
    console.log(user);
    return (
        <>
            <Head title={'Home'}>
            <Landing />
      <MoviesRow rowId={1} dataUrl={requests.requestPopular} title={'Popular'}/>
      <MoviesRow rowId={2} dataUrl={requests.requestUpcoming} title={'Up Coming'}/>
      <MoviesRow rowId={3} dataUrl={requests.requestTopRated} title={'Top Rated'}/>
      <MoviesRow rowId={4} dataUrl={requests.requestTrending} title={'Trending'}/>
      <MoviesRow rowId={5} dataUrl={requests.requestHorror} title={'Horror'}/>
            </Head>
        </>
    );
};

export default Home;