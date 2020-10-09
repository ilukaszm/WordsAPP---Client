import React, { FC, createContext, useContext, useState, useEffect } from 'react';

import { auth } from 'services/firebase';

interface User {
  email: string;
  avatarURL: string;
  uid: string;
}

const AuthContext = createContext(null);

export const AuthProvider: FC = ({ children }) => {
  const authUser = JSON.parse(localStorage.getItem('authUser') as any);
  const [currentUser, setCurrentUser] = useState<User | any>(authUser);

  useEffect(() => {
    const setUser = (user: any) => {
      if (user) {
        const { email, photoURL: avatarURL, uid: userId } = user;

        setCurrentUser({ email, avatarURL, userId });
        localStorage.setItem('authUser', JSON.stringify({ email, avatarURL, userId }));
      } else {
        localStorage.removeItem('authUser');
      }
    };
    const unsubsribe = auth().onAuthStateChanged(setUser);

    return () => unsubsribe();
  }, []);

  return <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>;
};
export const useAuthContext = () => useContext(AuthContext) as User | null;
