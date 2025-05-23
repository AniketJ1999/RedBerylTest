import React, { useEffect, useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { OrdersList } from './components/OrdersList';
import { OrderDetails } from './components/OrderDetails';
import { FilterBar } from './components/FilterBar';
import { mockOrders } from './utils/data';
export function App() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState(mockOrders);
  const [filteredOrders, setFilteredOrders] = useState(mockOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    state: '',
    orderType: '',
    status: '',
    paymentStatus: ''
  });
  useEffect(() => {
    if (!selectedOrder && filteredOrders.length > 0) {
      setSelectedOrder(filteredOrders[0]);
    }
  }, [filteredOrders]);
  // Global search functionality
  useEffect(() => {
    if (searchQuery.trim() === '' && Object.values(filters).every(f => f === '')) {
      setFilteredOrders(orders);
      return;
    }
    const filtered = orders.filter(order => {
      // Search functionality
      const searchMatch = searchQuery.trim() === '' || Object.values(order).some(value => value && value.toString().toLowerCase().includes(searchQuery.toLowerCase()));
      // Filter functionality
      const stateMatch = !filters.state || order.state === filters.state;
      const orderTypeMatch = !filters.orderType || order.orderType === filters.orderType;
      const statusMatch = !filters.status || order.status === filters.status;
      const paymentStatusMatch = !filters.paymentStatus || order.paymentStatus === filters.paymentStatus;
      return searchMatch && stateMatch && orderTypeMatch && statusMatch && paymentStatusMatch;
    });
    setFilteredOrders(filtered);
  }, [searchQuery, filters, orders]);
  const handleSearch = query => {
    setSearchQuery(query);
  };
  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };
  const handleOrderSelect = order => {
    setSelectedOrder(order);
  };
  return <div className="app">
    <Sidebar />
    <Header />
    <div className="flex flex-col overflow-hidden">

      <div className="main-container">
        <div className="main-content">
          <div className="flex justify-between mb-4 mr-6 "><div>
            <h1 className="text-3xl font-semibold">Orders</h1>
            <p className="text-gray-500">Manage all your orders here.</p></div>
            <div className="flex space-x-4 items-center ">
              <button className="flex items-center px-4 h-9 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                <span className="mr-2">+</span> Create Order
              </button>
              <button className="flex items-center px-4 h-9 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Export CSV
              </button>
              <button className="flex items-center px-4 h-9 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Delete All Drafts
              </button>
            </div>
          </div>
          <hr />
          <div className="flex justify-between mt-5 mb-6">
            <FilterBar onSearch={handleSearch} onFilterChange={handleFilterChange} filters={filters} />

          </div>
          <div className="flex gap-6">
            <div className="w-2/6">
              <OrdersList orders={filteredOrders} selectedOrder={selectedOrder} onOrderSelect={handleOrderSelect} />
            </div>
            <div className="w-5/6">
              {selectedOrder && <OrderDetails order={selectedOrder} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}