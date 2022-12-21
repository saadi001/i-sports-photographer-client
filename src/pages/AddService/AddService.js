import React from 'react';

const AddService = () => {
     return (
          <div className='max-w-screen-lg mx-auto'>
          <form  className='my-3 mx-2'>
               <h2 className='text-3xl font-semibold text-center my-4'>Add a service</h2>
               
               <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                    <input type="text" name='name' placeholder="Title"  className="input input-bordered w-full" required/>
                                             
                    <input type="file" name='img' placeholder="image" className=" w-full"/>
               </div>
               <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 my-4'>
                    <input type="number" name='price' placeholder="price"  className="input input-bordered w-full" required/>
                                             
                    <input type="number" name='rating' placeholder="Ratings" className="input input-bordered w-full"/>
               </div>
               <textarea name='descrition' className="textarea textarea-bordered w-full my-4" placeholder="Descrition"></textarea>
               <button type='submit' className='btn btn-warning mr-2'>Add Service</button>
               
          </form>
          </div>
     );
};

export default AddService;