import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import SingleReview from '../../SingleReview/SingleReview';

const ServiceDetails = () => {
     const service = useLoaderData();
     const {user} = useContext(AuthContext)
     const [reviews, setReviews] = useState([]);
     const {title, position,price,description,img,_id,rating } = service;

     useEffect(()=>{
          fetch(`http://localhost:5000/reviews?_id=${_id}`)
          .then(res =>res.json())
          .then(data => setReviews(data))

     },[_id])

     return (
          <div className='max-w-screen-lg mx-auto my-3  sm:h-auto'>
               <section className='grid gap-3 grid-cols-1 md:grid-cols-3 mx-2 rounded shadow-lg'>
                    <div className='h-72'>
                         <img className='h-72 w-full object-cover rounded' src={img} alt="" />
                    </div>
                    <div className='col-span-2'>
                         <p className='text-3xl font-bold'>{title}({position})</p>
                         <p className='my-3'>{description}</p>
                         <p className='my-3 text-slate-500'>Ratings: {rating}</p>
                         <p className='text-lg font-semibold'>price: ${price}</p>
                    </div>

               </section>
               <section>
                    <div className='w-full flex justify-between items-center p-1 border my-3 mt-5 rounded'>
                         <p className='font-bold px-2'>Reviews</p>
                         <Link to={`/addReview/${_id}`}><button className='btn btn-warning'>Add review</button></Link>
                    </div>
                    <div>
                         {
                              reviews.map(r => <SingleReview
                                   key={r._id}
                                   review={r}
                              ></SingleReview>)
                         }
                    </div>
               </section>
          </div>
     );
};

export default ServiceDetails;