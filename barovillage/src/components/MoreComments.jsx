import React from 'react';
import { usePostStore } from '../store/postStore';

const MoreComments = () => {
  const { currentPost } = usePostStore();
  if (!currentPost) return null;

  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="space-y-4">
          {currentPost.comments.map(comment => (
            <div key={comment.id} className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold">{comment.author}</span>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-600">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreComments;