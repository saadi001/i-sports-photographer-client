import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
     const service = useLoaderData();
     const {title, position,price,description,img,_id } = service;
     return (
          <div className='max-w-screen-lg mx-auto my-3 rounded shadow-lg sm:h-auto'>
               <section className='grid gap-3 grid-cols-1 md:grid-cols-3 mx-2'>
                    <div className='h-72'>
                         <img className='h-72 w-full object-cover rounded' src={img} alt="" />
                    </div>
                    <div className='col-span-2'>
                         <p className='text-3xl font-bold'>{title}({position})</p>
                         <p className='my-3'>{description}</p>
                         <p className='text-lg font-semibold'>price: ${price}</p>
                    </div>

               </section>
          </div>
     );
};

export default ServiceDetails;