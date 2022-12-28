import { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_ADMIN':
      return { admin: action.payload };
    case 'LOGIN_DIRECTION':
      return { direction: action.payload };
    case 'LOGIN_SCOLARITE':
      return { scolarite: action.payload };
    case 'LOGOUT_ADMIN':
      return { admin: null };
    case 'LOGOUT_DIRECTION':
      return { direction: null };
    case 'LOGOUT_SCOLARITE':
      return { scolarite: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    admin: null,
    direction: null,
    scolarite: null,
  });

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem('admin'));
    const direction = JSON.parse(localStorage.getItem('direction'));
    const scolarite = JSON.parse(localStorage.getItem('scolarite'));

    if (admin) {
      dispatch({ type: 'LOGIN_ADMIN', payload: admin });
    }
    if (direction) {
      dispatch({ type: 'LOGIN_DIRECTION', payload: direction });
    }
    if (scolarite) {
      dispatch({ type: 'LOGIN_SCOLARITE', payload: scolarite });
    }
  }, []);

  console.log('AuthContext state:', state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
