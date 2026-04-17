import React from 'react';
import Banner from '../Component/HomePages/Banner';
import Count from '../Component/HomePages/Count';
import AllFriends from '../Component/AllFriends';

const Home = () => {
  return (
    <div className='max-w-11/12 mx-auto'>
      <Banner></Banner>
      <Count></Count>
      <AllFriends></AllFriends>
    </div>
  );
};

export default Home;
