import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SingleReview from '../SingleReview/SingleReview';

const MyReviews = () => {
     const { user } = useContext(AuthContext);
     const [reviews, setReviews] = useState([])

     useEffect(() => {
          fetch(`http://localhost:5000/reviews?email=${user?.email}`)
               .then(res => res.json())
               .then(data => setReviews(data))

     }, [user?.email])

     const handleDelete = (id) => {
          const preceed = window.confirm('Are you sure?')
          if (preceed) {
               fetch(`http://localhost:5000/reviews/${id}`, {
                    method: "DELETE"
               })
                    .then(res => res.json())
                    .then(data => {
                         console.log(data)
                         if (data.deletedCount > 0) {
                              toast.success('Deleted successfully')
                              const remaining = reviews.filter(rev => rev._id !== id)
                              setReviews(remaining)
                         }
                    })
          }
     }


     return (
          <div className='max-w-screen-lg mx-auto  my-3'>

               {
                    reviews.length === 0 ? <p className='text-center text-2xl font-bold my-2'>No reviews found</p> : <>
                         <p className='text-center font-bold text-xl my-2'>My reviews</p>
                         {reviews.map(r => <SingleReview
                              key={r.service}
                              r={r}
                              handleDelete={handleDelete}
                         ></SingleReview>)}
                    </>
               }
          </div>
     );
};

export default MyReviews;