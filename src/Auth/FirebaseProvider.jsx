import React, { Children, createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

// we create a contextAPI
export const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setCurrentUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      setCurrentUser(currentUser);
    });

    return () => {
      return subscribe();
    };
  }, []);

  const authInfo = { createUser, signIn, user };

  return (
    <FirebaseContext.Provider value={authInfo}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
