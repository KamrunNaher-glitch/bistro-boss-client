import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ['payments', user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`)
      return res.data;
    }
  })
  return (
    <div className="p-2 md:p-6">
      <h2 className='text-xl md:text-3xl font-semibold mb-4'>Total Payments : {payments.length}</h2>
      <div className="overflow-x-auto rounded-md">
        <table className="table table-zebra w-full text-sm md:text-base">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => <tr key={payment._id}>
              <th>{index + 1}</th>
              <td>${payment.price}</td>
                  <td className="break-all">{payment.transactionId}</td>
              <td>{payment.status}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;