import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = ({ postId, onCommentAdded }) => {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`http://192.168.1.58:8000/api/posts/${postId}/comments`, 
        {
          content: newComment
        },
        {
          headers: {
            'Authorization': '1'
          }
        }
      );

      if (response.status === 201) {
        setNewComment('');
        if (onCommentAdded) {
          onCommentAdded(response.data);
        }
      }
    } catch (error) {
      console.error('댓글 등록 실패:', error);
      alert('댓글 등록에 실패했습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력하세요"
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          등록
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
