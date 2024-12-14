import React from 'react';

// 더미 데이터
const dummyPosts = [
  {
    id: 1,
    title: "첫 번째 게시글",
    content: "첫 번째 게시글의 내용입니다.",
    author: "작성자1",
    date: "2024-01-15",
  },
  {
    id: 2,
    title: "두 번째 게시글",
    content: "두 번째 게시글의 내용입니다.",
    author: "작성자2",
    date: "2024-01-16",
  },
  {
    id: 3,
    title: "세 번째 게시글",
    content: "세 번째 게시글의 내용입니다.",
    author: "작성자3",
    date: "2024-01-17",
  },
  {
    id: 4,
    title: "네 번째 게시글",
    content: "네 번째 게시글의 내용입니다.",
    author: "작성자4",
    date: "2024-01-18",
  },
  // ... 더 많은 더미 데이터
];

const Mainpage = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">
      <div className="flex flex-col gap-6">
        {dummyPosts.map((post) => (
          <div 
            key={post.id} 
            className="bg-white rounded-lg shadow-md p-6 transition-transform duration-200 hover:-translate-y-2"
          >
            <h2 className="text-xl font-bold mb-3 text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4">
              {post.content}
            </p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainpage;