import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../pages/forms/Login";
import Signup from "../../pages/forms/Signup";
import AddReview from "../../pages/Home/AddReview/AddReview";
import Home from "../../pages/Home/Home/Home";
import ServiceDetails from "../../pages/Home/Services/ServiceDetails";


export const router = createBrowserRouter([
     {
          path: '/', 
          element:<Main></Main>,
          children: ([
               {
                    path: '/',
                    element: <Home></Home>
               },
               {
                    path: '/services/:id',
                    element: <ServiceDetails></ServiceDetails>,
                    loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
               },
               {
                    path: '/addReview/:id',
                    element: <AddReview></AddReview>,
                    loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },{
                    path: '/signup',
                    element: <Signup></Signup>
               }
               
          ])
     }
])