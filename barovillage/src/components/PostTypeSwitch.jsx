const PostTypeSwitch = ({ activeTab, onTabChange }) => {
  return (
    <div className="w-full bg-white p-1 rounded-full mb-4 border border-gray-200">
      <div className="relative flex w-full h-12 bg-white rounded-full">
        <div
          className="absolute top-0 left-0 h-full transition-transform duration-300 ease-in-out w-1/2"
          style={{
            transform: `translateX(${activeTab === 'GIVE' ? '0%' : '100%'})`,
          }}
        >
          <div className="w-full h-full bg-purple-500 rounded-full shadow-md"></div>
        </div>
        <button
          className={`flex-1 relative z-10 flex items-center justify-center transition-colors duration-300 ${
            activeTab === 'GIVE' ? 'text-white' : 'text-gray-500'
          }`}
          onClick={() => onTabChange('GIVE')}
        >
          빌려드려요
        </button>
        <button
          className={`flex-1 relative z-10 flex items-center justify-center transition-colors duration-300 ${
            activeTab === 'TAKE' ? 'text-white' : 'text-gray-500'
          }`}
          onClick={() => onTabChange('TAKE')}
        >
          빌려주세요
        </button>
      </div>
    </div>
  );
};

export default PostTypeSwitch;
