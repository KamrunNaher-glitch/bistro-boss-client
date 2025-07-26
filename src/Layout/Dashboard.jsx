import React from 'react';
import {
  FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers
} from 'react-icons/fa';
import { FaCalendar, FaRProject, FaUtensils } from 'react-icons/fa6';
import { MdMenuBook } from 'react-icons/md';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Page content here */}
        <div className="p-4">
          {/* Hamburger only for small screens */}
          <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden mb-4">
            Open Menu
          </label>
          <Outlet />
        </div>
      </div>

      {/* Sidebar */}
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 min-h-full bg-orange-400 text-base-content">
          {
            isAdmin ? (
              <>
                <li><NavLink to="/dashboard/adminHome"><FaHome /> Admin Home</NavLink></li>
                <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
                <li><NavLink to="/dashboard/addItems"><FaUtensils /> Add Items</NavLink></li>
                <li><NavLink to="/dashboard/manageItems"><FaList /> Manage Items</NavLink></li>
                <li><NavLink to="/dashboard/paymentHistory"><MdMenuBook /> Payment History</NavLink></li>
                <li><NavLink to="/dashboard/users"><FaUsers /> All Users</NavLink></li>
              </>
            ) : (
              <>
                <li><NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink></li>
                <li><NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart ({cart.length})</NavLink></li>
                <li><NavLink to="/dashboard/review"><FaRProject /> Add a Review</NavLink></li>
                <li><NavLink to="/dashboard/paymentHistory"><FaCalendar /> User Payment History</NavLink></li>
              </>
            )
          }

          <div className="divider"></div>

          {/* Shared Nav */}
          <li><NavLink to="/"><FaHome /> Home</NavLink></li>
          <li><NavLink to="/order/salad"><FaSearch /> Menu</NavLink></li>
          <li><NavLink to="/order/contact"><FaEnvelope /> Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
