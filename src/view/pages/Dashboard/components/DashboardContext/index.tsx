import {
  ReactNode, createContext, useCallback, useState,
} from 'react';

interface DashboardContextvalue {
  areValuesVisible: boolean;
  toggleValuesVisibility(): void;
}

export const DashboardContext = createContext({} as DashboardContextvalue);

export function DashboardProvider({ children }: {children: ReactNode}) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
  }, []);

  return (
    <DashboardContext.Provider value={{ areValuesVisible, toggleValuesVisibility }}>
      {children}
    </DashboardContext.Provider>
  );
}
