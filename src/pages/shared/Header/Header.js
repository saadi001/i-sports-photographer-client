import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {
     const {user,logOut} = useContext(AuthContext);
     const menuItems = <>
     
          {
               user?.uid ?
               <>
                    <li><Link className='font-semibold' to='/myReviews'>My reviews</Link></li>
                    <li><Link className='font-semibold' to='/addService'>Add service</Link></li>
               </>:
               <li><Link to='/signup' className='font-semibold'>Signup</Link></li>
          }
          <li><Link to='/blogs' className='font-semibold'>Blog</Link></li>
     </>

     const handleLogout = () =>{
          logOut()
          .then()
          .catch(err => console.error(err))

     }

     return (
          <div className="navbar bg-base-100 shadow-lg">
               <div className="navbar-start">
                    <div className="dropdown">
                         <label tabIndex={0} className="btn btn-ghost lg:hidden">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                         </label>
                         <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                              {menuItems}
                              
                         </ul>
                    </div>
                    <Link to='/' className="btn bg-transparent border-none hover:bg-transparent normal-case text-xl p-2 md:ml-2"><img className='h-full' src={logo} alt="" /></Link>
               </div>
               <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                         {menuItems}
                    </ul>
               </div>
               <div className="navbar-end">
                    {
                         user?.uid ?
                         <button onClick={handleLogout} className='btn mr-2 text-sm '>log out</button>
                         :
                         <Link to='login' className="btn mr-2">log in</Link>
                    }
               </div>
          </div>
     );
};

export default Header;