import React from 'react';
import { Link } from 'react-router-dom';

const SingleReviewSingleItem = ({r,handleDelete}) => {
     const {reviewer,email,review,_id} = r;

     
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
                    <Link to={`/update/${_id}`}><button  className='btn btn-info btn-sm mr-2'>Update</button></Link>
                    <button onClick={()=>handleDelete(_id)} className='btn btn-error btn-sm'>delete</button>
               </div>
               
          </div>
     );
};

export default SingleReviewSingleItem;