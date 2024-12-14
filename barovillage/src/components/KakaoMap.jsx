import React, { useEffect } from 'react';

const KakaoMap = () => {
  useEffect(() => {
    const loadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.7777777, 126.9784147),
          level: 3,
          draggable: false,
          disableDoubleClickZoom: false,
          disableTouchZoom: false,
          disableWheelZoom: false,
          disableDragPan: false,
        };
        const map = new window.kakao.maps.Map(container, options);

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;
              const currentPos = new window.kakao.maps.LatLng(lat, lng);

              // 지도 중심을 현재 위치로 이동
              map.setCenter(currentPos);

              // 현재 위치 마커 생성
              const marker = new window.kakao.maps.Marker({
                position: currentPos,
                map: map
              });

              // 반경 100m 원 생성
              const radius = 500;
              const circle = new window.kakao.maps.Circle({
                center: currentPos,  
                radius: radius,        
                strokeWeight: 3,    
                strokeColor: '#004c80', 
                strokeOpacity: 0.8,
                // fillColor에 투명도를 포함한 HEx 값으로 수정
                fillColor: '#474c80', 
                fillOpacity: 0.6    
              });

              // 지도에 원 표시
              circle.setMap(map);

              // 원이 모두 보이도록 지도 레벨 조정
              const bounds = new window.kakao.maps.LatLngBounds();
              bounds.extend(new window.kakao.maps.LatLng(
                lat + (radius / 111000), // 북쪽 끝점 (100m를 위도로 변환)
                lng
              ));
              bounds.extend(new window.kakao.maps.LatLng(
                lat - (radius / 111000), // 남쪽 끝점
                lng
              ));
              bounds.extend(new window.kakao.maps.LatLng(
                lat,
                lng + (radius / (111000 * Math.cos(lat * (Math.PI / 180)))) // 동쪽 끝점
              ));
              bounds.extend(new window.kakao.maps.LatLng(
                lat,
                lng - (radius / (111000 * Math.cos(lat * (Math.PI / 180)))) // 서쪽 끝점
              ));
              
              map.setBounds(bounds);
            },
            (error) => {
              console.error('위치 정보를 가져오는데 실패했습니다:', error);
            }
          );
        } else {
          console.error('이 브라우저에서는 Geolocation이 지원되지 않습니다.');
        }
      });
    };

    // 카카오맵 스크립트가 로드된 경우 바로 실행
    if (window.kakao && window.kakao.maps) {
      loadKakaoMap();
    } else {
      const script = document.createElement('script');
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=7cb38fc78738360ede695f436f0cd8b6&autoload=false`;
      script.onload = loadKakaoMap;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        width: '390px',
        height: '200px'
      }}
    ></div>
  );
};

export default KakaoMap;