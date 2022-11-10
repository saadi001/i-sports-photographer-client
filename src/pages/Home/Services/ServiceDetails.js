import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import SingleReviewSingleItem from '../../SingleReview/SingleReviewSingleItem';

const ServiceDetails = () => {
     const services = useLoaderData();
     // const {user} = useContext(AuthContext)
     const [reviews, setReviews] = useState([]);
     const {title, position,price,description,img,_id,rating,service } = services;

     useEffect(()=>{
          fetch(`http://localhost:5000/reviews?service=${service}`)
          .then(res =>res.json())
          .then(data => setReviews(data))

     },[service])

     const updateReview = (id) =>{
          fetch(`http://localhost:5000/reviews/${id}`,{
               method: "PUT",
               headers: {
                    'content-type' : 'application/json'
               },
               body: JSON.stringify(reviews)

          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               if(data.modifiedCount > 0){
                    toast.success('Updated successfully')
               }
          })
     }

     const handleDelete = (id) =>{
          const preceed = window.confirm('Are you sure?')
          if(preceed){
               fetch(`http://localhost:5000/reviews/${id}`,{
                    method: "DELETE"
               })
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    if(data.deletedCount>0){
                         toast.success('Deleted successfully')
                         const remaining = reviews.filter(rev => rev._id !== id)
                         setReviews(remaining)
                    }
               })
          }
     }


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
                              reviews.map(r => <SingleReviewSingleItem
                                   key={r._id}
                                   r={r}
                                   handleDelete={handleDelete}
                              ></SingleReviewSingleItem>)
                         }
                    </div>
               </section>
          </div>
     );
};

export default ServiceDetails;