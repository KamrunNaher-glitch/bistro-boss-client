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
        path: 'cart',
        element: <Cart></Cart>
      },
      // Admin Routes
      {
        path: 'addItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
        
      },


      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },

    ]
  }
]);
