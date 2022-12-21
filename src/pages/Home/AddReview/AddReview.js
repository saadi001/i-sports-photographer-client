import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const AddReview = () => {
     const {title,position,_id} = useLoaderData();
     const {user} = useContext(AuthContext);

     const handleReview = (event) =>{
          event.preventDefault()
          const form = event.target;
          const name = form.name.value;
          const review = form.review.value;
          const email = user?.email || 'unregisted'

          const reviews = {
               service: _id,
               serviceName: title,
               reviewer: name,
               email,
               review
          }
          
          fetch('https://i-sports-photographer-server.vercel.app/reviews',{
               method: 'POST',
               headers: {
                    'content-type' : 'application/json'
               },
               body: JSON.stringify(reviews)
          })
          .then(res => res.json())
          .then(data =>{
               console.log(data)
               toast.success('Review added successfully')
               form.reset();
          })

}
     
     return (
          <div className='max-w-screen-lg mx-auto'>
               <form onSubmit={handleReview} className='my-3 mx-2'>
                    <h2 className='text-3xl font-semibold text-center my-4'>You are about to review our <br /><span className='text-teal-500'>{title}({position})</span></h2>
                    
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                         <input type="text" name='name' placeholder="name"  className="input input-bordered w-full" required/>
                                                  
                         <input type="text" name='email' placeholder="your email" className="input input-bordered w-full" defaultValue={user?.email} readOnly/>
                    </div>
                    <textarea name='review' className="textarea textarea-bordered w-full my-4" placeholder="Your review"></textarea>
                    <button type='submit' className='btn btn-warning mr-2'>Add review</button>
                    
               </form>
          </div>
          
     );
};

export default AddReview;