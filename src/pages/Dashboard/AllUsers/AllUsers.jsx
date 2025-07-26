import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaTrash, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');

            return res.data;
        },
        refetchOnWindowFocus: true 
    });

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} is an Admin Now`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    const handleDeleteUser = user => {
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
                axiosSecure.delete(`/users/${user._id}`)
                .then(res => {
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                    }
                });
            }
        });
    };

    return (
         <div className="p-2 md:p-6">
            {/* Title Section */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4 mb-4'>
                <h2 className='text-xl md:text-3xl font-semibold'>All Users</h2>
                <h2 className='text-md md:text-xl'>Total Users: {users.length}</h2>
            </div>

            {/* Table Section */}
            <div className="overflow-x-auto rounded-md">
                <table className="table table-zebra w-full text-sm md:text-base">
                    <thead className="bg-base-200">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={user._id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name || 'N/A'}</td>
                                    <td className="break-all">{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' 
                                            ? 'Admin'
                                            : <button onClick={() => handleMakeAdmin(user)} className="btn btn-xs md:btn-sm bg-orange-600 text-white">
                                                <FaUsers />
                                              </button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteUser(user)} className="btn btn-ghost btn-xs md:btn-md">
                                            <FaTrash className='text-red-700' />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
