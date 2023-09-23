import React, {
  createContext, useCallback, useEffect, useState,
} from 'react';
import { useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { LaunchScreen } from '@components/LaunchScreen';
import { localStorageKeys } from '../config/localStorageKeys';
import { usersService } from '../services/usersService';
import { User } from '../types/User';

interface AuthContextValue {
  signedIn: boolean;
  user: User | undefined;
  signin(token: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedToken = localStorage.getItem(localStorageKeys.TOKEN);
    return !!storedToken;
  });

  const {
    isError, isFetching, isSuccess, remove, data,
  } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => usersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  const signin = useCallback((token: string) => {
    localStorage.setItem(localStorageKeys.TOKEN, token);
    setSignedIn(true);
  }, []);

  const signout = useCallback(() => {
    localStorage.removeItem(localStorageKeys.TOKEN);
    remove();
    setSignedIn(false);
  }, [remove]);

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou');
      signout();
    }
  }, [isError, signout]);

  return (
    <AuthContext.Provider value={{
      signedIn: isSuccess && signedIn,
      user: data,
      signin,
      signout,
    }}
    >
      <LaunchScreen isLoading={isFetching} />
      {!isFetching && children}
    </AuthContext.Provider>
  );
}
