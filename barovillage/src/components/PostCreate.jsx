import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PostCreate = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postType, setPostType] = useState(""); // "TAKE" or "GIVE"
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // JSON 형식으로 데이터 전송
      const postData = {
        title: title,
        content: content,
        postType: postType
      };

      const response = await axios.post("http://192.168.1.58:8000/api/posts", postData, {
        headers: {
          'Authorization': '1',
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        // 이미지가 있는 경우 별도로 전송
        if (image) {
          const imageFormData = new FormData();
          imageFormData.append('image', image);
          
          await axios.post(`http://168.1.58:8000/api/posts/${response.data.id}/image`, 
            imageFormData, {
              headers: {
                'Authorization': '1',
                'Content-Type': 'multipart/form-data'
              }
          });
        }

        // navigate(`/post/${response.data.id}`);
        navigate(-1);
      }
    } catch (error) {
      console.error("게시글 작성 중 오류 발생", error);
      window.alert("게시글 작성에 실패했습니다");
    //   navigate("/");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-5">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold mb-6 text-left">글쓰기</h1> {/* 제목 크기 증가, 왼쪽 정렬 */}
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 text-left">
              제목
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-lg" // 글씨 크기 증가
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 text-left">
              내용
            </label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md text-lg" // 글씨 크기 증가
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setPostType("TAKE")}
                className={`py-2 px-4 rounded-md ${
                  postType === "TAKE" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                빌려주세요
              </button>
              <button
                type="button"
                onClick={() => setPostType("GIVE")}
                className={`py-2 px-4 rounded-md ${
                  postType === "GIVE" ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
              >
                빌려줄게요
              </button>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700 text-left">
              이미지 첨부
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <button type="submit" className="w-full py-3 px-4 bg-blue-500 text-white rounded-md">
            게시글 작성
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostCreate;
