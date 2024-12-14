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
  {
    id: 4,
    title: "네 번째 게시글",
    content: "네 번째 게시글의 내용입니다.",
    author: "작성자4",
    date: "2024-01-18",
  },
  {
    id: 5,
    title: "다섯 번째 게시글",
    content: "다섯 번째 게시글의 내용입니다.",
    author: "작성자5",
    date: "2024-01-19",
  },
  {
    id: 6,
    title: "여섯 번째 게시글",
    content: "여섯 번째 게시글의 내용입니다.",
    author: "작성자6",
    date: "2024-01-20",
  },
  {
    id: 7,
    title: "일곱 번째 게시글",
    content: "일곱 번째 게시글의 내용입니다.",
    author: "작성자7",
    date: "2024-01-21",
  },
  {
    id: 8,
    title: "네 번째 게시글",
    content: "네 번째 게시글의 내용입니다.",
    author: "작성자4",
    date: "2024-01-18",
  },
  {
    id: 8,
    title: "네 번째 게시글",
    content: "네 번째 게시글의 내용입니다.",
    author: "작성자4",
    date: "2024-01-18",
  },
  {
    id: 8,
    title: "네 번째 게시글",
    content: "네 번째 게시글의 내용입니다.",
    author: "작성자4",
    date: "2024-01-18",
  },
  {
    id: 9,
    title: "아홉 번째 게시글",
    content: "아홉 번째 게시글의 내용입니다.",
    author: "작성자9",
    date: "2024-01-22",
  },
  {
    id: 10,
    title: "열 번째 게시글",
    content: "열 번째 게시글의 내용입니다.",
    author: "작성자10",
    date: "2024-01-22",
  },
  {
    id: 11,
    title: "열한 번째 게시글",
    content: "열한 번째 게시글의 내용입니다.",
    author: "작성자11",
    date: "2024-01-23",
  },
  {
    id: 12,
    title: "열두 번째 게시글",
    content: "열두 번째 게시글의 내용입니다.",
    author: "작성자12",
    date: "2024-01-24",
  },
  {
    id: 13,
    title: "열세 번째 게시글",
    content: "열세 번째 게시글의 내용입니다.",
    author: "작성자13",
    date: "2024-01-25",
  },
  {
    id: 14,
    title: "열네 번째 게시글",
    content: "열네 번째 게시글의 내용입니다.",
    author: "작성자14",
    date: "2024-01-26",
  },
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