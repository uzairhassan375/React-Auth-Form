import React from 'react';

const BottomNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#4b0000] to-[#000261] shadow-lg">
      <div className="flex justify-around items-center py-4 text-white">
        
        {/* Personal Information */}
        <div className="flex flex-col items-center">
          <p className="font-semibold text-lg">Uzair</p>
          <p className="text-sm text-gray-400">48525</p>
        </div>
        
        {/* Contact Information */}
        <div className="flex flex-col items-center">
          <p className="font-semibold text-lg">uzair@gmail.com</p>
          <p className="text-sm text-gray-400">+92-333-234</p>
        </div>
        
        {/* Address Information */}
        <div className="flex flex-col items-center">
          <p className="font-semibold text-lg">Canal Bank, Lahore</p>
          <p className="text-sm text-gray-400">1234-567</p>
        </div>

      </div>
    </div>
  );
};

export default BottomNavBar;
