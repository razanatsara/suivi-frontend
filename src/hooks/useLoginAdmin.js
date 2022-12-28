import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const useLoginAdmin = () => {
  const [errorAdmin, setErrorAdmin] = useState(null);
  const [isLoadingAdmin, setIsLoadingAdmin] = useState(null);
  const { dispatch } = useAuthContext();

  const redirect = useNavigate();

  const loginAdmin = async (email, password) => {
    setIsLoadingAdmin(true);
    setErrorAdmin(null);

    await axios({
      method: 'post',
      url: `http://localhost:5000/api/admin/login`,
      headers: { 'Content-Type': 'application/json' },
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        // save the user to local storage
        localStorage.setItem('admin', JSON.stringify(res.data));

        // update the auth context
        dispatch({ type: 'LOGIN_ADMIN', payload: res.data });

        setIsLoadingAdmin(false);

        redirect('/ajoutDirection');
      })
      .catch((error) => {
        setIsLoadingAdmin(false);
        setErrorAdmin(error.response.data.error);
      });
  };

  return { loginAdmin, isLoadingAdmin, errorAdmin };
};
