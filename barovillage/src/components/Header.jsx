import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import mainLogo from '../assets/main_logo.png';

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
        <div className="flex items-center gap-2 cursor-pointer">
          <img 
            src={ mainLogo }
            alt="바로빌리지"
            className="h-8"
          />
        </div>
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
