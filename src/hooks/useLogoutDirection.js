import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';
export const useLogoutDirection = () => {
  const { dispatch } = useAuthContext();
  const redirect = useNavigate();
  const logoutDirection = () => {
    // remove user from storage
    localStorage.removeItem('direction');
    // dispatch logout action
    dispatch({ type: 'LOGOUT_DIRECTION' });
    redirect('/login');
  };

  return { logoutDirection };
};
