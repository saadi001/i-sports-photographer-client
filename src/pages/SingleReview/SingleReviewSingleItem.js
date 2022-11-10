import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SingleReviewSingleItem = ({ r, handleDelete }) => {
     const { reviewer, email, review, _id } = r;
     const { user} = useContext(AuthContext);
     console.log('khati user', user)


     return (
          <div className='w-full grid grid-cols-1 sm:grid-cols-4 border shadow-lg p-2 my-5 rounded'>
               <div className='flex'>
                    <div className='h-4'>
                         <img src={user?.photoURL} alt="" />
                    </div>
                    <div>
                    <p className='text-xl font-bold'>{reviewer}</p>
                    <p className='text-sm text-slate-500'>{email}</p>
                    </div>
               </div>
               <div className='col-span-2'>
                    <p>{review}</p>
               </div>
               <div>
                    <Link to={`/update/${_id}`}><button className='btn btn-info btn-sm mr-2'>Update</button></Link>
                    <button onClick={() => handleDelete(_id)} className='btn btn-error btn-sm'>delete</button>
               </div>

          </div>
     );
};

export default SingleReviewSingleItem;