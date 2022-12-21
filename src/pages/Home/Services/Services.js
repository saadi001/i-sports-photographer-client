import { useQuery } from '@tanstack/react-query';
import React, {  useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import SingleService from './SingleService';

const Services = () => {
     // const [services,setServices] = useState([]);
     // console.log(service)

     const {data: services, isLoading} = useQuery({
          queryKey: ['services'],
          queryFn: async() =>{
               const res = await fetch('https://i-sports-photographer-server.vercel.app/services');
               const data = await res.json();
               return data;
          }
     })

     // useEffect(()=>{
     //      fetch('https://i-sports-photographer-server.vercel.app/services')
     //      .then(res => res.json())
     //      .then(data => setServices(data))
     // },[])

     if(isLoading){
          return <Loading></Loading>
     }

     return (
          <div>
               <p className='text-4xl text-center mt-10 font-bold'>Services</p>
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 mx-4 sm:mx-2 md:mx-1'>
               {
                    services.map(service => <SingleService
                    key={service._id}
                    service={service}
                    ></SingleService>)
               }
               </div>
               <div className='flex justify-center my-3'><Link to='/allService'><button className='btn btn-outline btn-warning'>See all</button></Link></div>
          </div>
     );
};

export default Services;