import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HOME_SYMBOL from "../assets/Home.png";
import CREATEPOST_SYMBOL from "../assets/CreatePost.png";
export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  // location-auth 경로에서는 Navbar를 렌더링하지 않음
  if (location.pathname === '/location-auth') {
    return null;
  }

  return (
    <nav className="bottom-0 left-0 right-0">
      <div className="flex justify-around items-center p-3 h-14 border-t border-gray-200">
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
        {/* 글쓰기 버튼 추가 */}
        <button
          onClick={() => navigate('/post/create')}
          className={`flex-1 py-2 text-center ${
            location.pathname === '/post/create'
              ? 'text-gray-500 font-bold' 
              : 'text-gray-500'
          }`}
        >
          <div className="flex flex-col items-center">
            <img src={CREATEPOST_SYMBOL} alt="글쓰기" className="w-6 h-6" style={{ width: '18px', height: '18px' }} />
            <span className="text-[15px]">글쓰기</span>
        </div>
        </button>
      </div>
    </nav>
  );
}
