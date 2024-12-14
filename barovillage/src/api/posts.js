import axios from 'axios';

export const fetchPostDetail = async (postId) => {
  try {
    const response = await axios.get(`http://192.168.1.58:8000/api/posts/${postId}`, {
      headers: {
        'Authorization': postId
      }
    });
    if (response.data) {
        console.log("게시글 데이터",response.data);
      return response.data;
    } else {
      throw new Error('게시글 조회에 실패했습니다.');
    }
    
  } catch (error) {
    throw new Error('게시글을 불러오는데 실패했습니다: ' + error.message);
  }
};
