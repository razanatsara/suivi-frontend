import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

// on créé notre contexte
export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [direction, setDirection] = useState(false);
  const [scolarite, setScolarite] = useState(false);
  const [admin, setAdmin] = useState(false);

  const fetchUser = async () => {
    let adminUrl = 'http://localhost:5000/api/user/loggedInAdmin';
    let directionUrl = 'http://localhost:5000/api/user/loggedInDirection';
    let scolariteUrl = 'http://localhost:5000/api/user/loggedInScolarite';

    const checkAdmin = axios.get(adminUrl);
    const checkDirection = axios.get(directionUrl);
    const checkScolarite = axios.get(scolariteUrl);

    axios
      .all([checkAdmin, checkDirection, checkScolarite])
      .then(
        axios.spread((...responses) => {
          const reponseAdmin = responses[0];
          const reponseDirection = responses[1];
          const reponseScolarite = responses[2];
          if (reponseAdmin.data === true) {
          }
          setAdmin(reponseAdmin.data);
          setDirection(reponseDirection.data);
          setScolarite(reponseScolarite.data);
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <AuthContext.Provider value={{ direction, scolarite, admin, fetchUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
