import { useAuthContext } from './useAuthContext';

export const useLogoutAdmin = () => {
  const { dispatch } = useAuthContext();

  const logoutAdmin = () => {
    // remove user from storage
    localStorage.removeItem('admin');

    // dispatch logout action
    dispatch({ type: 'LOGOUT_ADMIN' });
  };

  return { logoutAdmin };
};
