import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { usePostStore } from '../../store/postStore';

const PostDetail = () => {
  const { id } = useParams();
  const { currentPost, isLoading, fetchPost } = usePostStore();

  useEffect(() => {
    fetchPost(id);
  }, [id]);

  if (isLoading) return <div>로딩 중...</div>;
  if (!currentPost) return null;

  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-4">
          <span className="text-sm text-blue-600 font-semibold">{currentPost.category}</span>
          <h1 className="text-3xl font-bold mt-2">{currentPost.title}</h1>
        </div>

        <div className="flex justify-between items-center mb-6 text-gray-600 text-sm border-b border-gray-200 pb-4">
          <div className="flex items-center gap-4">
            <span>작성자: {currentPost.author}</span>
            <span>작성일: {currentPost.date}</span>
          </div>
          <div className="flex items-center gap-4">
            <span>조회 {currentPost.views}</span>
            <span>좋아요 {currentPost.likes}</span>
          </div>
        </div>

        <div className="prose max-w-none mb-8">
          <p>{currentPost.content}</p>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <h3 className="text-lg font-bold mb-4">댓글 {currentPost.comments.length}개</h3>
          <div className="space-y-4">
            {currentPost.comments.map(comment => (
              <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{comment.author}</span>
                </div>
                <p className="text-gray-600">{comment.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;