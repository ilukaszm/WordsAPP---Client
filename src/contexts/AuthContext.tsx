import React, { FC, createContext, useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from 'services/firebase';
import { getUserProfile } from 'helpers/manageData';

interface User {
  email: string;
  avatarURL: string;
  uid: string;
}

const AuthContext = createContext(null);

export const AuthProvider: FC = ({ children }) => {
  const authUser = JSON.parse(localStorage.getItem('authUser') as string);
  const [currentUser, setCurrentUser] = useState(authUser);

  const dispatch = useDispatch();

  useEffect(() => {
    const setUser = (user: any) => {
      if (user) {
        const { uid: userId } = user;
        dispatch(getUserProfile(userId));
        setCurrentUser({ userId });

        localStorage.setItem('authUser', JSON.stringify(userId));
      } else {
        localStorage.removeItem('authUser');
      }
    };
    const unsubsribe = auth().onAuthStateChanged(setUser);

    return () => unsubsribe();
  }, [dispatch]);

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};
export const useAuthContext = () => useContext(AuthContext) as User | null;
