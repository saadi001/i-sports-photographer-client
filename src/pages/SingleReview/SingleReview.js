import React from 'react';

const SingleReview = ({review: r}) => {
     const {reviewer,email,review} = r;
     return (
          <div className='w-full grid grid-cols-1 sm:grid-cols-4 border shadow-lg p-2 my-5 rounded'>
               <div>
                    <p className='text-xl font-bold'>{reviewer}</p>
                    <p className='text-sm text-slate-500'>{email}</p>
               </div>
               <div className='col-span-2'>
                    <p>{review}</p>
               </div>
               <div>
                    
               </div>
               
          </div>
     );
};

export default SingleReview;