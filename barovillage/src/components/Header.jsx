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
          className="px-4 py-2 text-gray-700 rounded-md hover:text-gray-900 transition-colors"
        >
          마곡동
        </button>
      ) : (
        <button 
          onClick={goBack}
          className="p-2 rounded-full transition-colors"
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
