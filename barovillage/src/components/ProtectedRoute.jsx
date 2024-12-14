import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Mainpage from '../pages/Main/MainPage';
import useLocationStore from '../store/locationStore';

const ProtectedRoute = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setLocationInfo, isLocationVerified } = useLocationStore();

  useEffect(() => {
    if (isLocationVerified) {
      setIsLoading(false);
      return;
    }

    const checkLocationAuth = async () => {
      try {
        // API 호출 부분 주석 처리
        /*
        const userId = '현재 로그인된 사용자 ID';
        const response = await fetch(`/api/users/${userId}/location`);
        const data = await response.json();
        setLocationInfo(data.result, data.locationName);
        */

        // 최초 접속시에만 미인증 상태 설정
        setLocationInfo(false, '');
      } catch (error) {
        console.error('위치 인증 확인 중 오류 발생:', error);
        setLocationInfo(false, '');
      } finally {
        setIsLoading(false);
      }
    };

    checkLocationAuth();
  }, [setLocationInfo, isLocationVerified]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return isLocationVerified ? <Mainpage /> : <Navigate to="/location-auth" />;
};

export default ProtectedRoute;