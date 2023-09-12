/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebse.confilg";
import { createContext } from "react";
import { useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const signUpWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userProfileUpdate = (currentUser, updateUserName) => {
    return updateProfile(currentUser, { displayName: updateUserName });
  };

  const loginWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithGitHub = () => {
    setLoader(true);
    return signInWithPopup(auth, githubProvider);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscrib = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscrib();
    };
  }, []);
  const authInfo = {
    user,
    loader,
    signUpWithEmail,
    userProfileUpdate,
    loginWithGoogle,
    loginWithGitHub,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
