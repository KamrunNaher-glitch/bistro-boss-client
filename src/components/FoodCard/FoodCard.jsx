import React, { useContext } from 'react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCart from '../../hooks/useCart';



const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();
    const handleAddToCart = (food) => {

        // console.log(user.email,food);
        const cartItem =
        {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
        }

        axiosSecure.post('/carts', cartItem)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    //   Refetch The Cart
                    refetch();
                }
            })

        if (user && user.email) {
                Swal.fire({
                icon: 'success',
                title: 'Added to Cart!',
                text: `${food.name} has been added successfully.`,
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            // ✅ Show login alert if user is not logged in
            Swal.fire({
                title: "Please login to add to the cart",
                text: "You need to be logged in to add items to your cart.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login Now"
            }).then((result) => {
                if (result.isConfirmed) {
                    // ✅ Redirect to login page (modify based on your routing)
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img src={image} alt="food" />
            </figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-4 px-4 mt-4">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={handleAddToCart} // 
                        className="btn btn-outline bg-slate-300 border-0 border-b-4 border-orange-400 mt-4"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
