import { useState } from 'react';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  const [isFilterModallOpen, setIsFilterModallOpen] = useState(false);

  function handleOpenFilterModal() {
    setIsFilterModallOpen(true);
  }

  function handleCloseFilterModal() {
    setIsFilterModallOpen(false);
  }

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    transactions: [],
    isFilterModallOpen,
    handleOpenFilterModal,
    handleCloseFilterModal,
  };
}
