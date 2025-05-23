import React from 'react';
import { LayoutDashboardIcon, ShoppingCartIcon, BuildingIcon, UsersIcon, HelpCircleIcon } from 'lucide-react';
export const Sidebar = () => {
  return <div className="sidebar">
    <nav className="mt-6">

      <div className='sidebar-tab'>
        <div className=" text-gray-400"><LayoutDashboardIcon size={20} /></div>
        <span className="font-medium">Dashboard</span>
      </div>;
      
      <div className='sidebar-tab active'>
        <div className=" text-blue-500"><ShoppingCartIcon size={20} /></div>
        <span className="font-medium text-blue-500">Orders</span>
      </div>;

      <div className='sidebar-tab'>
        <div className=" text-gray-400"><BuildingIcon size={20} /></div>
        <span className="font-medium">Companies</span>
      </div>;

      <div className='sidebar-tab'>
        <div className=" text-gray-400"><UsersIcon size={20} /></div>
        <span className="font-medium">Users</span>
      </div>;
      <div className='sidebar-tab'>
        <div className=" text-gray-400"><HelpCircleIcon size={20} /></div>
        <span className="font-medium">Help</span>
      </div>;



    </nav>
  </div>;
};
