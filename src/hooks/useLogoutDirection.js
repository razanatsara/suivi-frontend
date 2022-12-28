import { useAuthContext } from './useAuthContext';

export const useLogoutDirection = () => {
  const { dispatch } = useAuthContext();

  const logoutDirection = () => {
    // remove user from storage
    localStorage.removeItem('direction');

    // dispatch logout action
    dispatch({ type: 'LOGOUT_DIRECTION' });
  };

  return { logoutDirection };
};
