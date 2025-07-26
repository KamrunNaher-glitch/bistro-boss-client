import React from 'react';
import useCart from '../../../hooks/useCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const total = cart?.reduce((sum, item) => sum + (item.price || 0), 0) || 0;

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then(res => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success"
            });
          }
        });
      }
    });
  };

  return (
    <div className="p-2 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl md:text-4xl font-semibold">Items: {cart.length}</h2>
        <h2 className="text-xl md:text-4xl font-semibold">Total Price: ${total.toFixed(2)}</h2>
        {cart.length ? (
          <Link to="/dashboard/payment" className="w-full md:w-auto">
            <button className="btn btn-primary w-full md:w-auto">Pay</button>
          </Link>
        ) : (
          <button disabled className="btn btn-primary w-full md:w-auto">Pay</button>
        )}
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-md">
        <table className="table w-full text-sm md:text-base">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-10 w-10 md:h-12 md:w-12">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs md:btn-sm">
                    <FaTrash className="text-red-700" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
