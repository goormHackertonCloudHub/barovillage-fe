import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ING_SYMBOL from '../../assets/ING_SYMBOL.png';
import DONE_SYMBOL from '../../assets/DONE_SYMBOL.png';
import { getTimeDifference } from '../../utils/timeCalculator';
import PostTypeSwitch from '../../components/PostTypeSwitch';

const Mainpage = () => {
  const [dummyPosts, setDummyPosts] = useState([]);
  const [activeTab, setActiveTab] = useState('GIVE');
  const userId = 1;

  useEffect(() => {
    fetchPosts(activeTab);
  }, [activeTab]);

  const fetchPosts = (postType) => {
    axios.get(`http://192.168.1.58:8000/api/posts?post_type=${postType}`, {
      headers: {
        Authorization: userId
      }
    })
    .then(response => {
      setDummyPosts(response.data["postList"]);
    })
    .catch(error => console.error('Error fetching posts:', error));
  };

  const navigate = useNavigate();

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-1">
      <PostTypeSwitch 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
      />
      <div className="flex flex-col gap-4">
        {dummyPosts.map((post) => (
          <div 
            key={post.postId} 
            className="flex flex-row justify-between bg-white rounded-lg shadow-md p-6 transition-transform duration-200 hover:-translate-y-2 cursor-pointer"
            onClick={() => handlePostClick(post.postId)}
          >
            <img 
              src={post.imageUrl}
              alt={post.title}
              className="w-1/3 h-48 object-cover rounded-lg"
              style={{ width: '120px', height: '120px' }}
            />
            <div className="flex flex-col w-[200px] gap-2 h-full justify-between items-start pt-2">
              <div className="text-gray-800">
                <img 
                  src={post.status === "ING" ? ING_SYMBOL : DONE_SYMBOL}
                  alt={post.status}
                  className="w-6 h-6"
                  style={{ width: '77px', height: '25px' }}
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-800">
                  {post.title}
                </h2>
              </div>
              <div className="flex gap-2 text-gray-500 w-full justify-end">
                <span>{getTimeDifference(post.createAt)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainpage;