import React from 'react';

const AddReview = () => {
     return (
          <div className='max-w-screen-lg mx-auto'>
               <form className='my-3 mx-2'>
                    <h2 className='text-4xl font-semibold text-center'>You are about to order:</h2>
                    <h4 className='text-xl text-center mb-2'>Price: </h4>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                         <input type="text" name='firstName' placeholder="first name"  className="input input-bordered w-full" required/>
                         <input type="text" name='lastName' placeholder="last name" className="input input-bordered w-full" />
                         <input type="text"  name='phone' placeholder="your phone" className="input input-bordered w-full" required/>
                         <input type="text" name='email' placeholder="your email" className="input input-bordered w-full" readOnly/>
                    </div>
                    <textarea name='message' className="textarea textarea-bordered w-full my-4" placeholder="Your review"></textarea>
                    <button type='submit' className='btn btn-warning mr-2'>Add review</button>
                    
               </form>
          </div>
          
     );
};

export default AddReview;