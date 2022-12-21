import React from 'react';
import img from '../../assets/notfound.svg'

const NotFound = () => {
     return (
          <div className='w-full h-screen flex justify-center items-center'>
               <div className='h-1/2 w-1/2'>
                    <img className='w-full h-full' src={img} alt="" />
               </div>
               
          </div>
     );
};

export default NotFound;