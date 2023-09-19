import { useEffect, useState } from 'react';
import { useTransactions } from '@app/hooks/useTransactions';
import { TransactionsFilters } from '@app/services/transactionsService/getAll';
import { useDashboard } from '../DashboardContext/useDashboard';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();
  const [isFilterModallOpen, setIsFilterModallOpen] = useState(false);
  const [filters, setFilters] = useState<TransactionsFilters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const {
    transactions, isLoading, isInitialLoading, refetchTransactions,
  } = useTransactions(filters);

  useEffect(() => {
    refetchTransactions();
  }, [filters, refetchTransactions]);

  function handleChangeFilters<TFilter extends keyof TransactionsFilters>(filterProperty: TFilter) {
    return (value: TransactionsFilters[TFilter]) => {
      if (value === filters.month) return;

      setFilters((prevState) => ({
        ...prevState,
        [filterProperty]: value,
      }));
    };
  }

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
    handleChangeFilters,
    filters,
  };
}
