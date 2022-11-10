import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SingleReview from '../SingleReview/SingleReview';

const MyReviews = () => {
     const {user} = useContext(AuthContext);
     const [review, setReviews] = useState([])

     useEffect(()=>{
          fetch(`http://localhost:5000/reviews?email=${user?.email}`)
          .then(res =>res.json())
          .then(data => setReviews(data))

     },[user?.email])
     
     
     return (
          <div className='max-w-screen-lg mx-auto text-center text-2xl font-bold my-3'>
               {
                    review.length === 0 ? "No reviews found" : <>
                         {review.map(r => <SingleReview 
                         key={r.service}
                         r={r}
                         ></SingleReview>)}
                    </>
               }
          </div>
     );
};

export default MyReviews;