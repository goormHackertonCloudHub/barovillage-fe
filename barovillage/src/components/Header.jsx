import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    navigate(-1);
  };

  const isMainPage = location.pathname === "/";

  return (
    <header className="h-14 bg-white flex items-center px-4 shadow-sm">
      {isMainPage ? (
        <button 
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 transition-colors"
        >
          마곡동
        </button>
      ) : (
        <button 
          onClick={goBack}
          className="p-2 hover:bg-gray-100 active:bg-gray-200 rounded-full transition-colors"
        >
          <FontAwesomeIcon 
            icon={faAngleLeft} 
            className="text-2xl text-gray-700"
          />
        </button>
      )}
    </header>
  );
}
