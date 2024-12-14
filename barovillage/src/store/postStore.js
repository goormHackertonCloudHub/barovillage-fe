import { create } from 'zustand';
import { fetchPostDetail } from '../api/posts';

export const usePostStore = create((set) => ({
  currentPost: null,
  isLoading: false,
  error: null,
  fetchPost: async (postId) => {
    set({ isLoading: true });
    try {
      const post = await fetchPostDetail(postId);
      set({ currentPost: post, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  }
}));