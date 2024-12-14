import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bottom-0 left-0 right-0 bg-black">
      <div className="flex justify-around items-center h-14">
        <button
          onClick={() => navigate('/')}
          className={`flex-1 py-2 text-center ${
            location.pathname === '/' 
              ? 'text-blue-500 font-bold' 
              : 'text-gray-500'
          }`}
        >
          Main
        </button>
        <button
          onClick={() => navigate('/mypage')}
          className={`flex-1 py-2 text-center ${
            location.pathname === '/mypage' 
              ? 'text-blue-500 font-bold' 
              : 'text-gray-500'
          }`}
        >
          My page
        </button>
      </div>
    </nav>
  );
}
