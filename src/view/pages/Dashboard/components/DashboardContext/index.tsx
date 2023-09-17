import {
  ReactNode, createContext, useCallback, useState,
} from 'react';

interface DashboardContextvalue {
  areValuesVisible: boolean;
  toggleValuesVisibility(): void;
  isNewAccountModalOpen: boolean;
  openNewAccountModal(): void;
  closeNewAccountModal(): void;
}

export const DashboardContext = createContext({} as DashboardContextvalue);

export function DashboardProvider({ children }: {children: ReactNode}) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsnewAccountModalOpen] = useState(false);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsnewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsnewAccountModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider value={{
      areValuesVisible,
      toggleValuesVisibility,
      isNewAccountModalOpen,
      closeNewAccountModal,
      openNewAccountModal,
    }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
