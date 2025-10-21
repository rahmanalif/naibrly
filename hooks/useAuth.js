/**
 * useAuth Hook
 * Custom hook for authentication state management
 * Now uses Redux for state management
 */

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { login, logout, updateUser } from '@/redux/slices/authSlice';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, user, isLoading } = useAppSelector((state) => state.auth);

  return {
    isAuthenticated,
    user,
    isLoading,
    login: (userData) => dispatch(login(userData)),
    logout: () => dispatch(logout()),
    updateUser: (userData) => dispatch(updateUser(userData)),
  };
};

export default useAuth;
