import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Login from "../../pages/forms/Login";
import Signup from "../../pages/forms/Signup";
import Updates from "../../pages/forms/Updates";
import AddReview from "../../pages/Home/AddReview/AddReview";
import Home from "../../pages/Home/Home/Home";
import Allservices from "../../pages/Home/Services/Allservices";
import ServiceDetails from "../../pages/Home/Services/ServiceDetails";
import MyReviews from "../../pages/MyReviews/MyReviews";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


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
                    element: <PrivateRoute><AddReview></AddReview></PrivateRoute>,
                    loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
               },
               {
                    path: '/login',
                    element: <Login></Login>
               },
               {
                    path: '/signup',
                    element: <Signup></Signup>
               },
               {
                    path: '/myReviews',
                    element: <MyReviews></MyReviews>
               },
               {
                    path: '/update/:id',
                    element: <Updates></Updates>,
                    loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
               },
               {
                    path: '/allService',
                    element: <Allservices></Allservices>
               }
               
          ])
     }
])