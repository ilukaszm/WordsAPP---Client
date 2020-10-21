import React, { FC, createContext, useContext, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from 'services/firebase';
import { getUserProfile } from 'helpers/manageData';

interface CurrentUser {
  userId: string;
}

const AuthContext = createContext({ userId: '' });

export const AuthProvider: FC = ({ children }) => {
  const authUser = JSON.parse(localStorage.getItem('authUser') as any) as string;
  const [currentUser, setCurrentUser] = useState({ userId: authUser });

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
export const useAuthContext = () => useContext(AuthContext) as CurrentUser;
