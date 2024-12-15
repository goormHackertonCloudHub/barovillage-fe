import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocationStore from '../../store/locationStore';
import KakaoMap from '../../components/\bKakaoMap';
import locationAuthBanner from '../../assets/location_auth_banner.png';

const LocationAuthPage = () => {
  const navigate = useNavigate();
  const { setLocationInfo } = useLocationStore();
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('브라우저가 위치 정보를 지원하지 않습니다.'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          reject(error);
        }
      );
    });
  };

  const handleLocationAuth = async () => {
    setIsAuthenticating(true);
    try {
      const position = await getCurrentPosition();
      
      const response = await fetch('http://192.168.1.58:8000/api/users/location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': '1'
        },
        body: JSON.stringify({
          latitude: position.latitude,
          longitude: position.longitude
        })
      });

      if (!response.ok) {
        throw new Error('위치 인증에 실패했습니다.');
      }

      const data = await response.json();
      setLocationInfo(true, data.regionName);
      console.log(data);
      navigate('/');
      
    } catch (error) {
      console.error('위치 인증 중 오류 발생:', error);
      if (error.code === 1) {
        alert('위치 정보 접근이 거부되었습니다. 설정에서 위치 접근 권한을 허용해주세요.');
      } else if (error.code === 2) {
        alert('위치 정보를 가져올 수 없습니다. 다시 시도해주세요.');
      } else {
        alert('위치 인증 중 오류가 발생했습니다.');
      }
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
      <div className="text-gray-600 mb-8 mt-4 px-4 w-full">
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
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 w-[360px] h-[50px] rounded-lg disabled:bg-gray-400"
        >
          {isAuthenticating ? '인증 중...' : '위치 인증 후 입장하기'}
        </button>
      </div>
    </div>
  );
};

export default LocationAuthPage;