import React from 'react';
import { usePostStore } from '../store/postStore';
import { useParams } from 'react-router-dom';
import { Loader2 } from "lucide-react";
import ReactPullToRefresh from 'react-pull-to-refresh';
import CommentForm from './CommentForm';

const MoreComments = () => {
  const { id } = useParams();
  const { currentPost, fetchPost, isLoading } = usePostStore();

  const handleRefresh = async () => {
    try {
      await fetchPost(id);
      return Promise.resolve();
    } catch (error) {
      console.error('Refresh failed:', error);
      return Promise.reject(error);
    }
  };

  const handleCommentAdded = async (newComment) => {
    try {
      await handleRefresh();
    } catch (error) {
      console.error('댓글 추가 후 새로고침 실패:', error);
    }
  };

  const handleSubmitComment = (comment) => {
    // 여기에 댓글 제출 로직 추가
    console.log('새 댓글:', comment);
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
                
                <CommentForm 
                postId={id}
                onCommentAdded={handleCommentAdded}
                onSubmit={handleSubmitComment} />
              </>
            )}
          </div>
        </div>
      </div>
    </ReactPullToRefresh>
  );
};

export default MoreComments;