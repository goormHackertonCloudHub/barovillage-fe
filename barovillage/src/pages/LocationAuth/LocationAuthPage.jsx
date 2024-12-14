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
    <div className="flex max-h-screen w-[390px] flex-col items-start justify-center">
      <img 
        src={locationAuthBanner} 
        alt="위치 인증 배너"
        className="w-full max-w-md"
      />
    
      <div className="mb-8 rounded-lg shadow-lg">
        <KakaoMap />
      </div>
      <div className="text-gray-600 mb-8 px-4 w-full">
        <p className="text-start">현재 위치 인증이 필요합니다.</p>
        <hr className="my-4 border-gray-300" />
        <div className="flex justify-between">
          <p>왜 지역을 인증할까요?</p>
          <span>&gt;</span>
        </div>
        <div className="flex justify-between">
          <p>인증에 어려움이 있으신가요?</p>
          <span>&gt;</span>
  </div>
</div>
      <div className="flex justify-center w-full">
        <button
          onClick={handleLocationAuth}
          disabled={isAuthenticating}
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 w-[300px] rounded-lg disabled:bg-gray-400"
        >
          {isAuthenticating ? '인증 중...' : '위치 인증하기'}
        </button>
      </div>
    </div>
  );
};

export default LocationAuthPage;