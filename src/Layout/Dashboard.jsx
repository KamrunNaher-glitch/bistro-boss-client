import React from 'react';
import { FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUser, FaUsers, FaUtensilSpoon, FaVoicemail } from 'react-icons/fa';
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
                    isAdmin ? <>
                      <li>
                        <NavLink to="/dashboard/adminHome">
                            <FaHome></FaHome>
                         Admin Home</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/addItems">
                       <FaUtensils></FaUtensils>
                         Add Items </NavLink></li>
                    <li>
                        <NavLink to="/dashboard/manageItems">
                          <FaList></FaList>
                         Manage Items </NavLink></li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                         <MdMenuBook></MdMenuBook>
                          Manage Bookings </NavLink></li>
                    <li>
                        <NavLink to="/dashboard/users">
                        <FaUsers></FaUsers>
                          All Users</NavLink></li>
                    </>
                    : 
                    <>
                      <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome></FaHome>
                         User Home</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart></FaShoppingCart>
                         My Cart ({cart.length})</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                          <FaCalendar></FaCalendar>
                          Reservation </NavLink></li>
                    <li>
                        <NavLink to="/dashboard/review">
                         <FaRProject></FaRProject>
                          Add a review </NavLink></li>
                    <li>
                        <NavLink to="/dashboard/bookings">
                         <FaList></FaList>
                          My Bookings</NavLink></li>
                    </>
                  }

                          <div className="divider"></div>
                {/* Shared Nav Links */}
                          <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                          Home</NavLink></li>
                    <li></li>


                    <li>
                        <NavLink to="/order/salad">
                          <FaSearch></FaSearch>
                          Menu </NavLink></li>
                    <li></li>
                    <li>
                        <NavLink to="/order/contact">
                          <FaEnvelope></FaEnvelope>
                          Contact</NavLink></li>
                    <li></li>

                 
                </ul>

            </div>
            {/* DashBoard Content */}
            <div className='flex-1 p-8'> 
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;

