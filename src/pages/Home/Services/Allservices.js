import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Allservices = () => {
     const [services,setServices] = useState([]);

     useEffect(()=>{
          fetch('http://localhost:5000/allServices')
          .then(res => res.json())
          .then(data => setServices(data))
     },[])
     return (
          <div className='max-w-screen-lg mx-auto'>
               <p className='text-4xl text-center mt-10 font-bold'>Services</p>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 mx-4 sm:mx-2 md:mx-4'>
               {
                    services.map(service => <SingleService
                    key={service._id}
                    service={service}
                    ></SingleService>)
               }
               </div>
               
          </div>
     );
};

export default Allservices;