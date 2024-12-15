import React, { useState } from 'react';
import { usePostStore } from '../store/postStore';
import { useParams } from 'react-router-dom';
import { Loader2 } from "lucide-react";
import ReactPullToRefresh from 'react-pull-to-refresh';

const MoreComments = () => {
  const { id } = useParams();
  const { currentPost, fetchPost, isLoading } = usePostStore();
  const [newComment, setNewComment] = useState('');

  const handleRefresh = async () => {
    try {
      await fetchPost(id);
      return Promise.resolve();
    } catch (error) {
      console.error('Refresh failed:', error);
      return Promise.reject(error);
    }
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    // 여기에 댓글 제출 로직 추가
    console.log('새 댓글:', newComment);
    setNewComment(''); // 입력 필드 초기화
  };

  if (!currentPost) return null;

  return (
    <ReactPullToRefresh onRefresh={handleRefresh} threshold={50}>
      <div className="max-w-4xl mx-auto p-5">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="space-y-4">
            {isLoading ? (
              <div className="flex justify-center p-4">
                <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
              </div>
            ) : (
              <>
                {currentPost.commentList.map(comment => (
                  <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">{comment.username}</span>
                      <span className="text-sm text-gray-500">{comment.date}</span>
                    </div>
                    <p className="text-gray-600">{comment.content}</p>
                  </div>
                ))}
                
                {/* 댓글 입력 폼 */}
                <form onSubmit={handleSubmitComment} className="mt-6">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="댓글을 입력하세요"
                      className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      등록
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </ReactPullToRefresh>
  );
};

export default MoreComments;