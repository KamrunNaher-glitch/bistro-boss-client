import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../../hooks/useCart';
import useAdmin from '../../../../hooks/useAdmin';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    const handleLogOut = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navoptions = <>
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/Menu">Our menu</Link></li>
        <li> <Link to="/order/salad">Order Food</Link></li>
       {
        user && isAdmin &&  <li> <Link to="/dashboard/adminHome">Dashboard</Link></li>
       }
       {
        user && !isAdmin &&  <li> <Link to="/dashboard/userHome">Dashboard</Link></li>
       }
        <li>
            <Link to="/dashboard/cart">
                <button className="btn">
                   <FaShoppingCart className='mr-2'></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>

        {

            user ? <>
                {/* <span>{user?.displayName}</span> */}
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>

        }

    </>
    return (
        <div>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navoptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navoptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">GET STARTED</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;



