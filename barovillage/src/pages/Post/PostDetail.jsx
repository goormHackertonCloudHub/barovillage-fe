import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePostStore } from '../../store/postStore';
import ING_SYMBOL from '../../assets/ING_SYMBOL.png';
import DONE_SYMBOL from '../../assets/DONE_SYMBOL.png';
import { getTimeDifference } from '../../utils/timeCalculator';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { currentPost, isLoading, fetchPost } = usePostStore();

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  const handleMoreComments = () => {
    navigate(`/post/${id}/comments`);
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (!currentPost) return null;
  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-4">
          {currentPost.imageUrl && (
            <img
              src={currentPost.imageUrl}
              alt="게시글 이미지"
              className="w-full h-auto rounded-lg object-cover max-h-[500px]"
            />
          )}
        </div>

        <div className="flex justify-between items-start mb-6 text-gray-600  border-b border-gray-200 pb-4">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold mt-2">{currentPost.title}</h1>
            <div className="flex text-xs items-center gap-4">
              <span>{ getTimeDifference(currentPost.date) }</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <img
              src={currentPost.status === "ING" ? ING_SYMBOL : DONE_SYMBOL}
              alt={currentPost.status}
              className="w-6 h-6 my-auto"
              style={{ width: '77px', height: '25px' }}
            />
          </div>
        </div>

        <div className="prose max-w-none mb-8">
          <p>{currentPost.content}</p>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg">댓글 {currentPost.commentList.length}개</h3>
            {currentPost.commentList.length >= 3 && (
              <button 
                onClick={handleMoreComments}
                className="text-blue-600 hover:text-blue-800 text-sm font-semibold"
              >
                댓글 더보기
              </button>
            )}
          </div>
          <div className="space-y-4">
            {currentPost.commentList.slice(0, 2).map(comment => (
              <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={comment.profileImageUrl} 
                      alt="프로필 이미지" 
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <div className="font-semibold mb-1">{comment.author}</div>
                    <p className="text-gray-600">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;