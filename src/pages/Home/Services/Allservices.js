import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';
import SingleService from './SingleService';

const Allservices = () => {
     // const [services,setServices] = useState([]);

     // useEffect(()=>{
     //      fetch('https://i-sports-photographer-server.vercel.app/allServices')
     //      .then(res => res.json())
     //      .then(data => setServices(data))
     // },[])
     const {data:services, isLoading} = useQuery({
          queryKey: ['allservice'],
          queryFn: async()=>{
               const res = await fetch('https://i-sports-photographer-server.vercel.app/allServices')
               const data = await res.json()
               return data;
          }
     })

     if(isLoading){
          return (
               <div className='mt-5'>
                    <Loading></Loading>
               </div>
          )
     }
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