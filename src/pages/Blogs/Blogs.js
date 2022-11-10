import React from 'react';

const Blogs = () => {
     return (
          <div className='max-w-screen-lg mx-auto mt-8 mb-10'>
               <div className='w-5/6 mx-auto'>
                    <div className='my-4 border p-2 rounded-md hover:shadow-md hover:border-cyan-300'>
                         <h3 className='text-lg font-bold'>Question 1: Difference between SQL and NoSQL?</h3>
                         <p className='mb-2'><span className='font-bold'>Answer:</span> </p>
                         <p className='mb-2'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>

                    </div>
                    <div className='my-4 border p-2 rounded-md hover:shadow-md hover:border-cyan-300'>
                         <h3 className='text-lg font-bold'>Question 2:  What is JWT, and how does it work??</h3>
                         <p className='mb-2'><span className='font-bold'>Answer:</span> </p>
                         <p className='mb-2'>
                              What is JWT (JSON Web Token)? JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
                    </div>
                    <div className='my-4 border p-2 rounded-md hover:shadow-md hover:border-cyan-300'>
                         <h3 className='text-lg font-bold'>Question 3: What is the difference between javascript and NodeJS?</h3>
                         <p><span className='font-bold'>Answer:</span></p>
                         <p className='mb-2'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
                    </div>
                    <div className='my-4 border p-2 rounded-md hover:shadow-md hover:border-cyan-300'>
                         <h3 className='text-lg font-bold'>Question 4:  How does NodeJS handle multiple requests at the same time?</h3>
                         <p><span className='font-bold'>Answer:</span></p>
                         <p className='mb-2'> NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                    </div>

               </div>
          </div>
     );
};

export default Blogs;