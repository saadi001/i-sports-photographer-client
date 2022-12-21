import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SingleReviewSingleItem = ({ r }) => {
     const { reviewer, email, review, } = r;
     const { user } = useContext(AuthContext);
     console.log(user)


     return (
          <div className='w-full grid grid-cols-1 sm:grid-cols-3 border shadow-lg p-2 my-5 rounded'>
               <div className='flex'>

                    <div>
                         <p className='text-xl font-bold'>{reviewer}</p>
                         <p className='text-sm text-slate-500'>{email}</p>
                    </div>
               </div>
               <div className='col-span-2'>
                    <p>{review}</p>
               </div>


          </div>
     );
};

export default SingleReviewSingleItem;