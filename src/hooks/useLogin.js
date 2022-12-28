import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const useLogin = () => {
  const redirect = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    await axios({
      method: 'post',
      url: `http://127.0.0.1:5000/api/user/login`,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        if (res.data.utilisateur === 'Admin') {
          // save the user to local storage
          localStorage.setItem('admin', JSON.stringify(res.data));
          // update the auth context
          dispatch({ type: 'LOGIN_ADMIN', payload: res.data });
          // update loading state
          setIsLoading(false);
          redirect('/listeuser');
        }
        if (res.data.utilisateur === 'Direction') {
          // save the user to local storage
          localStorage.setItem('direction', JSON.stringify(res.data));
          // update the auth context
          dispatch({ type: 'LOGIN_DIRECTION', payload: res.data });
          // update loading state
          setIsLoading(false);
          redirect('/liste');
        }
        if (res.data.utilisateur === 'Scolarite') {
          // save the user to local storage
          localStorage.setItem('scolarite', JSON.stringify(res.data));
          // update the auth context
          dispatch({ type: 'LOGIN_SCOLARITE', payload: res.data });
          // update loading state
          setIsLoading(false);
          redirect('/');
        }
      })
      .catch((err) => {
        setError(err);
      });
  };

  return { login, isLoading, error };
};
