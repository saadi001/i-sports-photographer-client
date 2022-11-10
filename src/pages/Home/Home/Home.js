import React from 'react';
import Banner from '../Banner/Banner';
import Features from '../Features/Features';
import GetInTouch from '../GetInTouch/GetInTouch';
import Services from '../Services/Services';

const Home = () => {
     return (
          <div className='max-w-screen-lg mx-auto'>
               <Banner></Banner>
               <Services></Services>
               <Features></Features>
               <GetInTouch></GetInTouch>
          </div>
     );
};

export default Home;