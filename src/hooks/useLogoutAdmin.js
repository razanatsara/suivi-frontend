import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';
export const useLogoutAdmin = () => {
  const { dispatch } = useAuthContext();
  const redirect = useNavigate();
  const logoutAdmin = () => {
    // remove user from storage
    localStorage.removeItem('admin');
    // dispatch logout action
    dispatch({ type: 'LOGOUT_ADMIN' });
    redirect('/login');
  };

  return { logoutAdmin };
};
