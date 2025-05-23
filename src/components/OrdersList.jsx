import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { BiSortDown } from "react-icons/bi";
import { MdRefresh } from "react-icons/md";

export const OrdersList = ({
  orders,
  selectedOrder,
  onOrderSelect
}) => {
  const [sortBy, setSortBy] = useState('orderNumber');
  const [sortDirection, setSortDirection] = useState('asc');
  const handleSort = field => {
    if (sortBy === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortDirection('asc');
    }
  };
  const sortedOrders = [...orders].sort((a, b) => {
    const compareValue = sortDirection === 'asc' ? a[sortBy] > b[sortBy] ? 1 : -1 : a[sortBy] < b[sortBy] ? 1 : -1;
    return compareValue;
  });
  return <div className="border border-gray-200 rounded-lg ring-1 ring-black ring-opacity-20 overflow-hidden">
      <div className="border-b-2 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-medium">Orders</span>
          <span className="ml-2  bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1.5 rounded-2xl">
            {orders.length}
          </span>
        </div>
        <div className="flex items-center">
          <button className="flex items-center rounded-md border p-2 text-sm text-gray-600 hover:text-gray-900" onClick={() => handleSort('orderNumber')}>
            Order Number &nbsp; <ChevronDownIcon size={16} className="ml-1" />
          </button>
          <button className="ml-2 p-2 text-gray-500 hover:text-gray-700 bg-white rounded border border-gray-300">
            <BiSortDown size={20} />
          </button>
          <button className="ml-2 p-2 text-gray-500 hover:text-gray-700 bg-white rounded border border-gray-300">
            <MdRefresh size={20}  />
          </button>
        </div>
      </div>
      <div className="max-h-[600px] overflow-y-auto">
        {sortedOrders.map(order => <div key={order.id} className={`border-b border-gray-200 p-4 cursor-pointer hover:bg-gray-200 ${selectedOrder?.id === order.id ? 'bg-gray-50' : ''}`} onClick={() => onOrderSelect(order)}>
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium text-gray-700">
                ORDER-ID {order.id}
              </div>
              <div className={`text-xs px-2 py-1 rounded uppercase ${getStatusBadgeColor(order.status)}`}>
                {order.status}
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-1">{order.company}</div>
            <div className="text-sm text-gray-600 mb-1">
              Order Type: {order.orderType}
            </div>
            <div className="text-sm text-gray-600 mb-1">
              State: {order.state}
            </div>
            <div className="text-sm text-gray-500">
              {formatDate(order.date)}
            </div>
          </div>)}
      </div>
    </div>;
};
const getStatusBadgeColor = status => {
  switch (status.toLowerCase()) {
    case 'draft':
      return 'bg-gray-100 text-gray-800';
    case 'order in progress':
      return 'bg-green-100 text-green-800';
    case 'order created':
      return 'bg-blue-100 text-blue-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};
const formatDate = dateString => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return new Date(dateString).toLocaleDateString(undefined, options);
};
