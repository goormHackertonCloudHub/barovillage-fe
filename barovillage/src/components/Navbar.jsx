import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HOME_SYMBOL from "../assets/Home.png";
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bottom-0 left-0 right-0">
      <div className="flex justify-around items-center h-14 border-t border-gray-200">
        <button
          onClick={() => navigate('/')}
          className={`flex-1 py-2 text-center ${
            location.pathname === '/' 
              ? 'text-gray-500 font-bold' 
              : 'text-gray-500'
          }`}
        >
            <div className="flex flex-col items-center">
            <img src={HOME_SYMBOL} alt="홈" className="w-6 h-6" style={{ width: '18px', height: '18px' }} />
            <span className="text-[15px]">홈</span>
        </div>
        </button>
      </div>
    </nav>
  );
}
