// store/auth.js
import create from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  user: null,
  login: (username, password) => {
    // Simulate authentication logic
    if (username === 'user' && password === 'password') {
      set({ isAuthenticated: true, user: { username } });
    } else {
      console.error('Authentication failed');
    }
  },
  logout: () => set({ isAuthenticated: false, user: null }),
}));

export default useAuthStore;
