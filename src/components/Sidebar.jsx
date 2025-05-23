import React from 'react';
import { ShoppingCartIcon} from 'lucide-react';
import { RxDashboard } from "react-icons/rx";
import { TbBuildings, TbSettings } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";

export const Sidebar = () => {
  return <div className="sidebar">
    <nav >

      <div className='sidebar-tab'>
        <div className=" text-gray-400"><RxDashboard size={20} /></div>
        <span className="font-medium">Dashboard</span>
      </div>
      
      <div className='sidebar-tab active'>
        <div ><ShoppingCartIcon size={20} /></div>
        <span className="font-medium">Orders</span>
      </div>

      <div className='sidebar-tab'>
        <div className=" text-gray-400"><TbBuildings size={20} /></div>
        <span className="font-medium">Companies</span>
      </div>

      <div className='sidebar-tab'>
        <div className=" text-gray-400"><FiUsers size={20} /></div>
        <span className="font-medium">Users</span>
      </div>
      <div className='sidebar-tab'>
        <div className=" text-gray-400"><TbSettings size={20} /></div>
        <span className="font-medium">Help</span>
      </div>



    </nav>
  </div>;
};
