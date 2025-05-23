import React from 'react';
import vstate from '../assets/vstate.png'
export const Header = () => {
  return <div className="header">
    <div > <img src={vstate} className="vstate"  /></div>
        <div className="user">
            <span className="text-blue-600 mr-2">India Corp</span>
          <span className="text-blue-600">↑</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       
       
          <span className="mr-2">Welcome, Mayuri Chavan</span>
          <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-sm">
            MC
          </div>
        </div>
        
       
      
    </div>;
};