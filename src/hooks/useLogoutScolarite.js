import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';
export const useLogoutScolarite = () => {
  const { dispatch } = useAuthContext();
  const redirect = useNavigate();
  const logoutScolarite = () => {
    // remove user from storage
    localStorage.removeItem('scolarite');
    // dispatch logout action
    dispatch({ type: 'LOGOUT_SCOLARITE' });
    redirect('/login');
  };

  return { logoutScolarite };
};
