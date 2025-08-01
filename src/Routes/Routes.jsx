import {
  createBrowserRouter,
} from "react-router-dom";


import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "./Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";

import Cart from '../pages/Dashboard/Cart/Cart';
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import AddReview from "../pages/Dashboard/addReview/AddReview";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'menu',
        element: <Menu></Menu>,
      },
      {
        path: 'order/:category',
        element: <Order></Order>,
      },
      {
        path: 'Login',
        element: <Login></Login>,
      },
      {
        path: 'SignUp',
        element: <SignUp></SignUp>,
      },
      {
        path: 'Secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>,
      },

    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      // Normal User Routes
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },

      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path:'AddReview',
        element:<AddReview></AddReview>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },



      // Admin only Routes
      {
        path:'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'addItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
        
      },
      {
        path: 'ManageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },

       {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`https://bistro-boss-server-six-taupe.vercel.app/menu/${params.id}`)
        },     
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },

    ]
  }
]);
