import axios from 'axios';

// 상세 페이지용 더미 데이터
const dummyPostDetails = [
  {
    id: 1,
    title: "첫 번째 게시글",
    content: "첫 번째 게시글의 상세한 내용입니다. 이 내용은 목록에서 보이는 내용보다 더 자세합니다.",
    author: "작성자1",
    date: "2024-01-15",
    views: 128,
    likes: 15,
    category: "일반",
    comments: [
      { id: 1, author: "댓글작성자1", content: "좋은 글이네요!" },
      { id: 2, author: "댓글작성자2", content: "감사합니다." }
    ]
  },
  {
    id: 2,
    title: "두 번째 게시글",
    content: "두 번째 게시글의 상세한 내용입니다. 이 내용은 목록에서 보이는 내용보다 더 자세합니다.",
    author: "작성자2",
    date: "2024-01-16",
    views: 256,
    likes: 32,
    category: "공지",
    comments: [
      { id: 3, author: "댓글작성자3", content: "공지사항 잘 보았습니다." }
    ]
  },
  // ... 필요한 만큼 더미 데이터 추가
];

// API 호출을 시뮬레이션하는 함수
export const fetchPostDetail = async (postId) => {
  // API 호출 대신 더미 데이터에서 찾기
  const post = dummyPostDetails.find(post => post.id === parseInt(postId));
  
  // 실제 API 호출처럼 비동기 동작 시뮬레이션
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(post);
    }, 500); // 0.5초 지연
  });
};

// 실제 API 호출 코드는 주석 처리
// export const fetchPostDetail = async (postId) => {
//   try {
//     const response = await axios.get(`/api/posts/${postId}`);
//     return response.data;
//   } catch (error) {
//     throw new Error('게시글을 불러오는데 실패했습니다.', error);
//   }
// };