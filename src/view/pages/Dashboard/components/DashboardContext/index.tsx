import {
  ReactNode, createContext, useCallback, useState,
} from 'react';

interface DashboardContextvalue {
  areValuesVisible: boolean;
  toggleValuesVisibility(): void;
  isNewAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  openNewAccountModal(): void;
  closeNewAccountModal(): void;
  openNewTransactionModal(type: 'INCOME' | 'EXPENSE'): void;
  closeNewTransactionModal(): void;
  newTransactionType: 'INCOME' | 'EXPENSE' | null;
}

export const DashboardContext = createContext({} as DashboardContextvalue);

export function DashboardProvider({ children }: {children: ReactNode}) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsnewAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsnewTransactionModalOpen] = useState(false);
  const [newTransactionType, setNewTransactionType] = useState<'INCOME' | 'EXPENSE' | null>(null);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevState) => !prevState);
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsnewAccountModalOpen(true);
  }, []);

  const closeNewAccountModal = useCallback(() => {
    setIsnewAccountModalOpen(false);
  }, []);

  const openNewTransactionModal = useCallback((type: 'INCOME' | 'EXPENSE') => {
    setNewTransactionType(type);
    setIsnewTransactionModalOpen(true);
  }, []);

  const closeNewTransactionModal = useCallback(() => {
    setNewTransactionType(null);
    setIsnewTransactionModalOpen(false);
  }, []);

  return (
    <DashboardContext.Provider value={{
      areValuesVisible,
      toggleValuesVisibility,
      isNewAccountModalOpen,
      closeNewAccountModal,
      openNewAccountModal,
      isNewTransactionModalOpen,
      openNewTransactionModal,
      closeNewTransactionModal,
      newTransactionType,
    }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
