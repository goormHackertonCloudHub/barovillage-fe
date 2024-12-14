export const getTimeDifference = (dateString) => {
  const now = new Date();
  const postDate = new Date(dateString);
  const diffInHours = Math.floor((now - postDate) / (1000 * 60 * 60));
  
  if (diffInHours < 1) {
    return '방금 전';
  } else if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  } else if (diffInHours < 48) {
    return '어제';
  } else if (diffInHours < 168) {
    return `${Math.floor(diffInHours / 24)}일 전`;
  } else {
    return postDate.toLocaleDateString();
  }
};
