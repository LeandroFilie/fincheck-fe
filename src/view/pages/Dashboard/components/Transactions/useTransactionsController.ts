import { useState } from 'react';
import { useTransactions } from '@app/hooks/useTransactions';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFilterModallOpen, setIsFilterModallOpen] = useState(false);

  const { transactions, isLoading, isInitialLoading } = useTransactions();

  function handleOpenFilterModal() {
    setIsFilterModallOpen(true);
  }

  function handleCloseFilterModal() {
    setIsFilterModallOpen(false);
  }

  return {
    areValuesVisible,
    isInitialLoading,
    isLoading,
    transactions,
    isFilterModallOpen,
    handleOpenFilterModal,
    handleCloseFilterModal,
  };
}
