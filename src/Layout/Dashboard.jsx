import React from 'react';
import {
  FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers
} from 'react-icons/fa';
import { FaCalendar, FaRProject, FaUtensils } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import { MdMenuBook } from 'react-icons/md';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className='flex'>
      {/* DashBoard Side Bar */}
      <div className='w-64 min-h-screen bg-orange-400'>
        <ul className='menu p-4'>

          {
            isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHome />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/cart">
                    <FaShoppingCart />
                    My Cart ({cart.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItems">
                    <FaUtensils />
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageItems">
                    <FaList />
                    Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <MdMenuBook />
                   Paymeny History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUsers />
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome />
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/cart">
                    <FaShoppingCart />
                    My Cart ({cart.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/review">
                    <FaRProject />
                    Add a Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <FaCalendar />
                   Users Payment History
                  </NavLink>
                </li>
              </>
            )
          }

          <div className="divider"></div>

          {/* Shared Nav Links */}
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className='flex-1 p-8'>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
