import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
     const { title, position,price,description,img,_id } = service;
     console.log(service)
     return (
          <div className="overflow-hidden bg-white rounded-lg border shadow-lg dark:bg-gray-800 relative">
               <div className="px-4 py-2">
                    <h1 className="text-2xl font-semibold text-gray-800  dark:text-white">{title}({position})</h1>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{
                         description.length>100 ? description.slice(0,100) + '...' : description
                    }</p>
               </div>

               <img className="object-cover h-80 w-full  mt-2" src={img} alt="NIKE AIR" />

               <div className="flex items-center justify-between px-4 py-2 bg-gray-900 absolute w-full bottom-0">
                    <h1 className="text-lg font-bold text-white">${price}</h1>
                    <Link to={`/services/${_id}`}><button className="px-2 py-2 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">view details</button></Link>
               </div>
          </div>
     );
};

export default SingleService;