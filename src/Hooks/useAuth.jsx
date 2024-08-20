import React, { useContext } from "react";
import { FirebaseContext } from "../Auth/FirebaseProvider";

const useAuth = () => {
  const auth = useContext(FirebaseContext);

  return auth;
};

export default useAuth;
