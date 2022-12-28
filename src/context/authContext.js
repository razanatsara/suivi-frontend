import React, { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_DIRECTION':
      return { direction: action.payload };
    case 'LOGIN_ADMIN':
      return { admin: action.payload };
    case 'LOGOUT_DIRECTION':
      return { direction: null };
    case 'LOGOUT_ADMIN':
      return { admin: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    direction: null,
    admin: null,
  });

  useEffect(() => {
    const direction = JSON.parse(localStorage.getItem('direction'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    if (direction) {
      dispatch({ type: 'LOGIN_DIRECTION', payload: direction });
    }
    if (admin) {
      dispatch({ type: 'LOGIN_ADMIN', payload: admin });
    }
  }, []);

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
