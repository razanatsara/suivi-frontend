import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const useLoginDirection = () => {
  const [errorDirection, setErrorDirection] = useState(null);
  const [isLoadingDirection, setIsLoadingDirection] = useState(null);
  const { dispatch } = useAuthContext();
  const redirect = useNavigate();

  const loginDirection = async (email, password) => {
    setIsLoadingDirection(true);
    setErrorDirection(null);

    await axios({
      method: 'post',
      url: `http://localhost:5000/api/direction/login`,
      headers: { 'Content-Type': 'application/json' },
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        // save the user to local storage
        localStorage.setItem('direction', JSON.stringify(res.data));

        // update the auth context
        dispatch({ type: 'LOGIN_DIRECTION', payload: res.data });

        // update loading state
        setIsLoadingDirection(false);

        redirect('/ajoutetudiant');
      })
      .catch((error) => {
        setIsLoadingDirection(false);
        setErrorDirection(error.response.data.error);
      });
  };

  return { loginDirection, isLoadingDirection, errorDirection };
};
