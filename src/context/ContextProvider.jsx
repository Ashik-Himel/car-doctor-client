import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
import PropTypes from 'prop-types';

export const AllContext = createContext(null);

const ContextProvider = ({children}) => {
  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, user => {
      setUser(user);
      setUserLoaded(true);
    })
    return () => unSubscribe();
  }, []);

  const value = {
    userLoaded,
    user
  };
  return (
    <AllContext.Provider value={value}>
      {children}
    </AllContext.Provider>
  );
};

export default ContextProvider;

ContextProvider.propTypes = {
  children: PropTypes.node
}