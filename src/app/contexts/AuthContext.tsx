import React, { createContext, useCallback, useState } from 'react';
import { localStorageKeys } from '../config/localStorageKeys';

interface AuthContextValue {
  signedIn: boolean;
  signin(token: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedToken = localStorage.getItem(localStorageKeys.TOKEN);
    return !!storedToken;
  });

  const signin = useCallback((token: string) => {
    localStorage.setItem(localStorageKeys.TOKEN, token);
    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.TOKEN);
    setSignedIn(false);
  }, []);

  return (
    <AuthContext.Provider value={{ signedIn, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}
