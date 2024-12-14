import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocationStore from '../../store/locationStore';
import KakaoMap from '../../components/\bKakaoMap';
import locationAuthBanner from '../../assets/location_auth_banner.png';

const LocationAuthPage = () => {
  const navigate = useNavigate();
  const { setLocationInfo } = useLocationStore();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleLocationAuth = async () => {
    setIsAuthenticating(true);
    try {
      // 실제 API 호출 대신 테스트용 지연 시간 추가
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 테스트를 위해 항상 성공으로 처리
      setLocationInfo(true, '테스트 위치');
      navigate('/');
      
    } catch (error) {
      console.error('위치 인증 중 오류 발생:', error);
      alert('위치 인증 중 오류가 발생했습니다.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="flex max-h-screen flex-col items-center justify-center">
      <img 
        src={locationAuthBanner} 
        alt="위치 인증 배너" 
        className="w-full max-w-md"
      />
    
      <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
        <KakaoMap />
      </div>
      <p className="text-gray-600 mb-8 text-center">
        서비스 이용을 위해 현재 위치 인증이 필요합니다.
      </p>
      <button
        onClick={handleLocationAuth}
        disabled={isAuthenticating}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg disabled:bg-gray-400"
      >
        {isAuthenticating ? '인증 중...' : '위치 인증하기'}
      </button>
    </div>
  );
};

export default LocationAuthPage;