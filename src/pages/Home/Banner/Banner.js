import React from 'react';
import './Banner.css';


const Banner = () => {
     return (
          <div className='banner h-72 sm:h-screen bg-cover bg-no-repeat flex justify-start items-center mb-5'>
              

               <div className='ml-4'>
               <p className='text-white text-4xl md:text-6xl font-bold font-mono '>Sports team <br className='sm:hidden'/> and <br className='hidden sm:inline'/> individual photography</p><br />
               <button className='text-white bg-teal-600 hover:bg-teal-700 px-2 py-1 border border-white'>Contact Me</button>
               </div>

          </div>
     );
};

export default Banner;