import React from 'react';

const SingleReview = ({ r,handleDelete }) => {
     const { reviewer, email, review, serviceName, _id } = r;
     console.log(r)
     return (
          // my review 
          <div className='w-full grid grid-cols-1 sm:grid-cols-4 border shadow-lg p-2 my-5 rounded'>
               <div>

                    <p className='text-xl font-bold'>{reviewer}</p>
                    <p className='text-sm text-slate-500'>{email}</p>
               </div>
               <div className='col-span-2'>
                    <p className='text-lg font-bold'>{serviceName}</p>
                    <p className=''>review: {review}</p>
               </div>
               <div>
                    <button className='btn btn-info mr-2'>update</button>
                    <button onClick={()=>handleDelete(_id)} className='btn btn-error'>delete</button>

               </div>

          </div>
     );
};

export default SingleReview;